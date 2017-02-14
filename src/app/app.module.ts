import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes'

import { AppComponent }  from './app.component';
import { SideBarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, appRoutes ],
  declarations: [ 
    AppComponent,
    SideBarComponent,
    HeaderComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
