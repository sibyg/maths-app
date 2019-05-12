import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdditionComponent} from './addition/addition.component';
import {CountdownModule} from 'ngx-countdown';
import {MultiplicationComponent} from "./multiplication/multiplication.component";

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    MultiplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
