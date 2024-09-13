
const formElAddition     = document.getElementById("containerSum")
const tipRaspunsSum      = document.getElementById("tipRaspunsSum");
const scoreElAddition    = document.getElementById("scorSum");
const questionElAddition = document.getElementById("intrebareaSum")
const inputElAddition    = document.getElementById("intrareSum")
const bttnAddition       = document.getElementById("butonSum");
const sterge             = document.getElementById("sterge");
const appGen             = document.getElementById("appGen");

let num1Addition         = getDivizor(0,51);
let num2Addition         = getDivizor(0,51);
  let scoreAddition      = JSON.parse(localStorage.getItem("scoreAddition"));
  
  if (!scoreAddition){
      scoreAddition = 0;
    }
    scoreElAddition.innerText =`scor: ${scoreAddition} `
    questionElAddition.innerHTML = `Cat este ${num1Addition} plus ${num2Addition}?`
  
  
    inputElAddition.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            if(inputIsValidAddition(inputElAddition.value)){
             let userAnsAddition = inputElAddition.value;
             if(userAnsAddition == (num1Addition + num2Addition)){
             scoreAddition++
             updateLocalStorageAddition();
             scoreElAddition.innerHTML = `scor: ${scoreAddition} puncte`;
             inputElAddition.value = ``;
             num1Addition = getDivizor(0,51);
             num2Addition = getDivizor(0,51);
             questionElAddition.innerText = `Cat este ${num1Addition} plus ${num2Addition}?`
             tipRaspunsSum.innerHTML = `Raspuns Corect +1 punct`
             tipRaspunsSum.classList.add('raspunsCorect')
             setTimeout(() => tipRaspunsSum.classList.remove('raspunsCorect'), 2000)
      
            }else{
             scoreAddition--
             updateLocalStorageAddition();
             scoreElAddition.innerHTML = `scor: ${scoreAddition}  puncte`;
             inputElAddition.value = ``;
             num1Addition = getDivizor(0,51);
             num2Addition = getDivizor(0,51);
             questionElAddition.innerText = `Cat este ${num1Addition} plus ${num2Addition}?`;
             tipRaspunsSum.innerHTML = `Raspuns Gresit -1 punct`;
             tipRaspunsSum.classList.add('raspunsGresit');
             setTimeout(() => tipRaspunsSum.classList.remove('raspunsGresit'), 2000);
             appGen.classList.add('appGen');
             setTimeout(() => appGen.classList.remove('appGen'),2000)
    }
            }else{
                inputElAddition.value = ``;
             scoreElAddition.innerHTML = `introduceti un raspuns`
  }
  }})

  bttnAddition.addEventListener("click", ()=>{
      if(inputIsValidAddition(inputElAddition.value)){
          let userAnsAddition = inputElAddition.value;
          if(userAnsAddition == (num1Addition + num2Addition)){
            scoreAddition++
            updateLocalStorageAddition();
            scoreElAddition.innerHTML = `scor: ${scoreAddition} puncte`;
            inputElAddition.value = ``;
            num1Addition = getDivizor(0,51);
            num2Addition = getDivizor(0,51);
            questionElAddition.innerText = `Cat este ${num1Addition} plus ${num2Addition}?`
            tipRaspunsSum.innerHTML = `Raspuns Corect +1 punct`
             tipRaspunsSum.classList.add('raspunsCorect')
             setTimeout(() => tipRaspunsSum.classList.remove('raspunsCorect'), 2000)
      
        }else{
            scoreAddition--
            updateLocalStorageAddition();
            scoreElAddition.innerHTML = `scor: ${scoreAddition}  puncte`;
            inputElAddition.value = ``;
            num1Addition = getDivizor(0,51);
            num2Addition = getDivizor(0,51);
            questionElAddition.innerText = `Cat este ${num1Addition} plus ${num2Addition}?`
            tipRaspunsSum.innerHTML = `Raspuns Gresit -1 punct`
            tipRaspunsSum.classList.add('raspunsGresit')
            setTimeout(() => tipRaspunsSum.classList.remove('raspunsGresit'), 2000)
    }
        }else{
            inputElAddition.value = ``;
             scoreElAddition.innerHTML = `introduceti un raspuns`
  }  

  })

  sterge.addEventListener("click", ()=>{let a = inputElAddition.value.slice(0, -1);inputElAddition.value = a})

  function updateLocalStorageAddition(){
      localStorage.setItem("scoreAddition", JSON.stringify(scoreAddition))
  }
  
function inputIsValidAddition(check){
    if(check.trim() === "" || isNaN(check)){
        return false;
    }
        return true;
}


function nAppend(param){

  inputElAddition.value += param;
}

function getDivizor(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

  
function forMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

 
