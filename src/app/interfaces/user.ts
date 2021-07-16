import { Role } from "../enum/role";

export interface User {
    id: string;
    role: Role;
    email: string;
    name: string;
    phone: string;
    document: string;
    password?: string;
}

export interface Credentials {
    email: string;
    password: string;
}