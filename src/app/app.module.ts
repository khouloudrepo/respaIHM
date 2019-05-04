import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { AppMaterialModule } from './app-material.module';
import { MeetingComponent } from './components/content/meeting/meeting.component';
import { CalendarModule } from 'primeng/calendar';
import { FieldsetModule } from 'primeng/fieldset';
import { EditorModule } from 'primeng/editor';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SalleListComponent } from './components/content/meeting/salle-list/salle-list.component';
import { EquipementListComponent } from './components/content/meeting/equipement-list/equipement-list.component';
import { ParticipantsListComponent } from './components/content/meeting/participants-list/participants-list.component';
import { FieldErrorDisplayComponentComponent } from './components/util/field-error-display-component/field-error-display-component.component';
import {DynamicCalendarModule} from './dynamic-calendar/dynamic-calendar.module';
import {CalendarComponent} from './dynamic-calendar/calendar/calendar.component';
import { UserReservationsComponent } from './components/content/user-reservations/user-reservations.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    MeetingComponent,
    SalleListComponent,
    EquipementListComponent,
    ParticipantsListComponent,
    FieldErrorDisplayComponentComponent,
    UserReservationsComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule,
    CalendarModule,
    FieldsetModule,
    EditorModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    DynamicCalendarModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent, CalendarComponent],
  entryComponents: [
    SalleListComponent,
    EquipementListComponent,
    ParticipantsListComponent]

})
export class AppModule { }
