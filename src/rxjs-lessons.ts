import {debounceTime, distinctUntilChanged, fromEvent, map, Observable} from "rxjs";

// const search$ = new Observable<Event>(observer => {
//   const search = document.getElementById('search')!;
//
//   search.addEventListener('input', (e) => {
//     observer.next(e);
//   })
//
//   if (!search) {
//     observer.error('Element does not exists on the page');
//     return;
//   }
// });

const search$ = fromEvent<Event>(document.getElementById('search')!,  'input');
search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;
  }),
  debounceTime(500),
  map(value => value.length > 3 ? value : 'The length of name is small'),
  distinctUntilChanged(),
).subscribe( value => {
    console.log(value)
});


