import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingBookComponent } from './reading-book.component';

describe('ReadingBookComponent', () => {
  let component: ReadingBookComponent;
  let fixture: ComponentFixture<ReadingBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingBookComponent]
    });
    fixture = TestBed.createComponent(ReadingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
