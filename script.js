//select all lements
const wrap = document.getElementById("Wrapper");
const question = document.getElementById("question");
const image = document.getElementById("queImage");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const rt = "s" ;
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
var cho = document.getElementsByName('choice');


let questions = [{
question : "What does HTML stand for?",
image : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
choiceA : "Hyper Protocol",
choiceB: "Markup Protocol",
choiceC: "HyperText Markup Language",
choiceD: "HyperLanguage Protocol",
rt:"C"
},
{
question : "What does CSS stand for?",
image : "https://www.sololearn.com/Icons/Courses/1023.png",
choiceA : "Common Stling Language",
choiceB: "Cascading StyleSheets",
choiceC: "Common StyleSheets",
choiceD: "None Of The Above",
rt:"B"
},
{
question : "What does JS stand for?",
image : "https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png",
choiceA : "Java Source",
choiceB: "Java Java",
choiceC: "Java Sheets",
choiceD: "JavaScript",
rt:"D"
},
{
question : "Thank You for Taking the Test. ",
image: ""
}
];
const lastquestion = questions.length - 1;
let runningquestion = 0;
let q;
let cor=0 ,wro = 0;
//variables

function renderQuestion(){
q = questions[runningquestion];
question.innerHTML = "<p>" + q.question+ "</p>";
image.innerHTML = "<img src = " + q.image +" width = '200px' height = '200px' >";
choiceA.innerHTML = "<input type='radio' value = 'A' name ='choice'/>" + q.choiceA;
choiceB.innerHTML = "<input type='radio' value = 'B' name ='choice'/>" + q.choiceB;
choiceC.innerHTML = "<input type='radio' value = 'C' name ='choice'/>" + q.choiceC;
choiceD.innerHTML = "<input type='radio' value = 'D' name ='choice'/>" + q.choiceD;
update();
}

function update()
{
correct.innerHTML = "Correct : " + cor;
wrong.innerHTML = "Wrong : " + wro;
}

function next()
{
for(var i = 0;i<cho.length;i++)
{
console.log(cho[i] );
if(cho[i].checked)
{
if(cho[i].value === q.rt)
{
alert("your Answer is Correct");
cor++;
}
else
{
alert("your Answer is Wrong");
wro++;
}
runningquestion++;
renderQuestion();
}
}
}
function back(){
runningquestion++;
renderQuestion();
}