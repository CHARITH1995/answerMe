import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsPage } from './contactUs.page';
import { sharedComponentModule } from '../components/shared.components';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    sharedComponentModule,
    RouterModule.forChild([{ path: '', component: ContactUsPage }])
  ],
  declarations: [ContactUsPage]
})
export class ContactUsPageModule {}
