import { LightningElement, api } from 'lwc';
import sendEmailWithOrderInfo from '@salesforce/apex/SendEmailController.sendEmailWithOrderInfo';
import Id from '@salesforce/user/Id';
import JetBiLogo from '@salesforce/resourceUrl/JetBiLogo'


export default class LayoutInfoComponent extends LightningElement {

    @api orderId;
    @api accountId;

    @api accountList;
    @api orderList;

    logo = JetBiLogo;


    error;


    baseUrl = 'https://' + location.host + '/';

    orderName;
    paymentDueDate;
    totalAmount;
    accountName;

    accountURL;
    orderURL;

    disable;

    get disableButton(){
        if(this.disable===true){
            return true;
        }else{
            return false;
        }
    }

    get infoList() {
        for (let item of this.accountList) {
            if (item.Id === this.accountId) {
                this.accountName = item.Name;
                this.accountURL = this.baseUrl + this.accountId;
            }
        }

        for (let item of this.orderList) {
            if (item.Id === this.orderId) {
                this.orderName = item.Name;
                this.orderURL = this.baseUrl + this.orderId;
                this.paymentDueDate = item.Payment_Due_date__c;
                this.totalAmount = item.Total_Amount__c;
            }
        }
    }

    handlePrevious(event) {
        event.preventDefault();
        const eventNext = new CustomEvent('previous', {
            detail: {
                showOrder: true,
                showAccount: false,
                showInfo: false,
            }
        });
        this.dispatchEvent(eventNext);
    }

    handleRestart(event) {
        event.preventDefault();
        const eventNext = new CustomEvent('restart', {
            detail: {
                showOrder: false,
                showAccount: true,
                showInfo: false,
            }
        });
        this.dispatchEvent(eventNext);
    }

    handleSendEmail() {
        const warningMessage = confirm('Are you sure you want to send an email?');
        if(warningMessage){
        const subject = 'The information about your order.';
        const body =
            `
            <h1>${this.accountName} thank you for your order!</h1>
            <p>Your ${this.orderName} has been received.</p>
            <p>Payment Due date : ${this.paymentDueDate}.</p>
            <p>Total Amount: ${this.totalAmount} $.</p>
            <img src=${this.logo}/>
            `
        const emailTemplate = {body: body, subject: subject, userId: Id}
        sendEmailWithOrderInfo(emailTemplate).then( () => {
            this.disable = true;
        }).catch( error => {
           console.error('Error: \n ', error);
           this.error = error;
        });
        }
    }

}
