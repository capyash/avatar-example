import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageWithAvatarComponent } from './pages/page-with-avatar/page-with-avatar.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent, PageWithAvatarComponent, ListPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
