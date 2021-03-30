import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { tap, map, delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  items = [];
  indexActive = 0;

  ngOnInit(): void {
    this.items[0] = 0;
    this.items[1] = 1;
    this.items[2] = 2;

    const obs = of(0, 1, 2).pipe(
      delay(500),
      switchMap((res) => of(res*3)),
      tap((res) => {
        console.log(res);
      })
    );
    obs.subscribe();
  }

  onIndexChanged(index: number) {
    this.indexActive = index;
  }
}
