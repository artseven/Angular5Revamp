import { Component, ChangeDetectionStrategy, ViewChild,TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'calendar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.styles.css']

})

export class DemoComponent {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';
  popContent = 'Blah';
  modalData: {
    action: string,
    event: CalendarEvent
  }
  viewDate = new Date();
  events = [];
  nextDate = new Date('April 26, 2018');
  constructor(private modal: NgbModal) {
    this.events.push({start: this.viewDate, end: this.viewDate, title: 'TWO DAY EVENT'});
    this.events.push({start: this.viewDate, end: this.nextDate, title: 'ONE DAY EVENT'});
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
        this.handleEvent('Edited', event);
      }
    }
  ]

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
}
