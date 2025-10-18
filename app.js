let questions = [
    {
        words : ['mango', 'banana', 'apple'],
        options : ['fruits', 'animals'],
        answer  : 0, 
    },
    {
        words : ['dog', 'cat', 'elephant'],
        options : ['vehicles', 'animals'],
        answer  : 1,
    },
    {
        words : ['car', 'bus', 'bicycle'],
        options : ['vehicles', 'fruits'],
        answer  : 0,
    },
    {
        words : ['rose', 'tulip', 'daisy'],
        options : ['flowers', 'vehicles'],
        answer  : 0,
    }
];

const questionSpace = document.getElementById('question-display');
const scoreSpace = document.getElementById('score');

let score = 0;
scoreSpace.textContent = score;

function displayQuestions() {
    questions.forEach( question => {
        let questionDiv = document.createElement('div');
        questionDiv.classList.add('question-div');
        
        let marker = document.createElement('h1');
        marker.classList.add('symbol-marker');
        marker.textContent = "?";
        questionDiv.append(marker);


        question.words.forEach( questionWord => {
            let queText = document.createElement('p');
            queText.textContent = questionWord;
            questionDiv.append(queText);
        })

        let optionButtons = document.createElement('div');
        optionButtons.classList.add('option-buttons');
        questionDiv.append(optionButtons);

        question.options.forEach( option => {
            let optionButton = document.createElement('button');
            optionButton.classList.add('option-button');
            optionButton.textContent = option;
            optionButtons.append(optionButton);
        })




        questionSpace.append(questionDiv);
    }) 
}
displayQuestions();