import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuListComponent } from './menulist.component';

@NgModule({
  declarations: [
    MenuListComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MenuListComponent
  ],
  providers: [],
  bootstrap: [MenuListComponent]
})
export class MenuListModule { }
