import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const BasicRoutes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(BasicRoutes)],
  exports: [RouterModule]
})
export class BasicsRoutingModule { }
