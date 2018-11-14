import { Component, ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
// - NavController 代表特定历史的视图数组，这个数组类似于一个堆栈
// 该数组可以通过推送和弹出视图或者在历史中的任意位置插入和删除视图来控制整个应用程序。

import { MePage } from '../me/me';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac') ac;
  @ViewChild(Slides) slides:Slides;
  isActive=0;
  switch(i){
    this.isActive=i;
  }
  items = [];
  constructor(public navCtrl: NavController,public http:HttpClient) {
    // for (var i = 0; i < 5; i++) {
    //   this.items.push( this.items.length );
    // }
  }
  go(){
    this.navCtrl.push(MePage,{id:1});
    // push (page,params)  --  将新视图推入导航堆栈
    // page: 推入导航堆栈的组件名
    // params ：传递给下一个视图的数据（对象类型）
  }
  
  // ionViewDidload(){
  //   this.ac.get();
  // }

  // doInfinite(InfinteScroll){
  //   this.http.get('/api/course').subscribe((data)=>{
  //     console.log(data);
  //     InfinteScroll.complete();
  //   });


    // 之前http下的红线说HomePage上不存在属性http ,
    // 鼠标经过import { HttpClient } from '@angular/common/http';显示已经声明httpclient,但从未
    // 读取其值，是因为没有在constructor中声明他；
    // setTimeout(() => {
    //   for(let i=0;i<30;i++){
    //     this.items.push(this.items.length);
    //   }
    //   InfinteScroll.complete();
    //   if(this.items.length>90){
    //     InfinteScroll.enable();
    //   }
    // }, 500);
    s() {
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
    }
}


  // doRefresh(refresher){
  //   console.log('Begin async operation', refresher);

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }


