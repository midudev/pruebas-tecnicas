import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFilterComponent } from './books-filter.component';

describe('BooksFilterComponent', () => {
  let component: BooksFilterComponent;
  let fixture: ComponentFixture<BooksFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
