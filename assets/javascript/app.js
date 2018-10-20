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
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/kyevhryWKHk?controls=0&amp;start=56&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'What is the name of the massive stone monuments the fellowship encountered as they traveled down the river Anduin?',
            choices: ['Amon Hen', 'Amon Sul', 'Argonath', 'Dol Amroth'],
            correctAnswer: 2,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/SlLC1kCH1ps?controls=0&amp;start=38&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'This area of the Kingdom of Gondor is where Frodo met the ranger Faramir.',
            choices: ['Lothlorien', 'Cair Andros', 'Arnor', 'Ithilien'],
            correctAnswer: 3,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/ar_aKXzr-Z4?controls=0&amp;start=106&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'Which of these names does NOT refer to Aragorn?',
            choices: ['Strider', 'Elessar', 'Anarion', 'Thorongil'],
            correctAnswer: 2,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/BtEC3pNEMhY?controls=0&amp;start=24&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'Which of these characters was NOT a member of the Fellowship?',
            choices: ['Legolas', 'Bilbo', 'Boromir', 'Merry'],
            correctAnswer: 1,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/CvAXidAPTRM?controls=0&amp;start=25&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'Who is "The Necromancer" that occupies Dol Guldur?',
            choices: ['Sauron', 'Melkor', 'Saruman', 'Khamul'],
            correctAnswer: 0,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/PIrVmJeI1_8?controls=0&amp;start=110&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'This creature of fire and shadow was known to the dwarves as "Durin\'s Bane."',
            choices: ['Shelob', 'Uruk-hai', 'Nazgul', 'Balrog'],
            correctAnswer: 3,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/mJZZNHekEQw?controls=0&amp;start=6&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'Which of these characters did NOT possess a ring of power?',
            choices: ['Galadriel', 'Aragorn', 'Elrond', 'Gandalf'],
            correctAnswer: 1,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/K3VOf3CBGvw?controls=0&amp;start=261&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'At the beginning of "The Fellowship of the Ring", what birthday is Bilbo celebrating"?',
            choices: ['100', '111', '99', '101'],
            correctAnswer: 1,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/s2sVMLr1fDg?controls=0&amp;start=17&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'In the book, "The Fellowship of the Ring," what elf meets Aragorn and the hobbits on the way to Rivendell?',
            choices: ['Arwen', 'Elrond', 'Haldir', 'Glorfindel'],
            correctAnswer: 3,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/N4I7myAG_mY?controls=0&amp;start=144&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'This sword, also known as "Flame of the West," was reforged from the shards of Narsil.',
            choices: ['Anduril', 'Glamdring', 'Orcrist', 'Gurthang'],
            correctAnswer: 0,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/fsbDigj7w5c?controls=0&amp;start=202&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
        {
            question: 'In "The Fellowship of the Ring," who is Sam in relation to Frodo?',
            choices: ['Brother', 'Cousin', 'Gardener', 'Housekeeper'],
            correctAnswer: 2,
            videoCode: '<iframe width="750" height="360" src="https://www.youtube.com/embed/JXuqJ4c1dxE?controls=0&amp;start=68&amp;modestbranding=1&autoplay=1&disablekb&rel=0&showinfo=0&iv_load_policy=3" </iframe>'
        },
    ];
    let userGuess = '';
    var index;
    var pick;
    var holder = [];
    var newArray = [];
    var player;
    //Counters
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let questionCount = questions.length;
    //Timer variables
    let timeRemaining = 30;
    var running = false;
    let triviaTime;
 
    $('#reset').hide();    
    $('body').click(function() {
        $('audio').get(0).play();
        $('#bgmusic').prop('volume', 0.5);
    });

    $('#start').click(function () { //calls the first question and resets score to 0 and timer to 30 sec
        $(this).hide();
        $('#ring').hide();
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
            document.getElementById("bgmusic").muted = true;

        }
        else {
            stop();
            incorrect++;
            userGuess = '';
            $('#answerarea').html('<h3>Wrong! The correct answer is ' + pick.choices[pick.correctAnswer] + '</h3>');
            displayResults();
            document.getElementById("bgmusic").muted = true;


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
            document.getElementById("bgmusic").muted = true;
            
            console.log(unanswered);
        }
    }
    function stop () {
    running = false;
    clearInterval(triviaTime);
    }
    //Display question and answer choices 
    function getQuestion () {
        index = Math.floor(Math.random() * questions.length); //pulls question at random 
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
        $('#answerarea').append(pick.videoCode);
        //adds question to new array and removes it from the questions array, making sure it isn't available for random selection
        newArray.push(pick);
        questions.splice(index,1);
        console.log('New Array = ' + newArray);
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
            document.getElementById("bgmusic").muted = false;
        }
        }
        else {
            timer(); 
            getQuestion();
            document.getElementById("bgmusic").muted = false;
        }
        }, 20000);
        

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
    //YouTube API experiment
    //I want to be able to display and autoplay, with sound, a specific youtube video when the user clicks an answer choice
    //I can store the youtube play options in a variable and call them from an object on click
    // function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('video-placeholder', {
    //         width: 600,
    //         height: 400,
    //         videoId: 'Xa0Q0J5tOP0',
    //         playerVars: {
    //             color: 'white',
    //             playlist: 'taJ60kskkns,FG0fTKAqZ5g'
    //         },
    //         events: {
    //             onReady: initialize
    //         }
    //     });
    // } 
    // $(document).on('click', '.answerchoice', function () {

    //     var url = $(this).attr('data-video-id');
    
    //     player.cueVideoById(url);
    
    // });



});