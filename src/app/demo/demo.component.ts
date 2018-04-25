import { Component } from '@angular/core';

@Component({
  selector: 'calendar-demo',
  templateUrl: 'demo.component.html'

})

export class DemoComponent {
  view: string = 'month';
  viewDate = new Date();
  events = [];
}
