import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent,FooterComponent,EventCardComponent,SearchFormComponent,NotificationComponent } from './component'
import { EventContainerComponent,EventDetailsComponent } from './pages';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from './safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EventContainerComponent,
    EventDetailsComponent,
    EventCardComponent,
    NotificationComponent,
    SearchFormComponent,
    SafePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
