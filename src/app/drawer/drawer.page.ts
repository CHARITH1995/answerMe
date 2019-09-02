import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.page.html',
  styleUrls: ['./drawer.page.scss'],
})
export class DrawerPage implements OnInit {

  pages = [
    {
      title:'register',
      icon:'person-add',
      url:'/menu/register'
    },
    {
      title:'teachers',
      icon:'man',
      url:'/menu/teachers'
    }
  ]

  selectedpath='';

  constructor(private router:Router) { 
    this.router.events.subscribe(( event:RouterEvent)=>{
        this.selectedpath = event.url;
    })
  }

  ngOnInit() {
  }

}
