import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SocialMediaPlatform, getSocialMediaPlatformString } from './../SocialMediaPlatforms';

@Component({
  selector: 'menu-list',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenuListComponent {
  @Input() selectedTab: string;
  @Output() selectedTabChange = new EventEmitter<string>();

  title = 'MenuListComponent';
  menuItems = [
    {
      id: SocialMediaPlatform.HOME,
      title: getSocialMediaPlatformString(SocialMediaPlatform.HOME)
    },
    {
      id: SocialMediaPlatform.FACEBOOK,
      title: getSocialMediaPlatformString(SocialMediaPlatform.FACEBOOK)
    },
    {
      id: SocialMediaPlatform.INSTAGRAM,
      title: getSocialMediaPlatformString(SocialMediaPlatform.INSTAGRAM)
    },
    {
      id: SocialMediaPlatform.TWITTER,
      title: getSocialMediaPlatformString(SocialMediaPlatform.TWITTER)
    },
  ];

  updateSelectedTab(tab) {
    this.selectedTabChange.emit(tab)
  }
}
