import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  course;
  ngOnInit() {
    this.http.get('/api/community').subscribe((data) => {
      this.course = data;
      console.log(this.course);
    });
  }

}
