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
            correctAnswer: 0,
        },
        {
            question: 'What is the name of the massive statues the fellowship encountered as they traveled down the river Anduin?',
            choices: ['Amon Hen', 'Amon Sul', 'Argonath', 'Dol Amroth'],
            correctAnswer: 2,
        },
        {
            question: 'This area of the Kingdom of Gondor is where Frodo met the ranger Faramir.',
            choices: ['Lothlorien', 'Cair Andros', 'Arnor', 'Ithilien'],
            correctAnswer: 3,
        },
        {
            question: 'Which of these names does NOT refer to Aragorn?',
            choices: ['Strider', 'Elessar', 'Anarion', 'Thorongil'],
            correctAnswer: 2,
        },
        {
            question: 'Which of these is NOT one of the five wizards?',
            choices: ['Gandalf', 'Celebrimbor', 'Radagast', 'Saruman'],
            correctAnswer: 1,
        },
        {
            question: 'Who is "The Necromancer" that occupies Dol Guldur?',
            choices: ['Sauron', 'Melkor', 'Saruman', 'Khamul'],
            correctAnswer: 0,
        },
        {
            question: 'This creature of fire and shadow was known to the dwarves as "Durin\'s Bane."',
            choices: ['Shelob', 'Uruk-hai', 'Nazgul', 'Balrog'],
            correctAnswer: 3,
        },
        {
            question: 'Which of these characters did NOT possess a ring of power?',
            choices: ['Galadriel', 'Aragorn', 'Elrond', 'Gandalf'],
            correctAnswer: 1,
        },
    ];
    let userGuess = '';
    var index;
    var pick;
    var holder = [];
    //Counters
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let questionCount = questions.length;
    //Timer variables
    let timeRemaining = 30;
    var running = false;
    let triviaTime;

    //RESET function once game is complete
    // function reset() {

    //     index = 0;
    //     let correct = 0;
    //     let incorrect = 0;
    //     let unanswered = 0;
    //     $('#answerarea').empty();
    // }
 
    $('#reset').hide();    
    

    $('#start').click(function () { //calls the first question and resets score to 0 and timer to 30 sec
        $(this).hide();
        // reset();
        timer();
        getQuestion();
        for(var i = 0; i < questions.length; i++) {
            holder.push(questions[i]);
            console.log(holder);
        }
        //This function should check if the button name matches the correct answer in the object. Currently only works for the first question.
    $(document).on('click', '.answerchoice',function() {
        userGuess = parseInt($(this).attr('guess-value'));
        if (userGuess === pick.correctAnswer) {
            stop();
            correct++;
            userGuess ='';
            $('#answerarea').html('<h3>Correct!</h3>')
            displayResults();
            toggleDone();
        }
        else {
            stop();
            incorrect++;
            userGuess = '';
            $('#answerarea').html('<h3>Wrong! The correct answer is ' + pick.choices[pick.correctAnswer] + '</h3>');
            displayResults();

        }
        console.log('Working!');
        console.log(this);
        console.log('UserGuess is ' + userGuess);
        console.log('Correct answer is ' + pick.correctAnswer);
        console.log('Correct answers: ' + correct);
        console.log('Incorrect answers: ' + incorrect);
    
    });
    
    });
    //Timer 
    function timer() {
        clearInterval(triviaTime)
        triviaTime = setInterval(decrement, 1000);
    }
    function decrement() {
        timeRemaining--;
        running = true;
        $('#timer').html('Time Remaining: ' + timeRemaining + ' seconds.');

        if (timeRemaining === 0) {
            unanswered++;
            stop();
            clearInterval(triviaTime)
            $('#answerarea').html('<h3>Out of Time! The correct answer is ' + pick.choices[pick.correctAnswer] + '</h3>');
            displayResults();
            
            console.log(unanswered);
        }
    }
    function stop () {
    running = false;
    clearInterval(triviaTime);
    }
    //Display question and answer choices 
    function getQuestion () {
        index = Math.floor(Math.random() * questions.length); //pulls question at random -- currently can pull the same question multiple times (needs fix)
        pick = questions[index];
        //question
        $('#question').html('<h3>' + pick.question + '</h3>');
        for (let i = 0; i < pick.choices.length; i++) {
            let userChoice = $('<button>');
            userChoice.addClass('btn btn-light answerchoice');
            userChoice.html(pick.choices[i]);
            userChoice.attr('guess-value', i);
            $('#answerarea').append(userChoice);  
            
        }
        console.log(index);
        console.log(pick);
    }    

    //This function will hide all quiz content, display results and a win/lose message, and show the 'Play Again' to start the game again.
    function displayResults() {

        //show image or video
        //setTimeout 5-7 seconds
        //run check
        setTimeout(function() {
            $('#answerarea').empty();
            timeRemaining = 30;
        
    
        if ((correct + incorrect + unanswered) === questionCount) {
        $('#timer').empty();
        $('#question').empty();
        $('#question').html('<h2>Results:</h2>');
        $('#answerarea').append('<h3>Correct: ' + correct + '</h3>');
        $('#answerarea').append('<h3>Incorrect: ' + incorrect + '</h3>');
        $('#answerarea').append('<h3>Unanswered: ' + unanswered + '</h3>');
        $('#reset').show();
        if (correct > incorrect && correct > unanswered) {
            $('#answerarea').prepend('<h4>Congratulations! You win!</h4>')
        }
        else {
            $('#answerarea').prepend('<h4>All is lost!</h4>')
        }
        }
        else {
            timer(); 
            getQuestion();
        }
        }, 5000);
        
        console.log('Question count: ' + questionCount);
    }
    //Play Again button with reset function on click
    $('#reset').click(function() {
        $('#reset').hide();
        $('#answerarea').empty();
        $('#question').empty();
        correct = 0;
        incorrect = 0;
        unasnwered = 0;
        for(var i = 0; i < holder.length; i++) {
            questions.push(holder[i]);
        }
        timer();
        getQuestion();
    });






});