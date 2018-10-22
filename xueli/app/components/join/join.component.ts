import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router}from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private rout:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    });
    this.router.params.subscribe((params)=>{this.courseId=params['courseId']});
  }

}
