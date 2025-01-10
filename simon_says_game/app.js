let gameSeq = [];
let userSeq = [];
let btn = ["red", "yellow", "green", "purpule"];
let started = false; //not started so it give false(not)
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
   if (started == false) {
       console.log("Game is started!");
       started = true;
       levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function redFlash(body) {
  body.classList.add("redcolor");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function levelUp() {
  userSeq=[];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btn[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randbtn);
  // console.log(randColor);
  gameSeq.push(randColor);
  console.log(gameSeq)
  btnFlash(randbtn);
}

function btnPress(){
    console.log("btn was pressed");
    let userbtn=this;
    btnFlash(userbtn);
    userColor= userbtn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(userbtn of allBtn){
    userbtn.addEventListener("click",btnPress);

}

function checkAns(idx){
  
    if (userSeq[idx] == gameSeq[idx]){
      // console.log("same value!");
      if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,1000);
      }
    }
    else{
      h2.innerHTML = `Game Over! Your Score Was <b> ${level} <b> Pressed any key to start `;
      let score=[];
      score.push(`${level}`);
      for(let i=0;i<=score.length;i++){
      if( score[i] <=`${level}`){
      h2.innerHTML = `Game Over! Your Score Was <b> ${level} <b>  High score ${level} Pressed any key to start `;

      }
      else{
      h2.innerHTML = `Game Over! Your Score Was <b> ${level} <b> High score is ${score[i]} Pressed any key to start `;
      }
    }
      // document. querySelector("body").style.backgroundColor="red";
      // setTimeout (function(){
      //   document.querySelector("body").style.backgroundcolor="white";
      // },10);
      setTimeout(redflash, 1000);

      reset();
    }

}

function redflash(){
  document.querySelector("body").style.backgroundColor="red";
}

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  document.querySelector("body").style.backgroundcolor="white";
}