import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { person } from 'src/app/models/person';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public person:person;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getConfig().subscribe(
      data=>{
        console.log(data);
        this.person=data;
      console.log(this.person);
      }
    );
    
  }

  getConfig():Observable<person>{
    return this.http.get<person>("http://localhost:8080/name").pipe(
      map(data => data)
  );
  }
}
