import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: 'app-home', component: HomeComponent },
    { path: 'app-about', component: AboutComponent },
    { path: '', redirectTo: '/app-home', pathMatch: 'full' },
];
