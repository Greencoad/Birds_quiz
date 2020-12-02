const chalk = require('chalk');
const log = console.log;
var readlinesync = require("readline-sync");
var score =0

var username = readlinesync.question(chalk.white(' Enter your Name: '));
log(chalk.red.bold('welcome', username,'to the quize on Birds with Kalarav'));

function quiz(question, answer)
{
  var useranswer = readlinesync.question(question);

  if (useranswer === answer)
  {
    log(chalk.blue.bold (' Congratulation..!',username,' your answer is correct.'));
    score = score+1;
  }
  else 
  {
    log(chalk.red('ohh...!', username,' you Just entered an Incorrect answer.'));
    score = score-1;
  }
  log(chalk.bgRed('your current score is: ', score));
}
  var question = [{ question:"what is the national bird of India (pegion/peacock/dove): ", answer:"peacock"},{ question:"which bird has the largest Egg (ostrich/kiwi/emu): ", answer:"ostrich"},{ question:"which is the smallest bird (humming bird/sun bird/taylor bird: ", answer:"humming bird"}]

  for( var i=0; i<question.length; i++)
  {
    var currentquestion=question[i];
    quiz(currentquestion.question,currentquestion.answer);
  }
  if (score === question.length)
  {
    console.log(chalk.red.bold(' Congratulation you have a perfect score...!'));
  }
  else
  {
    console.log(chalk.white.strikethrough(' Better luck next time...!'));
  }
