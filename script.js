function seeMore(){
  let aboutMe=document.getElementById("abme");
  aboutMe.classList.remove("hidden");
  document.getElementById("seemore").classList.add("hidden")
  document.getElementById("seeless").classList.remove("hidden")
}
function seeLess(){
  let aboutMe=document.getElementById("abme");
  aboutMe.classList.add("hidden");
  document.getElementById("seemore").classList.remove("hidden")
  document.getElementById("seeless").classList.add("hidden")
}
function getMore(){
  let myCareer=document.getElementById("career");
  myCareer.classList.remove("hidden");
  document.getElementById("getmore").classList.add("hidden")
  document.getElementById("getless").classList.remove("hidden")
}
function getLess(){
  let myCareer=document.getElementById("career");
  myCareer.classList.add("hidden");
  document.getElementById("getmore").classList.remove("hidden")
  document.getElementById("getless").classList.add("hidden")
}
function showResults(){
let q1=document.getElementById("question1").value;
let q2=document.getElementById("question2").value;
let q3=document.getElementById("question3").value;
let q4=document.getElementById("question4").value;
let a1=document.getElementById("answer1");
let a2=document.getElementById("answer2");
let a3=document.getElementById("answer3");
let a4=document.getElementById("answer4");
let finalScore=document.getElementById("score");
let grade=0;

if(q1== "Paragraph"){
a1.innerHTML= "Question 1 - Correct";
grade=grade+1;
}
else{
  a1.innerHTML= "Question 1 - Incorrect";
}
if(q2=="."){
a2.innerHTML= "Question 2 - Correct";
grade=grade+1;
}
else{
  a2.innerHTML= "Question 2 - Incorrect";
}
if(q3=="It provides a description of the image for the narrator"){
a3.innerHTML= "Question 3 - Correct";
grade=grade+1;
}
else{
  a3.innerHTML= "Question 3 - Incorrect";
}
if(q4=="h1"){
a4.innerHTML= "Question 4 - Correct";
grade=grade+1;
}
else{
  a4.innerHTML= "Question 4 - Incorrect";
}
finalScore.innerHTML= "Your Score Is: " + grade + "/4";

}

setInterval(changeSlide, 4000);
let img1=document.getElementById("soccerimg");
let img2=document.getElementById("basketballimg");
let img3=document.getElementById("italyimg");
let img4=document.getElementById("marylandimg");

function changeSlide(){
  if(!img1.classList.contains("hidden")){
    img1.classList.add("hidden");
    img2.classList.remove("hidden");
  }
  else if(!img2.classList.contains("hidden")){
    img2.classList.add("hidden");
    img3.classList.remove("hidden");
  }
  else if(!img3.classList.contains("hidden")){
    img3.classList.add("hidden");
    img4.classList.remove("hidden");
  }
  else if(!img4.classList.contains("hidden")){
    img4.classList.add("hidden");
    img1.classList.remove("hidden");
  }
 
}