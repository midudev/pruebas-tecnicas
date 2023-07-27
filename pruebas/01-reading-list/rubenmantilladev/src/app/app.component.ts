import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rubenmantilladev';

  isNavbarFixed = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.isNavbarFixed) {
      this.isNavbarFixed = window.scrollY >= 77.76;
    }
    if (window.scrollY === 0) {
      this.isNavbarFixed = false;
    }
  }
}
