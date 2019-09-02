import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DrawerPageRoutingModule } from './drawer.router.module'
import { DrawerPage } from './drawer.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawerPageRoutingModule
    //RouterModule.forChild(routes)
  ],
  declarations: [DrawerPage]
})
export class DrawerPageModule { }
