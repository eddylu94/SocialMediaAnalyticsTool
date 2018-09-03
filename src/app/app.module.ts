import { BrowserModule } from '@angular/platform-browser';
import { TabPaneModule } from './../tabpane/tabpane.module';
import { MenuListModule } from './../menulist/menulist.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabPaneModule,
    MenuListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
