import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerPage } from './drawer.page';

const routes: Routes = [
    {
      path: 'menu',
      component: DrawerPage,
      children: [
        // {
        //     path: 'tabs',
        //     children: [
        //       {
        //         path: '',
        //         loadChildren: () =>
        //           import('../tabs/tabs.module').then(m => m.TabsPageModule)
        //       }
        //     ]
        //   },
          {
            path: 'home',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../home/home.module').then(m => m.HomePageModule)
              }
            ]
          },
        {
          path: 'teachers',
          loadChildren: () => 
          import('../drawer_pages/teachers/teachers.module').then(m => m.TeachersPageModule)
        },
        {
          path: 'register',
          loadChildren: () => 
          import('../drawer_pages/register/register.module').then(m => m.RegisterPageModule)
        },
        {
            path: 'contactUs',
            loadChildren: () => 
            import('../contact_us/contactUs.module').then(m => m.ContactUsPageModule)
          },
          {
            path: 'notifications',
            loadChildren: () => 
            import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }

      ]
    },
    {
      path: '',
      redirectTo: '/menu/home',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawerPageRoutingModule {}
