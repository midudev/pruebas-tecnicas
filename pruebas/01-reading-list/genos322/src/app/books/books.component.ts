import { Component, OnInit, ViewChild  } from '@angular/core';
import { DataBooksService } from '../services/data-books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  jsonData: any;
  sliderValue = 0;
  selected = "ninguno";

  constructor(private dataBooksService: DataBooksService) { }
  ngOnInit() {
    this.dataBooksService.getData().subscribe((data) => {
      this.jsonData = data.library;
    })
  }

  onSliderValueChange() {
  }
}

