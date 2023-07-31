import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  template: `
    <label for="pages">Páginas: {{ control.value }}</label>
    <input
      id="pages"
      [formControl]="control"
      type="range"
      step="50"
      min="0"
      max="1500"
    />
    <label for="genre">Género:</label>
    <select [formControl]="genreFilter">
      <option>Fantasía</option>
      <option>Ciencia Ficción</option>
      <option>Zombies</option>
      <option>Terror</option>
    </select>
  `,
  styles: [``],
})
export class FilterComponent {
  @Input() control!: FormControl;
  @Input() genreFilter!: FormControl;
}
