const { fromEvent } = rxjs;
const { mapTo } = rxjs.operators;

const button = document.getElementById('button');
const output = document.getElementById('output');

const clickStream = fromEvent(button, 'click');
const messageStream = clickStream.pipe(
  mapTo('Hello, world!')
);

messageStream.subscribe((message) => {
  output.innerText = message;
});
