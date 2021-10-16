import { LightningElement, api } from 'lwc';

export default class AccountPicklistComponent extends LightningElement {
    
    @api accountList = [];
    error;


    @api accountId;
    @api changeAccountId;


    get options() {
        // let choices = this.accountList.map(item => {
        //     return {
        //          label: item.Name,
        //          value: item.Id
        //     };
        // });
        let choices = []
        for (let item of this.accountList) {
            if (item.Orders__r !== undefined) {
                choices.push({
                    label: item.Name,
                    value: item.Id
                })
            }
        }
        return choices;
    }

    handleNext(event){
        event.preventDefault();
        const eventNext = new CustomEvent('next', {
            detail: {
                showAccount     : false,
                showOrder     : true,
                showInfo : false,
            }
        });
        this.dispatchEvent(eventNext);
    }
    
}

