export interface MainImage {
    _id: string;
    localPath: string;
    url: string;
}


export interface SubImage {
    _id: string;
    localPath: string;
    url: string;
}


export interface ProductInterface {
    __v: number;
    _id: string;
    category: string;
    createdAt: string;
    description: string;
    mainImage: MainImage;
    name: string;
    owner: string;
    price: number;
    stock: number;
    subImages: SubImage[];
    updatedAt: string;
}

export interface Category {
    _id: string;
    name: string;
}

export interface ProductsByCategoryWithPagination {
    category: Category;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: number | null;
    page: number;
    prevPage: number | null;
    products: ProductInterface[];
    serialNumberStartFrom: number;
    totalPages: number;
    totalProducts: number;
}

