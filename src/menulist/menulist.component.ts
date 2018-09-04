import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-list',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenuListComponent {
  @Input() selectedTab: string;
  @Output() selectedTabChange = new EventEmitter<string>();

  title = 'MenuListComponent';
  menuItems = ["Home", "Item1", "Item2"];

  updateSelectedTab(tab) {
    this.selectedTabChange.emit(tab)
  }
}
