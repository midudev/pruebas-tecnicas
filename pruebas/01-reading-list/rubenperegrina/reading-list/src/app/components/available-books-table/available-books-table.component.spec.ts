import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBooksTableComponent } from './available-books-table.component';

describe('AvailableBooksTableComponent', () => {
  let component: AvailableBooksTableComponent;
  let fixture: ComponentFixture<AvailableBooksTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AvailableBooksTableComponent],
    });
    fixture = TestBed.createComponent(AvailableBooksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
