export interface AddressInterface {
    __v: number;
    _id: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    pincode: string;
    state: string;
    createdAt: string;
    owner: string;
    updatedAt: string;
}

export interface Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}