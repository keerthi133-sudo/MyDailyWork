var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "How many calories of energy is obtainable in an 100g of pineapple?",
    "options": [
    {
    "a": "51Kcal",
    "b": "31Kcal",
    "c": "33Kcal",
    "d": "50Kcal"
    }
    ],
    "answer": "50Kcal",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question":"Which of these animals is associated with pineapple?",
    "options": [
    {
        "a": "camel;",
    "b": "parrot;",
    "c": "buttterfly;",
    "d": "Hummingbird;"
    }
    ],
    "answer": "Hummingbird;",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "What is the percentage composition of manganese in 100g of pineapple?",
    "options": [
    {
    "a": "47 percent DV",
    "b": "34 percent DV",
    "c": "58 percent DV",
    "d":"54 percent DV"
    }
    ],
    "answer": "58 percent DV",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "According to records, pineapple was known to originated from; tag.",
    "options": [
    {
    "a": "South Africa",
    "b": "East Africa",
    "c":"North America",
    "d":"South America"
    }
    ],
    "answer": "South Africa",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "Who introduced the fruit to inhabitants of Hawaii?",
    "options": [
    {
    "a": "charle Badge",
    "b": "Alex Budman",
    "c": "John Kidwell",
    "d": "Page Bill"
    }
    ],
    "answer": "John Kidwell",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which variety of pineapple is known as Sarawak in some parts of Asia??",
    "options": [
    {
    "a": "Natal Queen",
    "b": "Hilo",
    "c": "Red Spanish",
    "d":"Smooth Ceyenne"
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Pineapples contain all of the following except?",
    "options": [
    {
    "a": "Ferulic acid",
    "b": "Gallic acid",
    "c": "Vanillin",
    "d":"Cyanide"
    }
    ],
    "answer": "Cyanide",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "The wilt disease of pineapple is vectored by _________?",
    "options": [
    {
    "a": "Rats",
    "b": "Aphids",
    "c": "Mealybugs",
    "d": "Grasshopers"
    }
    ],
    "answer": "mealybugs",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Concerning the disease of pineapple which if these is odd",
    "options": [
    {
    "a": "Bacteria heart rot",
    "b": "Nematadol heart rot",
    "c": "Fungal heart rot",
    "d": "pink disease"
    }
    ],
    "answer": "Nematdol rot",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Which of these is not a pest of pineapple?",
    "options": [
    {
    "a": "Aphids",
    "b": "Ants",
    "c": "Mites",
    "d": "Scales",
    }
    ],
    "answer": "Aphids",
    "score": 0,
    "status": ""
    },
    {
    "id": 11,
    "question": "Top importers of pineapples?",
    "options": [
    {
    "a": "USA -34% of the world import($887 million",
    "b": "china-6.98%($179 million",
    "c": "japan-5.53%($142 million"
    }
    ],
    "answer": "USA -34% of the world import($887 million",
    "score": 0,
    "status": ""
    },
    {
    "id": 12,
    "question": "What country eat  the most pineapple?",
    "options": [
    {
    "a": "philippines",
    "b": "Assam",
    "c": "India",
    "d": "UAE"
    }
    ],
    "answer": "philippines",
    "score": 0,
    "status": ""
    },
    {
    "id": 13,
    "question": "pineapple are grown in various types of soil?",
    "options": [
    {
    "a": "moderately fertile",
    "b": "clay soil",
    "c": "heavy sod",
    "d":"draining soil"
    }
    ],
    "answer": "moderately fertile",
    "score": 0,
    "status": ""
    },
    {
    "id": 14,
    "question": "protonic name of pineapple?",
    "options": [
    {
    "a": "Malus domestica",
    "b": "Ananas comosus",
    "c": "Musa acuminata",
    "d":"vitis vinifera"
    }
    ],
    "answer": "Ananas comosus",
    "score": 0,
    "status": ""
    },
    {
    "id": 15,
    "question":"best are the climate of pineapple?",
    "options": [
    {
    "a": "tropicals lowlands where humid and warm climate",
    "b": "Subtropical and warm temperatures and moderate humidity level",
    "c": "Mild tropical climate",
    "d": "Humid tropics"
    }
    ],
    "answer": "Mild tropicals climate",
    "score": 0,
    "status": ""
    },
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });