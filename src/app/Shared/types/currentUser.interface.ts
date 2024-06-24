export interface Avatar {
    url: string;
    localPath: string;
    _id: string;
}

export interface CurrentUserInterface {
    _id: string;
    avatar: Avatar;
    username: string;
    email: string;
    role: string;
    loginType: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}