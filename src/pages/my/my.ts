import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';
import { MePage } from '../me/me';
/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }
  go(){
    this.navCtrl.push(MePage);
    // push (page,params)  --  将新视图推入导航堆栈
    // page: 推入导航堆栈的组件名
    // params ：传递给下一个视图的数据（对象类型）
  }
}
