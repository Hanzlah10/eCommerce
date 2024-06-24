export interface Avatar {
    url: string;
    localPath: string;
    _id: string;
}

export interface CurrentUserInterface {
    __v: number;
    _id: string;
    avatar: Avatar;
    createdAt: string;
    email: string;
    isEmailVerified: boolean;
    loginType: string;
    role: string;
    updatedAt: string;
    username: string;
}


