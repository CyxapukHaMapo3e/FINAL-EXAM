import { createElement } from 'lwc';
import AccountPicklistComponent from 'c/accountPicklistComponent';

describe('c-account-picklist-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        const element = createElement('c-account-picklist-component', {
            is: AccountPicklistComponent
        });
        document.body.appendChild(element);
        expect(2).toBe(2);
    });
    
    it('displays first name as uppercase', async () => {

        const element = createElement('c-account-picklist-component', {
            is: AccountPicklistComponent
        });
        document.body.appendChild(element);

    
        const detailEl = element.shadowRoot.querySelector('div');
        expect(detailEl).toBeTruthy;
    });

});