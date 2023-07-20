import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '~/services/store.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private _storeService = inject(StoreService);
  showSearchBox = this._storeService.showSearchBox;

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim();

    this._storeService.updateSearchFilter(value);
  }
}
