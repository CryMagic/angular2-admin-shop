import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CategoryComponent } from "./category/category.component";

const routing: Routes = [
    {path:'',component: DashboardComponent},
    {path:'category',component: CategoryComponent}
]
export const appRoutes = RouterModule.forRoot(routing);