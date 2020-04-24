import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: 'movie 1', description: 'güzel film', imgUrl: '1.jpg' },
      { id: 2, name: 'movie 2', description: 'güzel film', imgUrl: '2.jpg' },
      { id: 3, name: 'movie 3', description: 'güzel film', imgUrl: '3.jpg' },
      { id: 4, name: 'movie 4', description: 'güzel film', imgUrl: '4.jpg' },
      { id: 5, name: 'movie 5', description: 'güzel film', imgUrl: '5.jpg' },
      { id: 6, name: 'movie 6', description: 'güzel film', imgUrl: '6.jpg' }
    ];
    return { movies };
  }
  constructor() { }
}
