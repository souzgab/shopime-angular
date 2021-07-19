import { Role } from "../enum/role";

export interface User {
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password?: string;
    token?: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export class IUserSignup {
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password?: string;
    token?: string;
}