import { Component, OnInit } from '@angular/core';
import { RouterModule , RouterEvent , Router} from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent implements OnInit {
  pages = [
    {
      title:'Home',
      icon:'home',
      url:'/menu/home'
    },
    {
      title:'contactUs',
      icon:'mail',
      url:'/menu/contactUs'
    },
    {
      title:'Notifications',
      icon:'notifications',
      url:'/menu/notifications'
    }
  ]

  path=''
  constructor(private router:Router , private nav:NavController) { 
    this.router.events.subscribe((event:RouterEvent)=>{
      this.path = event.url;
    })
  }

  ngOnInit() {}

  goto(url){
    console.log(url)
    this.router.navigateByUrl(url);
  }

}
