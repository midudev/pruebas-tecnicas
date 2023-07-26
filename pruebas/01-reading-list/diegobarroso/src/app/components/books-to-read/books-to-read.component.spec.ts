import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookToReadComponent } from './books-to-read.component';

describe('BookToReadComponent', () => {
  let component: BookToReadComponent;
  let fixture: ComponentFixture<BookToReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookToReadComponent]
    });
    fixture = TestBed.createComponent(BookToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
