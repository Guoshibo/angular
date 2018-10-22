import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  course;
  ngOnInit() {
    this.http.get('/api/join').subscribe((data)=>{
      this.course=data;
      console.log(this.course);
    });
  }
}
