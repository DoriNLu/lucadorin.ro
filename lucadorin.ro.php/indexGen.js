const formEl      = document.getElementById("containerMulty");
const scoreEl     = document.getElementById("scorMulty");
const questionEl  = document.getElementById("intrebareaMulty");
const inputEl     = document.getElementById("intrareMulty");
const bttn        = document.getElementById("butonMulty");
const tipRaspuns  = document.getElementById("tipRaspunsMultiply");
const sterge      = document.getElementById("sterge");
let score         = localStorage.getItem("score");
let numInmultire1 = Math.ceil(Math.random()*10);
let numInmultire2 = Math.ceil(Math.random()*10);

questionEl.innerHTML = `Cat este ${numInmultire1} inmultit cu ${numInmultire2} ?`;

if (!score){
    score = 0;
}
scoreEl.innerText =`scor: ${score} puncte`;
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if(inputIsValidMath(inputEl.value)){
            var userAnsMath = inputEl.value;
            if(userAnsMath == (numInmultire1 * numInmultire2)){
            score++;
            localStorage.setItem("score", score);
            scoreEl.innerHTML = `scor: ${score}  puncte`;
            inputEl.value = ``;
            numInmultire1 = Math.ceil(Math.random()*10);
            numInmultire2 = Math.ceil(Math.random()*10);
            questionEl.innerText = `Cat este ${numInmultire1} inmultit cu ${numInmultire2}?`;
            tipRaspuns.innerHTML = `Raspuns Corect +1punct`;
            tipRaspuns.classList.add('raspunsCorect');
            setTimeout(() => tipRaspuns.classList.remove('raspunsCorect'), 2000);
            }else{
            score--;
            localStorage.setItem("score", score);
            scoreEl.innerHTML =`scor: ${score}  puncte`;
            inputEl.value = ``;
            numInmultire1 = Math.ceil(Math.random()*10);
            numInmultire2 = Math.ceil(Math.random()*10);
            questionEl.innerText = `Cat este ${numInmultire1} inmultit cu ${numInmultire2}?`;
            tipRaspuns.innerHTML = `Raspuns Gresit -1punct`;
            tipRaspuns.classList.add('raspunsGresit');
            setTimeout(() => tipRaspuns.classList.remove('raspunsGresit'), 2000);
        }
            }else{
                inputEl.value = ``;
                scoreEl.innerHTML = `introduceti un raspuns`;
}}});

bttn.addEventListener("click", ()=>{
    if(inputIsValidMath(inputEl.value)){
    var userAnsMath = inputEl.value;
        if(userAnsMath == (numInmultire1 * numInmultire2)){
        score++;
        localStorage.setItem("score", score);
        scoreEl.innerHTML = `scor: ${score}  puncte`;
        inputEl.value = ``;
        numInmultire1 = Math.ceil(Math.random()*10);
        numInmultire2 = Math.ceil(Math.random()*10);
        questionEl.innerText = `Cat este ${numInmultire1} inmultit cu ${numInmultire2}?`;
        tipRaspuns.innerHTML = `Raspuns Corect +1 punct`;
        tipRaspuns.classList.add('raspunsCorect');
        setTimeout(() => tipRaspuns.classList.remove('raspunsCorect'), 2000);
        }else{
        score--;
        localStorage.setItem("score", score);
        scoreEl.innerHTML =`scor: ${score} puncte`;
        inputEl.value = ``;
        numInmultire1 = Math.ceil(Math.random()*10);
        numInmultire2 = Math.ceil(Math.random()*10);
        questionEl.innerText = `Cat este ${numInmultire1} inmultit cu ${numInmultire2}?`;
        tipRaspuns.innerHTML = `Raspuns Gresit -1 punct`;
        tipRaspuns.classList.add('raspunsGresit');
        setTimeout(() => tipRaspuns.classList.remove('raspunsGresit'), 2000);
    }
        }else{
            inputEl.value = ``;
            scoreEl.innerHTML = `introduceti un raspuns`;
}
});

sterge.addEventListener("click", ()=>{let a = inputEl.value.slice(0, -1);inputEl.value = a});


function inputIsValidMath(verifica){
    if(verifica.trim() === "" || isNaN(verifica) ){
        return false;
    }
        return true;
}


function forMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function nAppend(param){
    inputEl.value += param;
  }

