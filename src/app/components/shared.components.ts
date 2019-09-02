import { NgModule } from '@angular/core';
import { TabViewComponent } from '../components/tab-view/tab-view.component';
import { CommonModule } from '@angular/common';
import { IonicModule} from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule, 
        IonicModule
    ],
    declarations: [
        TabViewComponent 
    ],
    exports: [
        TabViewComponent 
    ]
})

export class sharedComponentModule{}