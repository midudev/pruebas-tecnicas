import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'bu-search',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export default class SearchComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);

  searchForm = this.formBuilder.group({
    product: '',
  });

  onSubmit(): void {
    console.log(this.searchForm.value.product);
    this.router.navigate(['/items?search=',this.searchForm.value.product]);
    this.searchForm.reset();
  }
}
