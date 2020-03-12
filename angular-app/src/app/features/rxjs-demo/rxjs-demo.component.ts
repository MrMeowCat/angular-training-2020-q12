import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  forkJoin,
  from,
  fromEvent,
  interval,
  Observable,
  of,
  Subject,
  Subscription,
  throwError
} from 'rxjs';
import { catchError, filter, first, map, switchMap, takeUntil, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.scss']
})
export class RxjsDemoComponent implements OnInit {

  basicObservable$: Observable<number>;
  interval$: Observable<number>;
  intervalSubscription: Subscription;
  intervalDestroySubject$: Subject<void> = new Subject();

  ngOnInit(): void {
    this.creationObservables();
    // this.combineObservables();
    // this.observableOperators();
    // this.switchingObservables();
    // this.handlingErrors();
    // this.subjects();
    // this.handleSubscriptions();
  }

  unsubscribe(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  unsubscribeAll(): void {
    this.intervalDestroySubject$.next();
  }

  private creationObservables(): void {
    this.basicObservable$ = this.
    createBasicObservable(1, 2, 3);
    this.createBasicObservable(1, 2, 3).subscribe((value: number) => {
      console.log('Custom observable', value);
    });

    of(1, 2, 3).subscribe((value: number) => {
      console.log('of', value);
    });

    from([1, 2, 3]).subscribe((value: number) => {
      console.log('from', value);
    });

    fromEvent(document, 'click').subscribe((event) => {
      console.log('fromEvent', event);
    });

    interval(2000).subscribe((value: number) => {
      console.log('interval', value);
    });

    throwError('Throw Error!').subscribe({
      error: (error: string) => {
        console.log('throwError', error);
      }
    });
  }

  private combineObservables(): void {
    combineLatest([of(1), of(2)]).subscribe(([value1, value2]: [number, number]) => {
      console.log('combineLatest', value1, value2);
    });

    forkJoin([of(1), of(2)]).subscribe(([value1, value2]: [number, number]) => {
      console.log('forkJoin', value1, value2);
    });
  }

  private observableOperators(): void {
    interval(2000).pipe(
      tap((value: number) => {
        console.log('tap', value);
      }),
      filter((value: number) => value % 2 === 0),
      map((value: number) => {
        return value * 10;
      }),
      first() // take(3)
    ).subscribe((value: number) => {
      console.log('interval', value);
    });
  }

  private switchingObservables(): void {
    interval(2000).pipe(
      switchMap((value: number) => {
        return of(`switchMap ${value}`);
      }),
      withLatestFrom(of(1), of(2))
    ).subscribe(([value1, value2, value3]) => {
      console.log('interval', value1, value2, value3);
    });
  }

  private handlingErrors(): void {
    throwError('Throw Error!').pipe(
      catchError((error: string) => {
        console.log('catchError', error);
        return of('fallback value');
      })
    ).subscribe((value: string) => {
      console.log('interval', value);
    });
  }

  private subjects(): void {
    const subject$: Subject<number> = new Subject();
    subject$.subscribe((value: number) => {
      console.log('subject', value);
    });
    subject$.next(1);
    subject$.next(2);
    subject$.next(3);

    const behaviorSubject$: BehaviorSubject<number> = new BehaviorSubject(0);
    behaviorSubject$.subscribe((value: number) => {
      console.log('behaviorSubject', value);
    });
    behaviorSubject$.next(1);
    behaviorSubject$.next(2);
    behaviorSubject$.next(3);
    console.log(behaviorSubject$.getValue());
  }

  private handleSubscriptions(): void {
    this.interval$ = interval(2000).pipe(
      takeUntil(this.intervalDestroySubject$)
    );
    this.intervalSubscription = this.interval$.subscribe((value: number) => {
      console.log(value);
    });
  }

  private createBasicObservable(...values: number[]): Observable<number> {
    return new Observable((subscriber) => {
      for (const value of values) {
        subscriber.next(value);
      }
      subscriber.complete();
      subscriber.unsubscribe();
    });
  }
}
