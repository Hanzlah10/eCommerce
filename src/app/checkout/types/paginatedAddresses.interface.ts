import { AddressInterface } from "./Address.interface";

export interface PaginatedAddressesInterface {
    addresses: AddressInterface[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    serialNumberStartFrom: number;
    totalAddresses: number;
    totalPages: number;
}

