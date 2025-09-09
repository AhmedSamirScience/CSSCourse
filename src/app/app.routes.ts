import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home-component/home-component';
import { About } from '../components/about/about';
import { Contact } from '../components/contact/contact';
import { FirstComponent } from '../components/first-component/first-component';
import { SecondComponent } from '../components/second-component/second-component';
import { ThirdComponent } from '../components/third-component/third-component';
import { FourthComponent } from '../components/fourth-component/fourth-component';
import { FifthComponent } from '../components/fifth-component/fifth-component';
import { SixthComponent } from '../components/sixth-component/sixth-component';
import { SeventhComponent } from '../components/seventh-component/seventh-component';
import { NinthComponent } from '../components/ninth-component/ninth-component';
import { TenthComponent } from '../components/tenth-component/tenth-component';
import { EleventhComponent } from '../components/eleventh-component/eleventh-component';



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
    { path: 'sixth', component: SixthComponent },
    { path: 'seventh', component: SeventhComponent },
    { path: 'ninth', component: NinthComponent },
    { path: 'tenth', component: TenthComponent },
    { path: 'eleventh', component: EleventhComponent },

 ];
