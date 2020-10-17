import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcountManagerComponent } from './acount-manager/acount-manager.component';
import { NewsManagerComponent } from './news-manager/news-manager.component';
import { SettingsManagerComponent } from './settings-manager/settings-manager.component';

const routes: Routes = [
  {path:'', component: NewsManagerComponent},
  {path:'settings', component: SettingsManagerComponent},
  {path:'acount', component: AcountManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
