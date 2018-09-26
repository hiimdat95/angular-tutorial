import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// import { PostsComponent } from './posts/posts.component';
// import { HomeComponent } from './home/home.component';
// import { KingComponent } from './king/king.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,HomeComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, HttpModule, BrowserAnimationsModule, MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
