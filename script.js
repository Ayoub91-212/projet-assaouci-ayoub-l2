document.addEventListener('DOMContentLoaded', function () {
    const quiz = document.getElementById('quiz-form'); // ensemble du quizz
    const congra = document.getElementById('alert'); // congratulations 
    const urlreponse = document.URL
    console.log(urlreponse);
    const params = new URLSearchParams(new URL(urlreponse).search);
    const param1 = params.get("answer-1");
    const param2 = params.get("answer-2");
    const param3 = params.get("answer-3");
    console.log(param1,param2,param3);
    const reponses = [param1,param2,param3];
    const answerItems = document.querySelectorAll('.answer-item');
    const questionItems = document.querySelectorAll('.question-item');
    answerItems.forEach(function (answerItem, index) {
        if (reponses[index] === 'false') {
            answerItem.style.color = 'red';
        }
        if (reponses[index] === 'true') {
            answerItem.style.color = 'green';
        }
    });
    questionItems.forEach(function (questionItem, index) {
        if (reponses[index] === 'false') {
            questionItem.style.color = 'red';
        }
        if (reponses[index] === 'true') {
            questionItem.style.color = 'green';
        }
    });
    if(reponses[0] == "true" && reponses[1] == "true" && reponses[2] == "true") {
        console.log("ok");
        congra.style.display = "block";
        congra.style.color = "green";
        congra.style.background = "#82EF00";
        congra.style.fontWeight = "bold";
        congra.style.borderRadius = "5px";
        congra.style.border = "1px solid ";
        congra.style.height = "70px";
        congra.style.width = "150px";
        congra.style.position = "fixed";
        congra.style.top = "80%";
        congra.style.left = "50%";
        congra.style.transform = "translate(-50%, -50%)";
        congra.style.boxSizing = "border-box";
    }
});
