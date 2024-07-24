export interface CouponInterface {
    __v: number;
    _id: string;
    couponCode: string;
    createdAt: string;
    discountValue: number;
    expiryDate: string;
    isActive: boolean;
    minimumCartValue: number;
    name: string;
    owner: string;
    startDate: string;
    type: string;
    updatedAt: string;
}

export interface CouponFormInterface {
    coupon: string
}