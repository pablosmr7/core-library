import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreditsComponent } from './components/credits/credits.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'credits', component: CreditsComponent },
];
