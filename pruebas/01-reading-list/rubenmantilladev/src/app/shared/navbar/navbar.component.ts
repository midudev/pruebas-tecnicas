import { Router } from '@angular/router';
import { ReadingBookListService } from './../../services/reading-book-list.service';
import { Component, OnInit, inject } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  hideList = false;
  lengthList = 0;

  private router = inject(Router)
  readingBookListService = inject(ReadingBookListService)

  ngOnInit() {
    this.readingBookListService.$favoriteChanges().subscribe(newFavorites => {
      this.lengthList = newFavorites.length;
    });
  }

  menu(){
    this.hideList = !this.hideList;
  }

  isPageHomeActive(){
    return this.router.isActive('/home', true);
  }

  toHome() {
    this.router.navigate(['/home']);
  }

}
