function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1 >Result</h1>";

      if      (quiz.score==1 ) {
    gameOverHTML =   "<h2 id='score'>  " + `<div><img src="img/gatto1.jfif" alt=""></div>` + "</h2>";
      }else if(quiz.score==2){
        gameOverHTML =  "<h2 id='score'>  " +`<div><img src="img/gatto2.jfif" alt=""></div>` + "</h2>";
        }else if(quiz.score==3){
        gameOverHTML =  "<h2 id='score'>  " +`<div><img src="img/gatto3.jfif" alt=""></div>` + "</h2>";
         }else if(quiz.score==4){
         gameOverHTML = "<h2 id='score'>  " + `<div><img src="img/gatto4.jfif" alt=""></div> `+ "</h2>";
         }
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Come ti presenti nell’abbigliamento?", ["Sempre molto elegante", "Abbigliamento sobrio con colori tenui","Vesti sempre di nero", "I tuoi vestiti non possono prescindere da una trama animalier"], "I tuoi vestiti non possono prescindere da una trama animalier"),
    new Question("Come descriveresti il tuo carattere?", ["Gentile e pacato", "Vivace estroverso avventuroso", "Discreto e affettuoso", "Molto volubile"], "Discreto e affettuoso"),
    new Question("Come occupi il tuo tempo libero?.", ["Mi piace trascorrere molto tempo da sola", "Mi piace passeggiare o correre all’aria aperta","i piace trascorrere tempo con gli amici e amo le coccole con il partner", "Ho una sola amica con cui faccio qualunque cosa"], "Ho una sola amica con cui faccio qualunque cosa"),
    new Question("Come descriveresti il rapporto ideale tra estetica e sostanza?", ["La mia estetica conta molto e prevarica spesso la sostanza", "La mia estetica non pregiudica la sostanza", "Sta tutto nellequilibrio trovo affascinante essere discretiti", "Non importa l’estetica ma i comportamenti e la generosità"], "Non importa l’estetica ma i comportamenti e la generosità"),
    // new Question("Come descriveresti il rapporto ideale tra estetica e sostanza?", ["Language", "Library", "Framework", "All"], "Framework")
];


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

//
// new Question("Come ti presenti nell’abbigliamento?", ["Sempre molto elegante", "Abbigliamento sobrio con colori tenui", "Vesti sempre di nero", "I tuoi vestiti non possono prescindere da una trama animalier"], "I tuoi vestiti non possono prescindere da una trama animalier"),
// new Question("Come descriveresti il tuo carattere?", ["Gentile e pacato", "Vivace estroverso avventuroso", "Discreto e affettuoso", "Molto volubile"], "Molto volubile"),
// new Question("Come occupi il tuo tempo libero?", ["Mi piace trascorrere molto tempo da sola", "Mi piace passeggiare o correre all’aria aperta","Mi piace trascorrere tempo con gli amici e amo le coccole con il partner", "Ho una sola amica con cui faccio qualunque cosa"], "Mi piace trascorrere molto tempo da sola"),
// new Question("Come descriveresti il rapporto ideale tra estetica e sostanza?", ["La mia estetica conta molto e prevarica spesso la sostanza", "La mia estetica non pregiudica la sostanza","Sta tutto nellequilibrio, trovo affascinante essere discreti", "Non importa l’estetica ma i comportamenti e la generosità"], "trovo affascinante essere discreti")
