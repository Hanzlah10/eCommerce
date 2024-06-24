import { CurrentUserInterface } from "../../Shared/types/currentUser.interface";

export interface AuthResponseInterface {
    accessToken: string;
    refreshToken: string;
    user: CurrentUserInterface;
}