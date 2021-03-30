import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  randomCalculateIndex() {
    return Math.floor(Math.random() * 3);
  }
}
