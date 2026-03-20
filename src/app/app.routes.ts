import { Routes } from '@angular/router';
import { Home } from './home/home';
import { maakTransactie } from './maakTransactie/maakTransactie';
import { LeesTransacties } from './lees-transacties/lees-transacties';
import { maakCategorie } from './maakCategorie/maakCategorie';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'maakTransactie', component: maakTransactie },
    { path: 'leesTransacties', component: LeesTransacties},
    {path: 'maakCategorie', component: maakCategorie }
];
