import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PageUsingAvatarComponent } from './pages/page-using-avatar-component/page-using-avatar-component.component';
import { PageUsingGenericAvatarComponent } from './pages/page-using-generic-avatar-component/page-using-generic-avatar-component.component';
import { PageWithAvatarComponent } from './pages/page-with-avatar/page-with-avatar.component';

const routes: Routes = [
  {
    path: '',
    component: ListPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/basic'
      },
      {
        path: 'basic',
        component: PageWithAvatarComponent,
      },
      {
        path: 'simple-component',
        component: PageUsingAvatarComponent
      },
      {
        path: 'generic-component',
        component: PageUsingGenericAvatarComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/basic'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
