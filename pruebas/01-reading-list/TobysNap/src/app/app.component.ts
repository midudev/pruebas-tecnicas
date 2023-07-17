import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-books></app-books>
    <app-reading-list></app-reading-list>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'reading-list';
}
