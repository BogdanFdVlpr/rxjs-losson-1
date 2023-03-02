import {debounceTime, distinctUntilChanged, fromEvent, map, Observable, takeUntil} from "rxjs";

// const search$ = new Observable<Event>(observer => {
//   const search = document.getElementById('search')!;
//   const stop = document.getElementById('stop')!;
//
//   if (!search || !stop) {
//     observer.error('Element does not exists on the page');
//     return;
//   }
//
//   const onSearch = function(event: any) {
//     checkSubscription();
//     observer.next(event);
//
//   };
//
//   const onStop = function(event: any) {
//     checkSubscription();
//     observer.complete();
//     clear();
//   }
//
//   search.addEventListener('input', onSearch);
//   stop.addEventListener('click', onStop);
//
//   const checkSubscription = () => {
//     if (observer.closed) {
//       clear();
//     }
//   }
//
//   const clear = () => {
//     search.removeEventListener('input', onSearch);
//     stop.addEventListener('click', onStop);
//   };
// });

const search$ = fromEvent<Event>(document.getElementById('search')!,  'input');

const stop$ = fromEvent<Event>(document.getElementById('stop')!,  'click');


search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(500),
  map(value => value.length > 3 ? value : 'The length of name is small'),
  distinctUntilChanged(),
  takeUntil(stop$)
).subscribe( value => {
    console.log(value)
});



