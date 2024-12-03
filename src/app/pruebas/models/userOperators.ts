import { IAddress } from "./address";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

export interface IPublication {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
