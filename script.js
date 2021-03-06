rightAnswer = document.getElementById("answer-box1");

function results() {
    let displayResult = document.getElementById("display-results");

    let resultsBox = document.createElement("img");
    resultsBox.setAttribute('src', 'assets/images/correct-answer.png');
    resultsBox.setAttribute('alt', 'na');
    resultsBox.setAttribute('height', '100px');
    resultsBox.setAttribute('width', '100px');
    resultsBox.setAttribute('id', 'result-box')
    displayResult.appendChild(resultsBox);

}

rightAnswer.addEventListener('click', results);
