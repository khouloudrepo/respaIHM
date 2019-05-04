import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
