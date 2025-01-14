import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'skill', component: SkillComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
