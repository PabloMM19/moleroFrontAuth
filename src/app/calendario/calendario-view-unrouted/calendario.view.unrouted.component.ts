import { Component } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendario-view-unrouted',
  templateUrl: 'calendario.view.unrouted.component.html',
  styleUrls: ['calendario.view.unrouted.component.css']
})
export class CalendarioViewUnroutedComponent {

  handleEventClick = (info: EventClickArg) => {
    if (info.event.start) {
      alert('Clicked on: ' + info.event.start.toISOString());
    } else {
      alert('Clicked on an empty date cell');
    }
  };

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], // Asegúrate de incluir el complemento dayGrid en los plugins utilizados
    events: [
      { title: 'event 1', date: '2024-01-01' },
      { title: 'event 2', date: '2024-01-02' }
    ],
    eventClick: this.handleEventClick.bind(this)
  };

  constructor() {}

  
}
