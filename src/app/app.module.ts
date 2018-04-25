import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ElementRef } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';
import { DemoModule } from './demo/demo.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    DemoModule,
    NgbModule.forRoot()

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
