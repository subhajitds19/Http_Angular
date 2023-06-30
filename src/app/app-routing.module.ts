import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './components/view/view.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegForm2Component } from './reg-form2/reg-form2.component';
import { LoginForm2Component } from './login-form2/login-form2.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', redirectTo:'/register2', pathMatch:'full'},
  {path:'view', component:ViewComponent},
  {path:'insert', component:AddItemComponent},
  {path:'edit/:id', component:EditDataComponent},
  {path:'register', component:RegFormComponent},
  {path:'register2', component:RegForm2Component},
  {path:'login', component:LoginForm2Component},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
