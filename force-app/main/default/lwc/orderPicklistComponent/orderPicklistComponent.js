import { LightningElement, api } from 'lwc';



export default class OrderPicklistComponent extends LightningElement {
    @api orderList;
    error;

    @api orderId;
    @api accountId;

    @api changeOrderId;

    get options() {
        let choices = []
        let now = new Date();
        for (let item of this.orderList) {
            if (item.Account__c === this.accountId) {
                let date = new Date(item.Payment_Due_date__c);
                let difference = (date - now)/1000/60/60/24;
                let days = Math.round(difference);
                choices.push({
                    label: days + ' days',
                    value: item.Id,
                    days: days
                })
             }
         }

        //  let choices = this.orderList.map(item => {
        //      return {
        //           label: item.Name,
        //           value: item.Id
        //      };
        // });
        
        return choices.sort((firstEl, secondEl) => firstEl.days - secondEl.days);
    
    }

    handleNext(event){
        event.preventDefault();
        const eventNext = new CustomEvent('next', {
            detail: {
                showOrder     : false,
                showAccount     : false,
                showInfo : true,
            }
        });
        this.dispatchEvent(eventNext);
    }

    handlePrevious(event){
        event.preventDefault();
        const eventNext = new CustomEvent('previous', {
            detail: {
                showOrder     : false,
                showAccount     : true,
                showInfo : false,
            }
        });
        this.dispatchEvent(eventNext);
    }
    
}
