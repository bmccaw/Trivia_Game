//Pop-up on load to begin the game. May change to a button. 
// $(window).ready (function () {
//     $('#pageLoad').modal ('show')
// });
//Currently not working - may scrap video background
// $('#start').click(function() {
//     $('#video').get(0).play();
// });
$(document).ready(function () {
    //Global Variables
    //=================
    //Questions set up in an array of objects. 
    let questions = [

        {
            question: 'Which of these dwarves is the father of Gimli?',
            choices: ['Gloin', 'Oin', 'Dwalin', 'Balin'],
            answer: [true,false,false,false],
        },
        {
            question: 'What is the name of the massive statues the fellowship encountered as they traveled down the river Anduin?',
            choices: ['Amon Hen', 'Amon Sul', 'Argonath', 'Dol Amroth'],
            answer: [false,false,true,false],
        },
        {
            question: 'This area of the Kingdom of Gondor is where Frodo met the ranger Faramir.',
            choices: ['Lothlorien', 'Cair Andros', 'Arnor', 'Ithilien'],
            answer: [false,false,false,true],
        },
        {
            question: 'Which of these names does NOT refer to Aragorn?',
            choices: ['Strider', 'Elessar', 'Anarion', 'Thorongil'],
            answer: [false,false,true,false],
        },
        {
            question: 'Which of these is NOT one of the five wizards?',
            choices: ['Gandalf', 'Celebrimbor', 'Radagast', 'Saruman'],
            answer: [false,true,false,false],
        },
        {
            question: 'Who is "The Necromancer" that occupies Dol Guldur?',
            choices: ['Sauron', 'Melkor', 'Saruman', 'Khamul'],
            answer: [true,false,false,false],
        },
        {
            question: 'This creature of fire and shadow was known to the dwarves as "Durin\'s Bane."',
            choices: ['Shelob', 'Uruk-hai', 'Nazgul', 'Balrog'],
            answer: [false,false,false,true],
        },
        {
            question: 'Which of these characters did not possess a ring of power?',
            choices: ['Galadriel', 'Aragorn', 'Elrond', 'Gandalf'],
            answer: [false,true,false,false],
        },
    ];
    let userGuess;
    //Counters
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    //Timer variables
    let timeRemaining = 30;
    let triviaTime;

    //RESET function once game is complete
    function reset() {

        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;
    }

    $('#start').click(function () { //calls the first question and resets score to 0 and timer to 30 sec
        $(this).hide();
        reset();
        timer();
        getQuestion();
        

    });
    //Timer 
    function timer() {
        clearInterval(triviaTime)
        triviaTime = setInterval(decrement, 1000);
    }
    function decrement() {
        timeRemaining--;

        $('#timer').html('Time Remaining: ' + timeRemaining + ' seconds.');

        if (timeRemaining === 0) {
            unanswered++;
            clearInterval(triviaTime)
            $('#timer').append('<br>', 'Out of Time!');
            //Display correct answer. SetTimeout for 5 seconds. Move to next question. Reset timer. 
            console.log(unanswered);
        }
    }
    //Display question and answer choices -- currently displays all questions and answer choices at once - need to figure out how to display one per page.
    function getQuestion () {
        //question
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i].question;
        $('#question').append('<h3>' + question + '</h3>');
        document.body.appendChild(document.createElement('br'));
        //answer choices
        for (let j = 0; j < questions[i].choices.length; j++) {
            let option = questions[i].choices[j];
            $('#question').append('<span class="ring"></span><h3><button type="button" name="answer" class="answerchoice"' + i + '"value="' + option + '">' + option + '</button></h3>');
            //assign true to correct guess and false to incorrect guesses
            for (let k = 0; k < questions[i].answer.length; k++) {
                let guess = questions[i].answer; //something definitely wrong here. Need to figure out. 
                $('.answerchoice').attr('value', guess);

        console.log(question);
        console.log(option);
        console.log(guess);
            }
        
        }       
    }
    }
    function correctIncorrect() {
        if (indexof('.answerchoice').click() === questions.answer) {
            correct++;
        }
            else {
                incorrect++;
            }
        //answer variable marks the position of the correct answer in the choices array. 
        //need to figure out a way for this function to check that this button has been pressed and increment 
        //the correct variable
    }
    //This function will hide all quiz content, display results and a win/lose message, and show the start button to start the game again.
    function displayResults() {
        $('#timer').empty();
        $('#question').empty();
        $('#question').append('<h3>Correct: ' + correct + '</h3>');
        $('#question').append('<h3>Incorrect: ' + incorrect + '</h3>');
        $('#question').append('<h3>Unanswered: ' + unanswered + '</h3>');
        $('#start').show();

        if (correct > incorrect) {
            $('#question').prepend('<h4>Congratulations! You win!</h4>')
        }
        else {
            $('#question').prepend('<h4>All is lost!</h4>')
        }
    }
    //Give button an On click event that will pull the next question from the array. Also set this to happen onTimeout so the correct answer can be displayed.
    //If statement to go to next item after each button press until at the end of the array, where the results screen will display with button to reset.








});