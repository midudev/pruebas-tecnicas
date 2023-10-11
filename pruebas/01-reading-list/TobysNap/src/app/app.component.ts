import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="wrapper">
      <app-books></app-books>
      <app-reading-list></app-reading-list>
    </main>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'TUED';
}
