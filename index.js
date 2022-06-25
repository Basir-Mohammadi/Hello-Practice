// const pTag = document.querySelector('.example');
// const input = document.createElement('input');

// input.value='iam here!!';

// const Btn = document.createElement('button');
// Btn.textContent ='Click me!';

// pTag.replaceWith(input, Btn);
 
// setTimeout( () => {
//     console.log('eggs');
// console.log('apple');
// },3000);


// console.log('orange');
// console.log('banana');


// const names = ['ali', 'ahmad', 'basir'];
// const greet = names.map(name => `Hello ${name}!`);
// console.log(greet);

// // callback function
// let greeting = name => console.log(`Hii ${name}!`);
// const userInfo = (firstName, lastName, callback) => {
//     const fullName =  `${firstName} ${lastName}`;
//     callback(fullName);
// }

// userInfo('basir','ahmad', greeting);

// function displayValue (value) {
//     document.getElementById('demo').innerHTML = value;
// }


const myPromise  = new Promise((resolve, reject ) => {
    let x=0;
    if(x==0){
        resolve('ok');
    } else {
        reject('error');
    }
});

myPromise.then(
    function(error) {console.log(error);},
    function(value) {console.log(value);}
);

const hasMeetting=true;

const meeting = new Promise ((reslove, reject) => {
    const meetingDetails = {
        title: 'marketing brand',
        time: '1 pm',
        location: 'Zoom'
    }
    if(!hasMeetting)
    {
        reslove(meetingDetails);
    } else{
        reject(new Error('meeting already scheduled!'))
    }
});

const addToCalendar = meetingDetails => {
    const calendar = `${meetingDetails.title} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    return Promise.resolve(calendar);
}

// meeting
//     .then(addToCalendar)
//     .then(res =>{
//         console.log('meething scheduled');
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

async function myMeeting() {
    try{
    const meetingDetails = await meeting;
    const message = await addToCalendar(meetingDetails);
    console.log(message);
    } catch(err) {
        console.log(err.message);
    }
}

myMeeting();

function fibonacci(n) {
    let output = [];
  
    if (n===1) {
      output = [0];
    } else if(n===2) {
      output = [0,1];
    } 
    else {
      for ( let i = 2; i<n; i++) {
        output.push(output[output.length-2]+output[output.length-1]);
      }
    }
    return output;
  }

  fibonacci(5);