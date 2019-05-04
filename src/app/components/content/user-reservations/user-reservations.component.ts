import { Component, OnInit } from '@angular/core';
import { reservation } from 'src/app/models/reservation';
import { constants } from 'src/app/services/const';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  constructor(public reservationService: ReservationService) { }
  events: reservation[]=[] ;
  ngOnInit() {
    this.events.push(
      {
        'title': 'reunion',
        'color': constants.yellow_primary,
        'start': new Date("Sun Apr 28 2019 20:17:43 GMT+0200"),
       'end': new Date("Sun Apr 28 2019 22:17:43 GMT+0200")
    });
    console.log( this.events);
    this.reservationService.setReservation( this.events);
  }

}
