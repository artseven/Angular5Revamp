import { Component, ChangeDetectionStrategy, ViewChild,TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'calendar-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.styles.css']

})

export class DemoComponent {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';
  imgUrl: string;
  popContent = 'Blah';
  modalData: {
    action: string,
    event: CalendarEvent
  }

  smth: CalendarEvent;
  viewDate = new Date();

  constructor(private modal: NgbModal) {

  }

  actions: CalendarEventAction[] = [
    // {
    //   label: '<i class="fa fa-fw fa-pencil"></i>',
    //   onClick: ({event}: {event: CalendarEvent}): void => {
    //     this.handleEvent('Edited', event);
    //   }

    // },
    // {
    //   label: '<i class="fa fa-fw fa-times"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     this.events = this.events.filter(iEvent => iEvent !== event);
    //     this.handleEvent('Deleted', event);
    //   }
    // }
  ]

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      imgUrl: 'https://www.swinglifestyle.com/s1sp1cture5a/MiamiLover/324miamilover_sq.jpg'
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  popover(event) {}
}
