import { NgModule }      from '@angular/core';
import { BrowserModule } 
 from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } 
  from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } 
  from './create-user/create-user.component';
import { UserDetailsComponent } 
  from './user-details/user-details.component';
import { UserListComponent } 
  from './user-list/user-list.component';
import { UpdateUserComponent } 
  from './update-user/update-user.component';
import { HttpClientModule } 
  from '@angular/common/http';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
