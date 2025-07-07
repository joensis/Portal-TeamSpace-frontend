import { Component } from '@angular/core';
import {FullCalendarModule} from '@fullCalendar/angular';
import dayGridPlugin from '@fullCalendar/daygrid';
import timeGridPlugin from '@fullCalendar/timegrid';
import interactionPlugin from '@fullCalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, CalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  public events: any[] = []; 
  public options: any; 

  constructor() {}

  ngOnInit(): void {
    this.events = [

    {
      title: "Evento 2",
      start: new Date(),
      description: "evento diario"

    }
  ]

    this.options= {
    
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: new Date(),
      locale: esLocale, 
      headeToolbar: {
        left: 'prev, next',
        center: 'tittle',
        right: 'dayGridMonth, timeGridWeek, timeGridDay'
      }
    }
    
  }

  
    

    
  
  
  
  

}
