import { Component, Input } from '@angular/core';
import { SocialMediaPlatform, getSocialMediaPlatformString } from './../SocialMediaPlatforms';

@Component({
  selector: 'tab-pane',
  templateUrl: './tabpane.component.html',
  styleUrls: ['./tabpane.component.css']
})
export class TabPaneComponent {
  @Input() selectedTab: SocialMediaPlatform;

  title = 'TabPaneComponent';
  
  getTitle = getSocialMediaPlatformString;
}
