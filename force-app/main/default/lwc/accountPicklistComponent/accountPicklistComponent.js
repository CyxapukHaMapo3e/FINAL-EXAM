import { LightningElement, api } from 'lwc';

export default class AccountPicklistComponent extends LightningElement {
    
    @api accountList = [];
    error;


    @api accountId;
    @api changeAccountId;

    searchString = '';



    get filteredAccountList(){
        if(this.searchString === ''){
            return this.accountList;
        }
        return this.accountList.filter(el => el.Name.includes(this.searchString))
    }


    get options() {
        let choices = this.filteredAccountList.map(item => {
             return {
                  label: item.Name,
                  value: item.Id
             };
        });
        return choices;
    }

    changeAccountList(event){
        this.searchString = event.target.value;
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

