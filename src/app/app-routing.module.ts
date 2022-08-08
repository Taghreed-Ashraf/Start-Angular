import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes =
[
  {path:"" , redirectTo:'Home', pathMatch:'full'},
  {path:'Home' , component:HomeComponent , title : "Start Angular"},
  {path:'Portfolio' , component:PortfolioComponent , title : "Start Angular"},
  {path:'About' , component:AboutComponent , title : "Start Angular"},
  {path:'Contact' , component:ContactComponent , title : "Start Angular"},
  {path:'**' , component:NotFoundComponent , title : "Not Found"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
