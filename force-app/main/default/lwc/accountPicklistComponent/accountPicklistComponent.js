import { LightningElement, api } from 'lwc';

export default class AccountPicklistComponent extends LightningElement {
    
    @api accountList = [];
    error;


    @api accountId;
    @api changeAccountId;

    filterAccountString = '';



    filterAccounts(event){
        this.filterAccountString = event.target.value;
    }

    get filteredAccountList(){
        if(this.filterAccountString === ''){
            return this.accountList;
        }
        return this.accountList.filter(el => el.Name.includes(this.filterAccountString))
    }


    get options() {
        // let choices = this.accountList.map(item => {
        //     return {
        //          label: item.Name,
        //          value: item.Id
        //     };
        // });
        let choices = []
        for (let item of this.filteredAccountList) {
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

