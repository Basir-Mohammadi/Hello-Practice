const pTag = document.querySelector('.example');
const input = document.createElement('input');

input.value='iam here!!';

const Btn = document.createElement('button');
Btn.textContent ='Click me!';

pTag.replaceWith(input, Btn);