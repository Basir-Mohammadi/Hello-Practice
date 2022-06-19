
const myDiv = document.getElementById('myDiv');

myDiv.dataset.name='ahmad';
myDiv.dataset.age='21'

myDiv.removeAttribute('data-name');
console.log(myDiv.dataset);