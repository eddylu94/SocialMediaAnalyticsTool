import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'tab-pane',
  templateUrl: './tabpane.component.html',
  styleUrls: ['./tabpane.component.css']
})
export class TabPaneComponent {
  @Input() selectedTab: string;

  title = 'TabPaneComponent';
}
