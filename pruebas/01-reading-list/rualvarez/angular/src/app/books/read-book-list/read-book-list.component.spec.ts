import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadBookListComponent } from './read-book-list.component';

describe('ReadBookListComponent', () => {
  let component: ReadBookListComponent;
  let fixture: ComponentFixture<ReadBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
