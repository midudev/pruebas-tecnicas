import { Injectable, computed, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Book } from '../interfaces/Book';
import { Subject, of } from 'rxjs';

export interface ListState {
  list: Book[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private state = signal<ListState>({
    list: [],
    loaded: false,
  });

  list = computed(() => this.state().list);
  loaded = computed(() => this.state().loaded);

  private listLoaded$ = this.loadList();
  add$ = new Subject<Book>();
  remove$ = new Subject<Book>();

  constructor() {
    this.listLoaded$.pipe(takeUntilDestroyed()).subscribe((list) => {
      this.state.update((state) => ({
        ...state,
        list,
        loaded: true,
      }));
    });

    this.add$.pipe(takeUntilDestroyed()).subscribe((listItem) => {
      this.state.update((state) => ({
        ...state,
        list: [...state.list, listItem],
      }));
    });

    this.remove$.pipe(takeUntilDestroyed()).subscribe((item) => {
      this.state.update((state) => ({
        ...state,
        list: state.list.filter((listItem) => listItem.title !== item.title),
      }));
    });
  }

  loadList() {
    const list = window.localStorage.getItem('readingList');
    return of(list ? (JSON.parse(list) as Book[]) : []);
  }
}
