import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { reservation } from '../models/reservation';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    public reservationSubject = new BehaviorSubject(new reservation);
    currentReservation = this.reservationSubject.asObservable();

    setReservation(reservation: reservation[]): void {
        console.log(reservation);
        reservation.forEach(res => this.reservationSubject.next(res));

    }
}