export interface CategoryInterface {
    __v: number,
    _id: string,
    createdAt: string,
    name: string,
    owner: string,
    updatedAt: string
}


export interface PaginationInterface {
    categories: CategoryInterface[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    serialNumberStartFrom: number;
    totalCategories: number;
    totalPages: number;

}