document.addEventListener("DOMContentLoaded", function() {
    const flagIcon = document.getElementById('flag-icon');

    flagIcon.addEventListener('click', function() {
        // Cambiar el idioma al hacer clic en la bandera
        let currentLanguage = localStorage.getItem('selectedLanguage');
        
        if (currentLanguage === 'Español') {
            localStorage.setItem('selectedLanguage', 'Inglés');
            flagIcon.src = 'ingles.png';
        } else if (currentLanguage === 'Inglés') {
            localStorage.setItem('selectedLanguage', 'Francés');
            flagIcon.src = 'frances.png';
        } else {
            localStorage.setItem('selectedLanguage', 'Español');
            flagIcon.src = 'espanol.png';
        }
        
        // Recargar la página para que los cambios tomen efecto
        location.reload();
    });

    // Configurar la bandera inicial según el idioma guardado
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'Español';
    if (selectedLanguage === 'Inglés') {
        flagIcon.src = 'ingles.png';
    } else if (selectedLanguage === 'Francés') {
        flagIcon.src = 'frances.png';
    } else {
        flagIcon.src = 'espanol.png';
    }
});

let currentQuestion = 0;
let score = 0;
let selectedQuiz;

// Cuestionarios y exámenes para diferentes idiomas
const quizzes = {
    "Español": {
        "Examen 1": [
            {
                question: "¿Cómo se dice 'hola' en inglés?",
                options: ["Hello", "Goodbye", "Please", "Thanks"],
                correct: 0
            },
            {
                question: "¿Cuál es la capital de Francia?",
                options: ["Madrid", "Rome", "Paris", "Berlin"],
                correct: 2
            }
        ],
        "Examen 2": [
            {
                question: "¿Cómo se dice 'adiós' en inglés?",
                options: ["Hello", "Goodbye", "Please", "Thanks"],
                correct: 1
            },
            {
                question: "¿Cuál es la capital de Alemania?",
                options: ["Madrid", "Berlin", "Paris", "Rome"],
                correct: 1
            }
        ]
    },
    "Inglés": {
        "Examen 1": [
            {
                question: "How do you say 'hola' in English?",
                options: ["Hello", "Goodbye", "Please", "Thanks"],
                correct: 0
            },
            {
                question: "What is the capital of France?",
                options: ["Madrid", "Rome", "Paris", "Berlin"],
                correct: 2
            }
        ],
        "Examen 2": [
            {
                question: "How do you say 'adiós' in English?",
                options: ["Hello", "Goodbye", "Please", "Thanks"],
                correct: 1
            },
            {
                question: "What is the capital of Germany?",
                options: ["Madrid", "Berlin", "Paris", "Rome"],
                correct: 1
            }
        ]
    },
    "Francés": {
        "Examen 1": [
            {
                question: "Comment dit-on 'hello' en français?",
                options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
                correct: 0
            },
            {
                question: "Quelle est la capitale de la France?",
                options: ["Madrid", "Rome", "Paris", "Berlin"],
                correct: 2
            }
        ],
        "Examen 2": [
            {
                question: "Comment dit-on 'goodbye' en français?",
                options: ["Bonjour", "Au revoir", "Merci", "S'il vous plaît"],
                correct: 1
            },
            {
                question: "Quelle est la capitale de l'Allemagne?",
                options: ["Madrid", "Berlin", "Paris", "Rome"],
                correct: 1
            }
        ]
    }
};

// Función para empezar el cuestionario
function startQuiz(examName) {
    // Obtener el idioma seleccionado
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'Español';
    selectedQuiz = quizzes[selectedLanguage][examName];
    
    document.querySelector('.lessons-grid').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    
    loadQuestion();
}

// Función para cargar una pregunta
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const quiz = selectedQuiz[currentQuestion];

    questionElement.textContent = quiz.question;
    optionsElement.innerHTML = "";

    quiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

// Función para verificar la respuesta
function checkAnswer(selectedIndex) {
    const quiz = selectedQuiz[currentQuestion];
    if (selectedIndex === quiz.correct) {
        score++;
        alert("¡Correcto!");
    } else {
        alert("Incorrecto. La respuesta correcta era: " + quiz.options[quiz.correct]);
    }
    document.getElementById("next-button").style.display = "block";
}

// Función para cargar la siguiente pregunta
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < selectedQuiz.length) {
        loadQuestion();
        document.getElementById("next-button").style.display = "none";
    } else {
        showResults();
    }
}

// Función para mostrar los resultados y redirigir a la página de exámenes
function showResults() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = "Has completado el examen. Tu puntuación es " + score + "/" + selectedQuiz.length;
    optionsElement.innerHTML = "";

    document.getElementById("next-button").style.display = "none";

    // Esperar unos segundos y redirigir a la página de exámenes
    setTimeout(() => {
        location.reload(); // Esto recarga la página y vuelve a mostrar los exámenes
    }, 3000); // 3000 milisegundos = 3 segundos
}

