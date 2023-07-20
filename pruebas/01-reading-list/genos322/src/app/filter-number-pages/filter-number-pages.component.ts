import { Component } from '@angular/core';

@Component({
	selector: 'app-filter-number-pages',
	templateUrl: './filter-number-pages.component.html',
	styleUrls: ['./filter-number-pages.component.css']
})
export class FilterNumberPagesComponent {
	formatLabel(value: number): string {
		if (value >= 100000) {
			return Math.round(value / 1000) + 'k';
		}

		return `${value}`;
	}
}
