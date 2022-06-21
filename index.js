const pTag = document.querySelector('.example');
const input = document.createElement('input');

input.value='iam here!!';

const Btn = document.createElement('button');
Btn.textContent ='Click me!';

pTag.replaceWith(input, Btn);
 
setTimeout( () => {
    console.log('eggs');
console.log('apple');
},3000);


console.log('orange');
console.log('banana');


const names = ['ali', 'ahmad', 'basir'];
const greet = names.map(name => `Hello ${name}!`);
console.log(greet);

// callback function
let greeting = name => console.log(`Hii ${name}!`);
const userInfo = (firstName, lastName, callback) => {
    const fullName =  `${firstName} ${lastName}`;
    callback(fullName);
}

userInfo('basir','ahmad', greeting);