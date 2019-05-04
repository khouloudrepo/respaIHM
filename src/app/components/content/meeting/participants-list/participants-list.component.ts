import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/models/person';
import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';
import {HttpService } from '../../../../services/HttpService';
import { MeetingService } from '../../../../services/meeting.service';
@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {

  participants: person[];
  selected: person[]; 
  cols: any[];
  
  constructor(public meetingService: MeetingService, public activeModal: DynamicDialogRef, private httpService :HttpService , public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {

    this.httpService.getAllPerson().subscribe(
      data=>{
        console.log(data);
        this.participants=data;
      }
    )

    this.cols = [
      { field: 'nom', header: 'nom' },
      { field: 'prenom', header: 'prenom' },
      { field: 'email', header: 'email' },
      { field: 'departement', header: 'departement' }
  ];
}

onRowSelect(event){
  this.meetingService.setperson(event.data);
}


}
