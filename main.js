
// // You are given a variable marks. Your task is to print:

// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90.
// - BB if marks is greater than 70 and less than or equal to 80.
// - BC if marks is greater than 60 and less than or equal to 70.
// - CC if marks is greater than 50 and less than or equal to 60.
// - CD if marks is greater than 40 and less than or equal to 50.
// - DD if marks is greater than 30 and less than or equal to 40.
// - FF if marks is less than or equal to 30 .

// const mark = 86;
// if (mark > 90)
// console.log('AA');
// else if(mark > 80 &&  mark <= 90)
// console.log('AB');


let inputBox = document.getElementById('input-box');
let enterButton  = document.getElementById('enter-button');
let grade = document.getElementById('grade-point');
let heading = document.createElement('h4');

function gradingProcess(grade){
    let gradess = document.getElementById('grade-point');
  
    heading.innerText = grade;

    gradess.appendChild(heading);
    inputBox.value = '';
    heading.classList.add('heading-styling');
}

enterButton.addEventListener('click', function(){
   
    heading.addEventListener('click', function(){
        grade.removeChild(heading);
    })
   
    if (inputBox.value > 90 ){
        let gradeScore = 'AA';
       gradingProcess(gradeScore )
        
    }

   else if (inputBox.value >80 && inputBox.value <= 90  ){
    let gradeScore = 'AB';
       gradingProcess(gradeScore )
        
    }
    else if (inputBox.value >70 && inputBox.value <= 80 ){
        let gradeScore  = 'BB';
       gradingProcess(gradeScore )
        
    }
    else if (inputBox.value >70 && inputBox.value <= 80  ){
        let gradeScore = 'BC';
       gradingProcess(gradeScore )
        
    }
    else if (inputBox.value >60 && inputBox.value <= 70  ){
        let gradeScore = 'CC';
       gradingProcess(gradeScore )
        
    }
    else if (inputBox.value >50 && inputBox.value <= 60  ){
        let gradeScore = 'CD';
       gradingProcess(gradeScore )
        
    }
    else if (inputBox.value >40 && inputBox.value <= 50 ){
        let gradeScore = 'DD';
       gradingProcess(gradeScore )
        
    }
    else{
        let gradeScore = 'FF';
        gradingProcess(gradeScore )
    }

  

})








    // else if (inputBox.value >80 && inputBox.value <= 90 ){
      
    // }

    // else if (inputBox.value >70 && inputBox.value <= 80 ){
    //     heading.innerText = 'BB';

    //     grade.appendChild(heading);
    //     inputBox.value = '';
    //     heading.classList.add('heading-styling');
    // }
    // else if (inputBox.value >60 && inputBox.value <= 70 ){
    //     heading.innerText = 'BC';

    //     grade.appendChild(heading);
    //     inputBox.value = '';
    //     heading.classList.add('heading-styling');
    // }
    // else if (inputBox.value >50 && inputBox.value <= 60 ){
    //     heading.innerText = 'CC';

    //     grade.appendChild(heading);
    //     inputBox.value = '';
    //     heading.classList.add('heading-styling');
    // }
    // else if (inputBox.value >40 && inputBox.value <= 50 ){
    //     heading.innerText = 'CD';

    //     grade.appendChild(heading);
    //     inputBox.value = '';
    //     heading.classList.add('heading-styling');
    // }
    // else if (inputBox.value >30 && inputBox.value <= 40 ){
    //     heading.innerText = 'DD';

    //     grade.appendChild(heading);
    //     inputBox.value = '';
    //     heading.classList.add('heading-styling');
    // }
    // else{
    //     heading.innerText = 'FF';


