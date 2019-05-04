import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { SalleListComponent } from './salle-list/salle-list.component';
import { EquipementListComponent } from './equipement-list/equipement-list.component';
import { equipement } from 'src/app/models/equipement';
import { MeetingService } from '../../../services/meeting.service';
import { Subscription } from 'rxjs/Subscription';
import { salle } from 'src/app/models/salle';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { person } from 'src/app/models/person';
import { meetingFrom } from 'src/app/models/meetingFrom';
import { HttpService } from 'src/app/services/HttpService';
import { BehaviorSubject, Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css'],
  providers: [DialogService]
})
export class MeetingComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  selectable = true;
  removable = true;
  private datetimeDebut: Date;
  private startTime: Date;
  private endTime: Date;
  private text: string;
  public equipements: equipement[] = [];
  public participants: person[] = [];
  public salle: salle;
  nom: string;
  subscription: Subscription;
  private meeting: meetingFrom = new meetingFrom();
  error: any = { isError: false, errorMessage: '' };
  constructor(public dialogService: DialogService, private meetingService: MeetingService, private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      sujet: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      startTime: new FormControl(null, Validators.required),
      endTime: new FormControl(null, Validators.required),
      salle: new FormControl(null, Validators.required),
      participant: new FormControl(null, Validators.required),
    })
    this.meetingService.currentEquipement.subscribe(eq => this.equipements.push(eq));
    this.meetingService.currentsalle.subscribe(sal => this.salle = sal);
    this.meetingService.currentperson.subscribe(participant => this.participants.push(participant));
  }
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
  get f() { return this.form.controls; }
  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }
  show() {
    const ref = this.dialogService.open(SalleListComponent, {
      data: {

        name: 'salle1',
        type: 'salle de reunion',
        capacite: 10,
        status: 'disponible'


      },
      header: 'Choisir une salle',
      width: '70%'
    });
  }
  showEquipement() {
    const ref = this.dialogService.open(EquipementListComponent, {

      header: 'Choisir un equipement',
      width: '70%'
    });

  }
  showParticipant() {
    const ref = this.dialogService.open(ParticipantsListComponent, {

      header: 'Participants',
      width: '70%'
    });

  }
  remove(equipement: equipement) {
    const index = this.equipements.indexOf(equipement);

    if (index >= 0) {
      this.equipements.splice(index, 1);
    }
  }

  register(form) {
    this.submitted = true;
    if (this.form.valid) {
      console.log('form submitted');

      this.meeting.dateDebut = form.value.startDate;
      this.meeting.startTime = form.value.startTime;
      this.meeting.endTime = form.value.endTime;
      this.meeting.sujet = form.value.sujet;
      this.meeting.participants = Array.from(this.participants, x => x.email);
      this.meeting.salle = this.salle.nom;
      this.meeting.equipements = Array.from(this.equipements, e => e.matricule);
      this.meeting.message = form.value.message;
      console.log(this.meeting);
      this.httpService.saveMeeting(this.meeting).subscribe(data => console.log("success"));
    } else {
    }
  }

  compareTwoDates() {
    let isUndefined = this.form.controls['endTime'].value===undefined || this.form.controls['startTime'].value===undefined;
    this.error =  { isError: false, errorMessage: '' };
    if (!isUndefined && this.form.controls['endTime'].value < this.form.controls['startTime'].value ) {
      this.error = { isError: true, errorMessage: 'End Date can\'t before start date' };
    }
  }
  reset() {
    this.form.reset();
  }
}
