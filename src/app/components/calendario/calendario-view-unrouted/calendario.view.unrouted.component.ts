import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

/*import libraries from fullcalendar*/

import { ICalendario } from 'src/app/model/calendario.model';
import { CalendarioService } from 'src/app/service/calendario.service';

@Component({
  selector: 'app-calendario-view-unrouted',
  templateUrl: 'calendario.view.unrouted.component.html',
  styleUrls: ['calendario.view.unrouted.component.css']
})
export class CalendarioViewUnroutedComponent implements OnInit{

  calendario: ICalendario[] = [];
  calendarOptions: CalendarOptions = {}; // Opciones del calendario

  constructor( private calendarioService: CalendarioService ) {}

  ngOnInit(): void {
    this.loadCalendario();
  }

  loadCalendario() {
    this.calendarioService.getCalendarioData().subscribe(data => {
      this.calendario = data.content;
      console.log(this.calendario);
      this.setupCalendario();
    });
  }

  setupCalendario(): void {
    const calendarOptions: CalendarOptions = {
      initialView: 'dayGridMonth',
      plugins: [dayGridPlugin],
      events: this.calendario.map(event => ({
        title: event.title,
        date: event.date
      })),
      eventClick: this.handleEventClick.bind(this),
      locale: esLocale // Aquí se establece el idioma español
    };
    this.calendarOptions = calendarOptions;
    console.log(this.calendarOptions);
  }

  handleEventClick(info: EventClickArg): void {
    if (info.event.start) {
      alert('Has hecho click en: ' + info.event.start.toISOString());
    } else {
      alert('No hay evento en esta fecha');
    }
  }
}
