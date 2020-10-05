import { Validator, AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class EqualValidator implements Validator {
    validateEqual: string;
    reverse: string;
    constructor(validateEqual: string, reverse: string);
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    private validateNoReverse;
    private validateReverse;
    static ɵfac: i0.ɵɵFactoryDef<EqualValidator, [{ attribute: "validateEqual"; }, { attribute: "reverse"; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<EqualValidator, "[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]", never, {}, {}, never>;
}
