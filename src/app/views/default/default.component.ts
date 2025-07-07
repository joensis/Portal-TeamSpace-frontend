import { Component } from '@angular/core';
import { Calendar } from '@fullcalendar/core/index.js';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-default',
  imports: [CalendarComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

}
