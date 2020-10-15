import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsManagerComponent } from './news-manager/news-manager.component';

const routes: Routes = [
  {path:'', component: NewsManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
