import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './components/content/meeting/meeting.component';
import { UserReservationsComponent } from './components/content/user-reservations/user-reservations.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard]  },
  { path: 'meeting', component: MeetingComponent },
  { path: 'user-reservations', component: UserReservationsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
