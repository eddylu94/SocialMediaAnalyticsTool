import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabPaneComponent } from './tabpane.component';

@NgModule({
  declarations: [
    TabPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TabPaneComponent
  ],
  providers: [],
  bootstrap: [TabPaneComponent]
})
export class TabPaneModule { }
