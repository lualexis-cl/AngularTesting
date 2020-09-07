import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDefinitionComponent } from './_components/user-definition/user-definition.component';
import { CreateUserComponent } from './_components/user-definition/create-user/create-user.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreateAreaFormComponent } from './_components/user-definition/create-area-form/create-area-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDefinitionComponent,
    CreateUserComponent,
    CreateAreaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
