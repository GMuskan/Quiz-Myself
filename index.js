var readlinesync=require('readline-sync');
var userName=readlinesync.question("What is your Name?");

console.log("Welcome "+ userName + " do you know Muskan ?");

var score=0;
function play(question, answer){
  
  var userAnswer = readlinesync.question(question);
  
  if(userAnswer===answer)
  {
    console.log("you are right!");
    score++;
    console.log("current score is ", score);
  
  }
  else
  {
    console.log("you are wrong!");
  
  }
  console.log(".................");
}
 
var question=[
  {
  question: "where do Muskan live ?",
  answer:"Agra"
},

 {
  question: "Do you know Muskan's favt superhero would be ?",
  answer:"Batman"
}]

for(i=0;i<question.length;i++){
  var currQues=question[i];
  play(currQues.question, currQues.answer);
}
console.log("your total score is ",score);
