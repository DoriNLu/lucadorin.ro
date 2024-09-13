

const formElSubstraction     = document.getElementById("containerScad");
const tipRaspunsScad         = document.getElementById("tipRaspunsScad");
const scoreElSubstraction    = document.getElementById("scorScad");
const questionElSubstraction = document.getElementById("intrebareaScad");
const inputElSubstraction    = document.getElementById("intrareScad");
const bttnSubstraction       = document.getElementById("butonScad");
const appGen                 = document.getElementById("appGen");
const sterge                 = document.getElementById("sterge");
let num1Substraction         = getDivizor1(1,51);
let num2Substraction         = getDivizor1(0,num1Substraction);
let scoreSubstraction = JSON.parse(localStorage.getItem("scoreSubstraction"));

if (!scoreSubstraction){
    scoreSubstraction = 0;
  }
  scoreElSubstraction.innerText =`scor: ${scoreSubstraction} `;
  questionElSubstraction.innerHTML = `Cat este ${num1Substraction} minus ${num2Substraction}?`;

  inputElSubstraction.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        if(inputIsValidSubstraction(inputElSubstraction.value)){
        let userAnsSubstraction = inputElSubstraction.value;
         if(userAnsSubstraction == (num1Substraction - num2Substraction)){
            scoreSubstraction++;
            updateLocalStorageSubstraction();
            scoreElSubstraction.innerHTML = `scor: ${scoreSubstraction} puncte`;
            inputElSubstraction.value = ``;
            num1Substraction = getDivizor1(1,51);
            num2Substraction = getDivizor1(0,num1Substraction);
            questionElSubstraction.innerText = `Cat este ${num1Substraction} minus ${num2Substraction}?`;
            tipRaspunsScad.innerHTML = `Raspuns Corect +1 punct`;
             tipRaspunsScad.classList.add('raspunsCorect');
             setTimeout(() => tipRaspunsScad.classList.remove('raspunsCorect'), 2000);
      
    
          }else{
            scoreSubstraction--;
            updateLocalStorageSubstraction();
            scoreElSubstraction.innerHTML = `scor: ${scoreSubstraction}  puncte`;
            inputElSubstraction.value = ``;
            num1Substraction = getDivizor1(1,51);
            num2Substraction = getDivizor1(0,num1Substraction);
            questionElSubstraction.innerText = `Cat este ${num1Substraction}; minus ${num2Substraction}?`;
            tipRaspunsScad.innerHTML = `Raspuns Gresit -1 punct`;
            tipRaspunsScad.classList.add('raspunsGresit');
            setTimeout(() => tipRaspunsScad.classList.remove('raspunsGresit'), 2000);
  }
          }else{
              inputElSubstraction.value = ``;
            scoreElSubstraction.innerHTML = `introduceti un raspuns`;
}
}});

  bttnSubstraction.addEventListener("click", ()=>{
    if(inputIsValidSubstraction(inputElSubstraction.value)){
        let userAnsSubstraction = inputElSubstraction.value;
         if(userAnsSubstraction == (num1Substraction - num2Substraction)){
           scoreSubstraction++;
           updateLocalStorageSubstraction();
           scoreElSubstraction.innerHTML = `scor: ${scoreSubstraction} puncte`;
           inputElSubstraction.value = ``;
           num1Substraction = getDivizor1(1,51);
           num2Substraction = getDivizor1(0,num1Substraction );
           questionElSubstraction.innerText = `Cat este ${num1Substraction}; minus ${num2Substraction}?`;
           tipRaspunsScad.innerHTML = `Raspuns Corect +1 punct`;
             tipRaspunsScad.classList.add('raspunsCorect');
             setTimeout(() => tipRaspunsScad.classList.remove('raspunsCorect'), 2000);
    
          }else{
           scoreSubstraction--;
           updateLocalStorageSubstraction();
           scoreElSubstraction.innerHTML = `scor: ${scoreSubstraction}  puncte`;
           inputElSubstraction.value = ``;
           num1Substraction = getDivizor1(1,51);
           num2Substraction = getDivizor1(0,num1Substraction);
           questionElSubstraction.innerText = `Cat este ${num1Substraction}; minus ${num2Substraction}?`;
           tipRaspunsScad.innerHTML = `Raspuns Gresit -1 punct`;
            tipRaspunsScad.classList.add('raspunsGresit');
            setTimeout(() => tipRaspunsScad.classList.remove('raspunsGresit'), 2000);
  }
          }else{

             inputElSubstraction.value = ``;
            scoreElSubstraction.innerHTML = `introduceti un raspuns `;
}
});
sterge.addEventListener("click", ()=>{let a = inputElSubstraction.value.slice(0, -1);inputElSubstraction.value = a});

function updateLocalStorageSubstraction(){
    localStorage.setItem("scoreSubstraction", JSON.stringify(scoreSubstraction));
}


function inputIsValidSubstraction(check){
         if(check.trim() === "" || isNaN(check)){
        return false;

        }else{  return true;
        }
}

function nAppend(param){
  inputElSubstraction.value += param;
}

function getDivizor1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function forMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
