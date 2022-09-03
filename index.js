var readlinesync=require('readline-sync');
var userName=readlinesync.question("What is your Name?");

console.log("Welcome "+ userName + " do you know Muskan ?");

var score=0;
function play(question, answer){
  
  var userAnswer = readlinesync.question(question);
  
  if(userAnswer.toLowerCase()===answer.toLowerCase())
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
},
{
  question: "Do you know muskan's birthday ?",
  answer:"9 may"
},

 {
  question: "what is muskan's favourite food ?",
  answer:"dosa"
},
{
  question: "where does muskan work ?",
  answer:"Barclays"
},
{
  question: "Which is Muskan's favourite colour ?",
  answer:"Blue"
},

 {
  question: "Do you know Muskan's favourite movie ?",
  answer:"DDLJ"
},
{
  question: "What does Muskan do in free time ?",
  answer:"Sleep"
},

 {
  question: "One word that describes Muskan's character ?",
  answer:"Kind"
},
{
  question: "Muskan's favourite cartoon character ?",
  answer:"Doraemon"
}]

for(i=0;i<question.length;i++){
  var currQues=question[i];
  play(currQues.question, currQues.answer);
}
console.log("your total score is ",score);
