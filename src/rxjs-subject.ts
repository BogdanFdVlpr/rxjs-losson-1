import { Subject } from 'rxjs';

// Створення звичайного Subject
const mySubject = new Subject<number>();
let currentState = 0;

// Підписка на Subject
mySubject.subscribe({
  next: (value) => {
    console.log(`Підписник отримав значення: ${value}`);
    currentState = value;
  }
});

// Надсилання даних через Subject
mySubject.next(1);

// Отримання поточного стану
console.log(`Поточний стан: ${currentState}`);
