import { Component } from '@angular/core';
import { faDiscord, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faDiscord = faDiscord;
  faTruck = faTruck;
  faFacebook = faFacebook;
  logo: string;

  constructor() {
    this.logo="/assets/images/logo.png";
  }
}
