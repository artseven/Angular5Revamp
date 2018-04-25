import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { DemoUtilsModule } from '../demo-utils/module';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    NgbModule
    // DemoUtilsModule
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class DemoModule {}
