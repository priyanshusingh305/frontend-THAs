const quiz = [
    { 
     question:" Q1: Which of the following is not an operating system?",
     a:"Window",
     b:"Linux",
     c:"Oracle",
     d:"DOS",
     ans:"ans3",
 },
 
 {
     question:" Q2: What is the maximum length of the filename in DOS?",
     a:"5",
     b:"4",
     c:"8",
     d:"12",
     ans:"ans3"
 
 },
 {
     question:" Q3: When was the first operating system developed?",
     a:"1950",
     b:"1949",
     c:"1948",
     d:"None of above",
     ans:"ans1"
 },
 {
     question:" Q4: When were MS windows operating systems proposed?",
     a:"1994",
     b:"1990",
     c:"1992",
     d:"Nono of above",
     ans:"ans4"
 },
 {
     question:" Q5: What is bootstrapping called?",
     a:"cold boot",
     b:"cold hot boot",
     c:"Cold hot strap",
     d:"Hot boot",
     ans:"ans1"
 }
 ];
  const container2=document.querySelector('.container2');
  const opt1=document.querySelector('#opt1');
  const opt2=document.querySelector('#opt2');
  const opt3=document.querySelector('#opt3');
  const opt4=document.querySelector('#opt4');
  const opt5=document.querySelector('#opt5');
  const answers=document.querySelectorAll('.answer')
   const btn=document.getElementById("btn")
 const show=document.querySelector('#lower')
 let count=0;
 let score=0;
 const displayQuestion = () =>{
     const h =quiz[count];
      container2.innerText=h.question;
      opt1.innerText= h.a;
      opt2.innerText= h.b;
      opt3.innerText= h.c;
      opt4.innerText= h.d;
      
 }
  displayQuestion();
 
  const getCheckedAnswer = () => {
           answers.forEach((curAnsElem) =>{
               if(curAnsElem.checked)
               {
                   answer = curAnsElem.id;
                   
               }
             });
             return answer;
  };
  
  btn.addEventListener('click' , () => {
      const correct=getCheckedAnswer();
 
      if(correct==quiz[count].ans){
          score++;
      }
      count++ ;
      if(count<quiz.length)
     {
         displayQuestion();
     }
     else{
        
        show.innerHTML=`<h2>Your score ${score}/${quiz.length}</h3>`
     }
  });
 