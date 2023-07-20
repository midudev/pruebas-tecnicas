import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  jsonData: any;
  private booksUrl = 'assets/data/books.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.booksUrl).subscribe((data) => {
      this.jsonData = data;    
    })
  }
}
