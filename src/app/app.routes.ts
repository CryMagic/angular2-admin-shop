import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";

const routing: Routes = [
    {path:'',component: DashboardComponent}
]
export const appRoutes = RouterModule.forRoot(routing);