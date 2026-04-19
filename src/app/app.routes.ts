import { Routes } from '@angular/router';
import { Home } from './home/home';
import { maakTransactie } from './maakTransactie/maakTransactie';
import { LeesTransacties } from './lees-transacties/lees-transacties';
import { maakCategorie } from './maakCategorie/maakCategorie';
import { Budget } from './Lees-budget/budget';
import { Login } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'maakTransactie', component: maakTransactie },
    { path: 'leesTransacties', component: LeesTransacties},
    {path: 'maakCategorie', component: maakCategorie },
    {path: 'leesBudget', component: Budget},
    {path: 'login', component: Login}
];
