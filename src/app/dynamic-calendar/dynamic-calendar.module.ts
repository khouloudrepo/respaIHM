import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports:[CalendarComponent]
})
export class DynamicCalendarModule { }
