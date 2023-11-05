import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFilterComponent } from './books-filter.component';

describe('BooksFilterComponent', () => {
  let component: BooksFilterComponent;
  let fixture: ComponentFixture<BooksFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BooksFilterComponent]
    });
    fixture = TestBed.createComponent(BooksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
