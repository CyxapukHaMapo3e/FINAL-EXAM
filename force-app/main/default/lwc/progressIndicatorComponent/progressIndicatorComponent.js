import { LightningElement, api} from 'lwc';

export default class ProgressIndicatorComponent extends LightningElement {
    @api currentStep;

    stepValues = [
        {label : 'Account',     value: 'Account'},
        {label : 'Order',       value: 'Order'},
        {label : 'Info',        value: 'Info'},
    ]



}