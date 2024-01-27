// Packages
import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  public set<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log('Error saving to localStorage', error);
    }
  }

  public get<T>(key: string): T | null {
    try {
      return JSON.parse(localStorage.getItem(key)) as T;
    } catch (error) {
      console.log('Error getting to localStorage', error);

      return null;
    }
  }
}
