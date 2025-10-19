let questions = [
    {
    words: ['integral', 'derivative', 'limit'],
    options: ['calculus', 'geometry'],
    answer: 0
    },
    {
    words: ['matrix', 'vector', 'tensor'],
    options: ['statistics', 'linear algebra'],
    answer: 1
    },
    {
    words: ['eigenvalue', 'eigenvector', 'diagonalization'],
    options: ['linear algebra', 'trigonometry'],
    answer: 1
    },
    {
    words: ['probability', 'distribution', 'variance'],
    options: ['statistics', 'number theory'],
    answer: 0
    },
    {
    words: ['mitosis', 'meiosis', 'cytokinesis'],
    options: ['cell division processes', 'types of tissues'],
    answer: 0
    },
    {
    words: ['DNA', 'RNA', 'chromosome'],
    options: ['genetic material', 'digestive enzymes'],
    answer: 0
    },
    {
    words: ['photosynthesis', 'respiration', 'fermentation'],
    options: ['immune responses', 'metabolic processes'],
    answer: 1
    },
    {
    words: ['neuron', 'axon', 'synapse'],
    options: ['blood cells', 'nervous system components'],
    answer: 1
    },
    {
    words: ['quantum entanglement', 'wavefunction', 'superposition'],
    options: ['classical mechanics', 'quantum mechanics'],
    answer: 1
    },
    {
    words: ['relativity', 'spacetime', 'time dilation'],
    options: ['Einstein’s theories', 'Newtonian physics'],
    answer: 0
    },
    {
    words: ['boson', 'fermion', 'quark'],
    options: ['thermodynamics', 'particle physics'],
    answer: 1
    },
    {
    words: ['entropy', 'enthalpy', 'heat capacity'],
    options: ['thermodynamics', 'optics'],
    answer: 0
    }
];

const questionSpace = document.getElementById('question-display');
const scoreSpace = document.getElementById('score');

let score = 0;
scoreSpace.textContent = score;

function displayQuestions() {
    let qno = 1;
    questions.forEach( question => {
        let questionDiv = document.createElement('div');
        questionDiv.classList.add('question-div');
        
        let marker = document.createElement('h1');
        marker.classList.add('symbol-marker');
        marker.textContent = "𒌒" + qno; qno++;
        questionDiv.append(marker);


        question.words.forEach( questionWord => {
            let queText = document.createElement('p');
            queText.textContent = questionWord;
            questionDiv.append(queText);
        })

        let optionButtons = document.createElement('div');
        optionButtons.classList.add('option-buttons');
        questionDiv.append(optionButtons);

        let answerText = document.createElement('div');
        answerText.classList.add('answer-text');
        questionDiv.append(answerText);

        question.options.forEach( (option) => {
            let optionButton = document.createElement('button');
            optionButton.classList.add('option-button');
            optionButton.textContent = option;
            optionButtons.append(optionButton);

            optionButton.addEventListener('click', () => 
                checkAnswer(option, question.options, question.answer, answerText, optionButtons)
            );
        });



        questionSpace.append(questionDiv);
    }) 
}
displayQuestions();



function checkAnswer(option, options, answer, answerText, optionButtons){
    let allButtons = optionButtons.querySelectorAll('button');
    allButtons.forEach( button => button.disabled = true );

    if (option === options[answer]){
        score++;
        scoreSpace.textContent = score;
        addAnswer(answerText , 'Correct!');
    }else{
        score--;
        scoreSpace.textContent =score;
        addAnswer(answerText, 'Wrong!');
    }
}

function addAnswer(answerText, answer){
    answerText.innerText = answer;
    answerText.style.color = (answer === 'Correct!') ? 'lightgreen' : 'lightcoral';

}