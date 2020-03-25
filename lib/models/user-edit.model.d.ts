import { User } from '@polpware/ngx-oauth2';
export declare class UserEdit extends User {
    constructor(currentPassword?: string, newPassword?: string, confirmPassword?: string);
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
}
