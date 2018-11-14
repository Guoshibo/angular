import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FindPage } from '../find/find';
import { MyPage } from '../my/my';
import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = FindPage;
  tab5Root = MyPage;
  //如果上面不引入import { MePage } from '../me/me'; 那么tab5Root = MePage;可以写成 tab5Root = 'MePage';
  //而且这样也不用再根模块app.module.ts中去配置,这是因为对于页面有很多静态资源的情况下（比如网商购物页面），为了节省用户流量和提高页面性能
// 可以在用户浏览到当前资源的时候，再对资源进行请求和加载。 可以使用懒加载的模式 在加载的时候调用资源
  constructor(public modalCtrl:ModalController) {
  }
  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(ContactPage);
      profileModal.present();
    },false);
  }
}
