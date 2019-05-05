import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  currentUser: User;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  get isAdmin() {
    this.currentUser = this.authenticationService.currentUserValue;

    return this.currentUser && this.currentUser.role === 'admin';
  }
}
