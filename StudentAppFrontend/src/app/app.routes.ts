import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CrudComponent } from './components/crud/crud.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
 
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: "login",
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children : 
        [
            {
                path:"crud",
                component: CrudComponent,
                canActivate: [authGuard]
            }
        ]
        
    }


];
