import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      console.log(data);
    });
    //this.http.post('/api',null).subscribe((data)=>{
      //console.log(data);
    //});
  }
}
