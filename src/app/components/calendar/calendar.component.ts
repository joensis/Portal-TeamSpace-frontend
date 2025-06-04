import { Component } from '@angular/core';
import {FullCalendarModule} from '@fullCalendar/angular';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, CalendarComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
