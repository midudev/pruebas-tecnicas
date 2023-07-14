import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListReadComponent } from './books-list-read.component';

describe('BooksListReadComponent', () => {
  let component: BooksListReadComponent;
  let fixture: ComponentFixture<BooksListReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
