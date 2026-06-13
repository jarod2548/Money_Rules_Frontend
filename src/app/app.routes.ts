import { Routes } from '@angular/router';
import { Home } from './home/home';
import { LeesBudgets } from './Budgets/leesBudgets';
import { Login } from './login/login';
import { LeesBudget } from './lees-budget/lees-budget';
import { Categorie } from './categorie/categorie';
import { AuthGuard } from './guards/AuthGuard';
import { LoginGuard } from './guards/LoginGuard';
import { Transactie } from './transactie/transactie';
import { Meldingen } from './meldingen/meldingen';


export const routes: Routes = [
    { path: 'home', component: Home, canActivate: [AuthGuard] },
  {path:'transactie', component: Transactie, canActivate:[AuthGuard]},
  { path: 'categorie', component: Categorie, canActivate: [AuthGuard] },
  { path: 'leesBudgets', component: LeesBudgets, canActivate: [AuthGuard] },
  { path: 'leesBudget/:id', component: LeesBudget, canActivate: [AuthGuard] },
    {path: 'login', component: Login, canActivate:[LoginGuard]},
    { path: 'notifications', component: Meldingen, canActivate:[AuthGuard] }
];
