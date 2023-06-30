import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { HttpService } from './Service/http.service';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDataComponent } from './edit-data/edit-data.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { RegForm2Component } from './reg-form2/reg-form2.component';
import { RegSerService } from './Service/reg-ser.service';
import { LoginForm2Component } from './login-form2/login-form2.component';
import { StorageService } from './Service/storage.service';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddItemComponent,
    EditDataComponent,
    RegFormComponent,
    RegForm2Component,
    LoginForm2Component,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpService, RegSerService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
