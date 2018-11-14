import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {//当这个页面加载完，打印下面的语句  数据接收
    console.log('ionViewDidLoad MePage');
    console.log(this.navParams.get('id'));
    // get方法：得到相对应的属性的属性值
    // console.log(this.navParams.data.id);
    // this.navParams.data表示的是这个数据对象
  }
}
