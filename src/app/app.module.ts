import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageWithAvatarComponent } from './pages/page-with-avatar/page-with-avatar.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AvatarComponentComponent } from './components/avatar-component/avatar-component.component';
import { GenericAvatarComponentComponent } from './components/generic-avatar-component/generic-avatar-component.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, PageWithAvatarComponent, ListPageComponent, AvatarComponentComponent, GenericAvatarComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
