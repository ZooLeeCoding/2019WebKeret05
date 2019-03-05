import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirsztComponent } from './my-firszt/my-firszt.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MainComponent } from './main/main.component';

import {AppRoutingModule} from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirsztComponent,
    MySecondComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
