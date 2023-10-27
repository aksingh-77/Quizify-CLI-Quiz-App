//readline-sync modules comes from nodeJs
const readlineSync = require("readline-sync");

//kuler is a module for add color to our code
//this method takes 2 arguments - text and color
//color should only be passed in hashcode 
const kuler = require("kuler");
let score = 0;

//taking userName as input before starting Game
let userName = readlineSync.question("Enter your name: ");

console.log(kuler(`\nWelcome ${userName} to Quizify?`, "#f97316"));

//Creating database Object with question, options, and correct answer
const database = {
  data : [
    {
      question : `let a = {}, b={}
console.log(a==b) 
console.log(a===b)`,
      options : {
        a : "false false",
        b : "false true",
        c : "true false",
        d : "true true"
      },
      correctAnswer : "a"
    },

    {
      question : `Object.assign(target, source) creates which type of copy? `, 

      options : {
        a : "Deep Copy",
        b : "Shallow Copy",
        c : "Nested Copy",
        d : "Creates a new reference"
      },
      correctAnswer : "b"
    },

    {
      question : `Which of the following is not a Javascript Framework? `,
      options : {
        a : "React",
        b : "Node.js",
        c : "Angular",
        d : "Spring-Boot"
    },
       correctAnswer : "d"
    },

    {
      question : 'Is method chaining possible with forEach',
      options : {
        a : "Yes",
        b : "No"
      },
      correctAnswer : "b"
    }
    
  ]
}

//Creating Object for name of players and their score
const leaderBoard = {
  data : [
    {
      name : "Gauri",
      score : 1
    },
    {
      name : "Abhishek",
      score : 4
    },
    {
      name : "Jay",
      score : 3
    }
  ]
}

/** 
* This method is to compare the user answer and correct answer
*/
function playGame(userAnswer, correctAnswer){
  if(userAnswer === correctAnswer){
    console.log(kuler("Correct Answer","#15803d"));
    score++;
    
  }
  else{
    console.log(kuler(`Incorrect Answer`,"#be123c"))
    console.log(kuler(`Correct Answer is ${correctAnswer}`, "#2563eb"))
  }
}

/** 
* Function to iterate over the questions from the database
*/
function showQuestionAndOptions(database){
  for(let i = 0; i<database.data.length; i++){
    //to add line before and after a question used \n
    console.log(kuler(`\n Question ${i+1} : ${database.data[i].question} \n`, "#831843"));

    //for loop iterate over the options of the questions
    for(let key in database.data[i].options){
      console.log(`${key} : ${database.data[i].options[key]}`);
    }

    
    /**   to take user input we used readlineSync and chain it with the toLowerCase method to make the user inputs received in variable is in lower case*/
    let userAnswer = readlineSync.question(kuler(`Enter your answer - (a/b/c/d) : `, "#5b21b6")).toLowerCase();

    //method called to check if answer is correct or not
    playGame(userAnswer, database.data[i].correctAnswer);
  }

  
}

/** 
Function to show leader board here will push new players name also
*/
function showLeaderBoard(leaderBoard, score){
  leaderBoard.data.push({name : userName, score: score})
  //console.log(leaderBoard);

  let sortedScoreList = leaderBoard.data.sort((a,b) => b.score - a.score);
  console.log(kuler(`\n\nCheck your position on the leader Board`,"#facc15"));
  for(let leader of sortedScoreList){
    console.log(kuler(`${leader.name} --> ${leader.score}`, "#a21caf"));
  }
}

showQuestionAndOptions(database);
console.log(kuler(`\n Your Score is ${score}/${database.data.length}`,"#65a30d"));
showLeaderBoard(leaderBoard, score);
