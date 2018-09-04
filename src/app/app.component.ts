import { Component } from '@angular/core';
import { SocialMediaPlatform, getSocialMediaPlatformString } from './../SocialMediaPlatforms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';
  selectedTab: SocialMediaPlatform = SocialMediaPlatform.HOME;  
}
