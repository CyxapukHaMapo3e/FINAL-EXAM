import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import getOrders from '@salesforce/apex/OrderController.getOrders';

export default class OrderAutomationApp extends LightningElement {
    currentStep = 'Account';
    error;
    
    accountId;
    orderId;
    accountList = [];
    orderList = [];

    showAccount = true;
    showOrder = false;
    showInfo = false;
    
    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accountList = data;
            this.error = undefined;
        } else if (error) {
            console.error('Error: \n ', error);
            this.contactList = undefined;
            this.error = error;
        }
    }

  
    @wire(getOrders)
    wiredOrders({ error, data }) {
        if (data) {
            this.orderList = data;
            this.error = undefined;
        } else if (error) {
            console.error('Error: \n ', error);
            this.orderList = undefined;
            this.error = error;
        }
    }

    changeAccountId = event => {
        this.accountId = event.target.value;
    }

    changeOrderId = event =>{
        this.orderId = event.target.value;
    }
  
    handleNext(event){
        event.preventDefault();
        this.prepareCurrentStep(event);
    }

    handlePrevious(event){
        event.preventDefault();
        this.prepareCurrentStep(event);
    }
    
    handleRestart(event){
        event.preventDefault();
        this.prepareCurrentStep(event);
    }

    prepareCurrentStep(event){
        this.showAccount = event.detail.showAccount;
        this.showOrder = event.detail.showOrder;
        this.showInfo = event.detail.showInfo;

        console.log(this.currentStep)

        if(this.showAccount){
            this.currentStep = 'Account';
        }else if(this.showOrder){
            this.currentStep = 'Order';
        }else if(this.showInfo){
            this.currentStep = 'Info';
        }
        console.log(this.currentStep)
    }
}