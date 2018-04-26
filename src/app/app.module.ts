import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ElementRef } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarModule } from 'angular-calendar';
import { DemoModule } from './demo/demo.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    DemoModule,
    NgbModule.forRoot(),
    FormsModule

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
