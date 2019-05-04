import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { equipement } from '../models/equipement';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { salle } from '../models/salle';
import { person } from '../models/person';
import { meetingFrom } from '../models/meetingFrom';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private server = 'http://localhost:8080/';
   
    constructor(private http: HttpClient) { }

    getAll(): Observable<equipement[]> {
        let uri = this.server + 'allEquipemets';
        return this.http.get<equipement[]>(uri)
            .pipe(
                map(data => data)
            );
    }
    findAllSalle(): Observable<salle[]> {
        let uri = this.server + 'allSalles';
        return this.http.get<salle[]>(uri)
            .pipe(
                map(data => data)
            );
    }
    getAllPerson(): Observable<person[]> {
        let uri = this.server + 'allPersons';
        return this.http.get<person[]>(uri)
            .pipe(
                map(data => data)
            );
    }

    saveMeeting(meetingForm: meetingFrom): Observable<any> {
        return this.http.post<any>(this.server + 'saveMeeting', JSON.stringify(meetingForm), httpOptions);
    }
}

