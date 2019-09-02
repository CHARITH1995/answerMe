import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('../app/drawer/drawer.module').then(m => m.DrawerPageModule)
  },
  // {
  //   path: 'menu/home',
  //   loadChildren: () => import('../app/home/home.module').then(m => m.HomePageModule)
  // },
  // {
  //   path: 'menu/contactus',
  //   loadChildren: () => import('../app/contact_us/contactUs.module').then(m => m.ContactUsPageModule)
  // },
  // {
  //   path: 'menu/notifications',
  //   loadChildren: () => import('../app/notifications/notifications.module').then(m => m.NotificationsPageModule)
  // },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
