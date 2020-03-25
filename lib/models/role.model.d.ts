import { Permission } from '@polpware/ngx-oauth2';
export declare class Role {
    constructor(name?: string, description?: string, permissions?: Permission[]);
    id: string;
    name: string;
    description: string;
    usersCount: number;
    permissions: Permission[];
}
