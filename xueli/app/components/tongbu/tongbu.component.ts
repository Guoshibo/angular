import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router}from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private rout:Router) { }
  courseId:number;
  courses;
  ngOnInit() {
    this.http.get('/api/course').subscribe((data)=>{
      this.courses=data;
    });
    //this.courseId=this.router.snapshot.params['courseId'];
    //该写法只执行一次，如果视图切换都切换到了这个组件，那么在第一次执行得到的属性值即使之后改变也在其他
    //视图中无法看到（参数快照）
    this.router.params.subscribe((params)=>{this.courseId=params['courseId']});
    //该写法是订阅了参数，一旦参数发生了变化，视图中就会得到最新的属性值（参数订阅形式）
  }
  /*
  go(){
    this.rout.navigate(['/community']);//js跳转到社区视图
  }
  */
}

