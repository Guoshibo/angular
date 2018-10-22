import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { RouterModule,Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TongzhiComponent } from './components/tongzhi/tongzhi.component';
import { JoinComponent } from './components/join/join.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    CommunityComponent,
    TongbudetailComponent,
    TongzhiComponent,
    JoinComponent,
    FooterComponent,
    CoursesComponent,
    QieshuoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'',component:TongzhiComponent},
    ]},
      {path:'header',component:HeaderComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'community',component:CommunityComponent},
      {path:'course',component:CourseComponent},
      {path:'join',component:JoinComponent},
      {path:'tongzhi',component:TongzhiComponent},
      {path:'courses',component:CoursesComponent},
      {path:'qieshuo',component:QieshuoComponent}
      //{path:'',redirectTo:'home',pathMatch:'full'},
      //{path:'**',component:CommunityComponent},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
