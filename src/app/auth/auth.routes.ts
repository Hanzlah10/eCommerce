import { Route } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

export const authRoutes: Route[] = [
    {
        path: '',
        component: LoginComponent
    }
]