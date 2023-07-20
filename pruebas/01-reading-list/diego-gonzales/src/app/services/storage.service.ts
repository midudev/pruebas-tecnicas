import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveInStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromStorage(key: string) {
    const item = localStorage.getItem(key);
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    return item ? JSON.parse(item) : null;
  }
}
