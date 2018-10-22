import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router}from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private rout:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{
      this.courses=data;
    });
    this.router.params.subscribe((params)=>{this.courseId=params['courseId']});
  }
}
