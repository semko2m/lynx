import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalDetailsComponent } from './components/forms/personal-details/personal-details.component';
import { AddressDetailsComponent } from './components/forms/address-details/address-details.component';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './components/forms/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalDetailsComponent,
    AddressDetailsComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
