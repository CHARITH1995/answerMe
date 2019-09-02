import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
//import { TabViewComponent }  from '../components/tab-view/tab-view.component';
//import { TabsPageRoutingModule } from '../tabs/tabs.router.module';
import { DrawerPageRoutingModule } from '../drawer/drawer.router.module';
import { sharedComponentModule } from '../components/shared.components';
//import {HomePageRoutingModule} from './home.router.module'


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    //TabViewComponent,
    sharedComponentModule,
   // HomePageRoutingModule
   RouterModule.forChild([
     { 
       path: '', 
       component: HomePage 
      },
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
