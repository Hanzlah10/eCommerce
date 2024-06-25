import { Route } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";

export const globalRoute: Route[] = [
    {
        path: '',
        component: LandingPageComponent
    }
]