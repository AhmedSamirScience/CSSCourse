import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { FirstComponent } from '../components/first-component/first-component';
import { SecondComponent } from '../components/second-component/second-component';
import { ThirdComponent } from '../components/third-component/third-component';
import { FourthComponent } from '../components/fourth-component/fourth-component';
import { FifthComponent } from '../components/fifth-component/fifth-component';



export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
    { path: 'fourth', component: FourthComponent }, 
    { path: 'fifth', component: FifthComponent },

 ];
