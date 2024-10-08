import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlockComponent } from './about/block/block.component';
import { EventComponent } from './about/event/event.component';


export const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:"full"},
{path:'home', component:HomeComponent},
{path:'about',component:AboutComponent,children:[
    {path:'block',component:BlockComponent},
   {path:'event',component:EventComponent}
]},
{path:'contact-us', component:ContactUsComponent},
{path:'',component:NotFoundComponent}

];

