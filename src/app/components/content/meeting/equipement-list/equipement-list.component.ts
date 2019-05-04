import { Component, OnInit } from '@angular/core';
import { equipement } from '../../../../models/equipement';
import { DynamicDialogRef } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/api';
import { HttpService } from '../../../../services/HttpService';
import { MeetingComponent } from '../meeting.component';
import { MeetingService } from '../../../../services/meeting.service';


@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement-list.component.html',
  styleUrls: ['./equipement-list.component.css']
})
export class EquipementListComponent implements OnInit {
  equipements: equipement[];
  equipement: equipement;
  private meeting: MeetingComponent;

  constructor(public meetingService: MeetingService, public activeModal: DynamicDialogRef,private httpService: HttpService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }


  ngOnInit() {
    this.httpService.getAll().subscribe(
      data => {

        this.equipements = data;
        console.log(this.equipements);
      }
    )
  }

  onRowSelect(event){
    this.meetingService.setEquipement(this.equipement);
    this.activeModal.close();
    
  }


}


