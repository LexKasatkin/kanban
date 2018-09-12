import {Observable} from 'rxjs';


let stream$ = Observable.create(function (observer) {
  observer.next('One');
});

stream$.subscribe(function (data) {
  console.log('Subscribe: ', data);
});
