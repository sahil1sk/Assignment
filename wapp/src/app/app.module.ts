import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatButtonModule } from '@angular/material/button'; 
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './components/user/user.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserProfileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatTabsModule, 
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
