import { Validator, AbstractControl } from '@angular/forms';
export declare class EqualValidator implements Validator {
    validateEqual: string;
    reverse: string;
    constructor(validateEqual: string, reverse: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    private validateNoReverse;
    private validateReverse;
}
