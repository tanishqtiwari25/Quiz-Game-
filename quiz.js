const quesJSON = [
    { correctAnswer: 'Ten',
        options:['Eight','Eleven', 'Nine', 'Ten'],
        question:"How many times Roman Reigns maineventing WRESTLEMAINA?"
},
{
    correctAnswer:21,
    options:[18,21,24,23],
    question:"How long The Undertaker's stricks"
},
{
    correctAnswer:'Gunther',
    options:['Gunther','Brock Lesnar','Randy Orten','Edge'],
    question:"Who's the John Cens's last opponent?"
},

{
  correctAnswer:'Roman Reigns',
  options:['Gunther','Bron Braker','Roman Reigns','CM Punk'],
  question:"Who won the Royal Rumble 2026?"
},

{
  correctAnswer:'Brock Lesnar',
  options:['John Cena','Goldberg','Triple h','Brock Lesnar'],
  question:"Who is the wrestler with the most eliminations in the Royal Rumble?"
},

{
  correctAnswer:'RKO',
  options:['Attitude Adjustment','Spear','RKO','Stunner'],
  question:"What is the name of the finishing move used by Randy Ortan"
},
{
  correctAnswer:'WrestleMania 28',
  options:['WrestleMania 28','WrestleMania 30', 'WrestleMania 31','WrestleMania 33'],
  question:"At which WrestleMania did The Undertaker's legendary undefeated streak finally end?"
}
]
 
//Access the code
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const scoreEl = document.getElementById('score');
    const nextEl = document.getElementById('next');
      
    // Next button
    nextEl.addEventListener('click',()=>{
      scoreEl.textContent=` Score:${score} / ${totalScore}`;
      nextQuestion();
    })

    let score = 0;
        let currentQuestion=0;
        const totalScore = quesJSON.length;



       function showQuestion(){
           //Destructuring 
      const {
        correctAnswer,
        options,
        question
      } = quesJSON[currentQuestion];
        //Setting questings text content
        questionEl.textContent=question

        //Suffled call 
       const shuffledOptions=shuffleOptions(options);

       
//Population the option div
shuffledOptions.forEach((opt)=>{
  const btn=document.createElement('button');
  btn.textContent=opt;
  optionsEl.appendChild(btn);

  //Event handling on the button
  btn.addEventListener('click',()=>{
  if(opt==correctAnswer){
   score++;
  }else{
    score = score-0.25;
  }

  console.log(score);
  scoreEl.textContent=`Score:${score} / ${totalScore}`;
  nextQuestion();
});
});
  }
     
//Next Question logic
  function nextQuestion(){
  currentQuestion++;
  optionsEl.textContent='';
  if(currentQuestion>= quesJSON.length){
    questionEl.textContent='Quiz Completed!';
    nextEl.remove();// Remove button when questions is fineshed
  }else{
    showQuestion();
  }
}
 

function shuffleOptions(options){
  for(let i= options.length-1;i>=0;i--){

  const j = Math.floor(Math.random()*i+1);
  [options[i],options[j]]=[options[j],options[i]];
}
return options}

showQuestion();




   
    
  





