import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//拿参数
import { HttpClient } from '@angular/common/http'; 
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  flag:boolean=true;
  num=3;
  change(d){
    this.num=d;
    //如果html中的change函数中的参数是$event(事件对象)，那么应该写成change(event){this.num=event.target.value;}
  }
  courseId:number;
  course;//阅读这个course的类型和this.course=data操作是异步的，这导致了控制台报错(Cannot read property 'courseName' of undefined)
  //解决办法，在course这个类中的属性后面加个问号，例如  <li>任务{{course?.task}}</li><li>成员{{course?.person}}</li>
  ngOnInit() {
    //最开始的
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/course/'+this.courseId).subscribe((data)=>{
      this.course=data;
    });
    //this.router.params.subscribe((params)=>{
      //this.courseId=params['courseId'];
    //});

    //学习Rxjs练习
    /*
    this.http.get('/api/courses/this.courseId').pipe(map(data=>{
      data.name="dd";
      //data是一个对象，不存在name这个属性，所以会有横线，但此时相当于创建了data的name属性
      return data;//如果不返回的话，subscibe是定位不到的，那么下面console.log(data)会得到undefined;
    })).subscribe(data=>{
      console.log(data);
      this.course=data;
    })
    */

    /*
    this.http.get('/api/courses/this.courseId').pipe(filter(data=>{
      return data.id=3;//相当于 data.id=3;return data;
    })).subscribe(data=>{
      console.log(data);
      this.course=data;
    })
    */
  }

}
