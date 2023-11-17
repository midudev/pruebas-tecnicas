import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListComponent } from './reading-list.component';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingListComponent]
    });
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
