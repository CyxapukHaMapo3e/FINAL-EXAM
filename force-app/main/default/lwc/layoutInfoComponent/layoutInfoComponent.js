import { LightningElement, api} from 'lwc';

export default class LayoutInfoComponent extends LightningElement {

    @api orderId;
    @api accountId;
    
    @api accountList;
    @api orderList;


    baseUrl = 'https://' + location.host + '/';

    orderName; 
    paymentDueDate;
    totalAmount;
    accountName;

    accountURL;
    orderURL

    get listinfo(){
         for(let item of this.accountList){
            if(item.Id === this.accountId){
                this.accountName = item.Name;
                this.accountURL = this.baseUrl + this.accountId;
             }
         }
        
         for(let item of this.orderList){
             if(item.Id === this.orderId){
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

}
