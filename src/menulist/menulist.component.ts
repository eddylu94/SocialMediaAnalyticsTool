import { Component } from '@angular/core';

@Component({
  selector: 'menu-list',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenuListComponent {
  title = 'MenuListComponent';
  menuItems = ["Home", "Item1", "Item2"];
}
