// let name;
// name = 'oyin';
// console.log(name);
// name = 'sumbo';
// console.log(name);
 
// const firstName = 'oyin';
// console.log(firstName);
// // firstName = 'sumbo';

// alert('hey baby');
// alert(3 *
//      5 );
// //  alert('there will be an error')
// // [1,2] . forEach(alert)

// alert('All fine now');
// [1,2] . forEach(alert)

// let message = 'hey you'
// message= 'how are you'
// console.log(message)
// const COLOR_ORANGE = "#FF7F00";
// let color = COLOR_ORANGE ;
// console.log(color);

// let admin ='john';  
// lastName = 'john';
// alert(admin);

// let age = 12;
// confirm(age )
 
// let person = {
//      name :'ade',
//      age: 15,
//      address:'bembo',
// }
// console.log(person);
// console.log(person.age);
// person.name = 'oyin',
// console.log(person.name); //dot notation for  updating properties
// person.age = 10,
// console.log(person['age']) // square brakect for  updating properties

// let selection = 'name';
// person[selection] = 'mary';
// console.log(person.name);

//  function sum() {
//      console.log(5 -2)
//  }
//  sum();

// //  function add (a , b){
// //      a = 3,
// //      b = 6,
// //      console.log(a + b)
// //  }
// //  add(a,b)
// function add (a, b){
//      console.log(a + b)
// }
// add(3,6);//invoke the function or call function

// let point = 100;
// let customerType= point>100 ?"gold":"silver"
// console.log(customerType);

// let age = 45
// let stage = age > 45 ? 'youth': 'adult';
// console.log(stage);

// let a = true;
// let b = false;
// let sum = !(a || b);
// console.log(sum);

// swapping variable
let a = 'red';
let b = 'blue';
console.log('initial color is', a ,b)
let c = a; //red
 a = b; // blue
 b = c; // red
console.log('current color is', a ,b);


//pi 3.142 radius = 7
// let Area = PI *radius *radius;
 let pi = 3.142;
radius = 7;
let area = pi * radius **2 ;
console.log(area);

//si =p*r*t p=500 r=3% t=1
let principal= 500;
 rate = 3;
 time = 1
let simpleInterest = (principal * rate *time)/100;
console.log(simpleInterest);

let x = 70;
let y = 50 ;
let z = 100;
let result = !(x<z) && Z>100 || y < x ;// x<z= true !(true)= false ,||false = false || true = true
console.log(result)

//conditional statement, if & else statemement , switch & case statement //hackerrank.com,codewars

// You are given a variable marks. Your task is to print:

// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90.
// - BB if marks is greater than 70 and less than or equal to 80.
// - BC if marks is greater than 60 and less than or equal to 70.
// - CC if marks is greater than 50 and less than or equal to 60.
// - CD if marks is greater than 40 and less than or equal to 50.
// - DD if marks is greater than 30 and less than or equal to 40.
// - FF if marks is less than or equal to 30 .

let mark = 100;
if(mark > 90) 
console.log('AA');
else if (mark > 80 && mark <= 90)
alert('AB');
else if(mark > 70 && mark <= 80)
alert('BB');
else if (mark > 60 && mark <= 70)
alert('BC');
 else if (mark > 50 && mark <= 60)
alert('CC');
else if (mark > 40 && mark <= 50)
alert('CD');
else if (mark > 30 && mark <= 40)
alert('DD');
else {
alert('FF');
}

let  addToDoButton = document.getElementById('addToDo');
let  todoWrap = document.getElementById('todoWrap');
let  inputField =document.getElementById('inputField');

addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoWrap.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick' , function(){
        todoWrap.removeChild(paragraph);
    })
})
