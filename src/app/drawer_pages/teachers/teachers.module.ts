import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { sharedComponentModule } from '../../components/shared.components';
import { IonicModule } from '@ionic/angular';

import { TeachersPage } from './teachers.page';

const routes: Routes = [
  {
    path: '',
    component: TeachersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    sharedComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeachersPage]
})
export class TeachersPageModule {}
