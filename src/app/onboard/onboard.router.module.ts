import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardPage } from './onboard.page';

const routes: Routes = [
  {
    path: 'onboard',
    component: OnboardPage,
    children: [
      {
        path: '/login',
        loadChildren: () =>
          import('../login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/onboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/onboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
