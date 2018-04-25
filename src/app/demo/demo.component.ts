import { Component, ChangeDetectionStrategy, ViewChild,TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
@Component({
  selector: 'calendar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.styles.css']

})

export class DemoComponent {
  view: string = 'month';
  viewDate = new Date();
  events = [];
  nextDate = new Date('April 26, 2018');
  constructor() {
    this.events.push({start: this.viewDate, end: this.viewDate});
    this.events.push({start: this.viewDate, end: this.nextDate});

  }
}
