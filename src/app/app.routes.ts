import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
 ];
