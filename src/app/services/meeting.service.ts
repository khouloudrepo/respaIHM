import { Injectable } from '@angular/core';
import { equipement } from '../models/equipement';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { salle } from '../models/salle';
import { person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  public equipement: equipement;
  public equipementSubject = new BehaviorSubject(new equipement);
  currentEquipement = this.equipementSubject.asObservable();

  public salle: salle;
  public salleSubject = new BehaviorSubject(new salle);
  currentsalle = this.salleSubject.asObservable();

  public person: person;
  public personSubject = new BehaviorSubject(new person);
  currentperson = this.personSubject.asObservable();

  constructor() { }

  setEquipement(equipement: equipement): void {

    this.equipementSubject.next(equipement);
  }

  setsalle(salle: salle): void {
    this.salleSubject.next(salle);
  }
  setperson(person: person): void {
    this.personSubject.next(person);
  }
}

