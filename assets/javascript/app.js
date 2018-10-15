//Pop-up on load to begin the game. May change to a button. 
$(window).ready (function () {
    $('#pageLoad').modal ('show')
});
//Currently not working - may scrap video background
// $('#start').click(function() {
//     $('#video').get(0).play();
// });
$(document).ready(function () {
    //Global Variables
    //=================
    //Questions set up in an array of objects. Make sure to update with actual questions!
    let questions = [

        {
            question: 'Fly you fools!',
            choices: ['Gandalf', 'Frodo', 'Aragorn', 'Sauron'],
            answer: 0
        },

        {
            question: 'I love you, Mr. Frodo!',
            choices: ['Gandalf', 'Legolas', 'Sam', 'Orc 25'],
            answer: 2
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
    //Display question and answer choices -- currently displays last question in array and no answer buttons
    for (var i = 0; i < questions.length; i++) {
        let question = questions[i].question;
        $('#question').html(question);
        let options = questions[i].choices;
        document.body.appendChild(document.createElement('br'));
        let ansButton = $('<button>');
        ansButton.addClass('btn btn-dark selector');
        ansButton.attr('data-ans', options[i]);
        ansButton.text(options[i]);
        $('#answerchoices').append(ansButton);

        console.log(question);
        console.log(options);
        console.log(ansButton);
    }
    //Timer 
    $('#start').click(function(){ // If changing to a start button, need to make sure to update this. Attach to the reset function.
        timer();
    });

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
            $('#timer').append('<br>','Out of Time!');
            //Display correct answer. SetTimeout for 5 seconds. Move to next question. Reset timer. 
        }
    }


    //Give button an On click event that will pull the next question from the array. Also set this to happen onTimeout so the correct answer can be displayed.
    //If statement to go to next item after each button press until at the end of the array, where the results screen will display with button to reset.
    



    



});