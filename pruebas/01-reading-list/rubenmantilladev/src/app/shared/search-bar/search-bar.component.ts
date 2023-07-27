import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() searcher = new EventEmitter<string>()

  private router = inject(Router)

  searchForm: FormGroup = new FormGroup({
    inputSearch: new FormControl('', Validators.required),
  });

  get search() {
    return this.searchForm.get('inputSearch');
  }

  searching() {
    if (this.searchForm.valid) {
      this.searcher.emit(this.searchForm.value.inputSearch);
    }
    if (this.router.url !== '/search') {
      this.router.navigate(['/search']);
    }

  }

}
