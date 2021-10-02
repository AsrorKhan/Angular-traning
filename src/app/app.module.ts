import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import {DataService} from "./services/data.service";
import {LogService} from "./services/log.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
