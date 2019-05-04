
import { Component, OnInit } from '@angular/core';
import {salle} from '../../../../models/salle';
import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';
import {HttpService } from '../../../../services/HttpService';
import { MeetingComponent } from '../meeting.component';
import { MeetingService } from '../../../../services/meeting.service';
@Component({
  selector: 'app-salle-list',
  templateUrl: './salle-list.component.html',
  styleUrls: ['./salle-list.component.css']
})
export class SalleListComponent implements OnInit {

  salles:salle[];
  salle: salle;
  private meeting: MeetingComponent;
  constructor(public meetingService: MeetingService, public activeModal: DynamicDialogRef, private httpService :HttpService , public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
    this.httpService.findAllSalle().subscribe(
      data=>{
        console.log(data);
        this.salles=data;
      }
    )
    }
    onRowSelect(event){
      this.meetingService.setsalle(this.salle);
      this.activeModal.close();
  }
}