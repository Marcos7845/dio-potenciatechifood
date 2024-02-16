const state = {

view: {
    square: document.querySelectorAll(".square"),
    enemy: document.querySelector(".enemy"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score")
},
values:{
    timerID: null,
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 30,
    

},
acntions:{
    countDownTimerid: setInterval(countDown,1000)

},

};
function countDown(){
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;
    if(state.values.currentTime<=0){

        clearInterval(state.acntions.countDownTimerid);
        alert("Game Over! A sua pontuação foi: " + state.values.result);

    }
};

function randomSquare(){
    state.view.square.forEach((square)=>{
    square.classList.remove("enemy")})

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.square[randomNumber];
    randomSquare.classList.add("enemy");

    state.values.hitPosition= randomSquare.id;
}
function moveEnemy(){
    state.values.timerID = setInterval(randomSquare,state.values.gameVelocity);
}
function addListenerHitBox(){
    state.view.square.forEach((square)=>{
        square.addEventListener("mousedown",()=>{ 
        if (square.id===state.values.hitPosition){
            state.values.result++;
            state.view.score.textContent = state.values.result;
            state.values.hitPosition = null;
            playSound();
        }

        })
    })
}

function playSound(){
    let audio = new Audio('./src/audios/hit.m4a')
    audio.play();
    audio.volume =0.2;
    
}

function init(){
moveEnemy();
addListenerHitBox();

};

init();