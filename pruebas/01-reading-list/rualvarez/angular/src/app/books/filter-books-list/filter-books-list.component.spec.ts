import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBooksListComponent } from './filter-books-list.component';

describe('FilterBooksListComponent', () => {
  let component: FilterBooksListComponent;
  let fixture: ComponentFixture<FilterBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
