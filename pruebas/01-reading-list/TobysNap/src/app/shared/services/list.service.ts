import { Injectable, computed, signal, effect } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Book } from '../interfaces/Book';
import { Subject, from, of } from 'rxjs';

export interface ListState {
  list: Book[];
  loaded: boolean;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private state = signal<ListState>({
    list: [],
    loaded: false,
    quantity: 0,
  });

  list = computed(() => this.state().list);
  loaded = computed(() => this.state().loaded);
  quantity = computed(() => this.state().quantity);


  private listLoaded$ = this.loadList();
  add$ = new Subject<Book>();
  remove$ = new Subject<Book>();

  constructor() {
    this.listLoaded$.pipe(takeUntilDestroyed()).subscribe((list) => {
      this.state.update((state) => ({
        ...state,
        list,
        loaded: true,
        quantity: list.length
      }));
    });

    this.add$.pipe(takeUntilDestroyed()).subscribe((listItem) => {
      this.state.update((state) => ({
        ...state,
        list: [...state.list, listItem],
        quantity: state.quantity + 1,
      }));
    });

    this.remove$.pipe(takeUntilDestroyed()).subscribe((item) => {
      this.state.update((state) => ({
        ...state,
        list: state.list.filter((listItem) => listItem.title !== item.title),
        quantity: state.quantity - 1,
      }));
    });

    effect(() => {
      if (this.loaded()) {
        this.saveList(this.list());
      }
    })
  }

  loadList() {
    const list = window.localStorage.getItem('readingList');
    return of(list ? (JSON.parse(list) as Book[]) : []);
  }

  saveList(list: Book[]) {
    localStorage.setItem('readingList', JSON.stringify(list));
  }

}
