import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveInStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getFromStorage(key: string) {
    const value = localStorage.getItem(key) ?? 'null';
    return JSON.parse(value);
  }
}
