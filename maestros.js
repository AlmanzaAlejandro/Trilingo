function sendQuestion(teacherName) {
    const questionBox = document.querySelector(`.teacher-card:has(img[alt="${teacherName}"]) .question-box`);
    const question = questionBox.value.trim();
    
    if (question) {
        // Aquí podrías agregar la lógica para enviar la pregunta a un servidor o manejarla de alguna manera
        alert("Pregunta enviada");

        // Limpiar el cuadro de texto después de enviar la pregunta
        questionBox.value = "";
    } else {
        alert("Por favor, escribe una pregunta antes de enviarla.");
    }
}
