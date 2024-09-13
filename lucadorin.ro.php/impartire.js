

const toateMap = new Set([1,2,3,4,5,6,7,8,9,2,4,6,8,10,12,14,16,18,20,3,6,9,12,15,18,21,24,27,30,4,8,12,16,20,24,28,32,36,40,5,10,15,20,25,30,35,40,45,50,6,12,18,24,30,36,42,48,54,
    60,7,14,21,28,35,42,49,56,63,70,8,16,24,32,40,48,56,64,72,80,9,18,27,36,45,54,63,72,81,90,10,20,30,40,50,60,70,80,90,100]);
const myArr = Array.from(toateMap);

const formElDivision      = document.getElementById("containerDivision");
const tipRaspunsDivision   = document.getElementById("tipRaspunsDivision");
const scoreElDivision     = document.getElementById("scorDivision");
const questionElDivision  = document.getElementById("intrebareaDivision");
const inputElDivision     = document.getElementById("intrareDivision");
const bttnDivision        = document.getElementById("butonDivision");
const sterge             = document.getElementById("sterge");
let scDivision            = localStorage.getItem("scDivision");
let deDivizat             = myArr[getDivizor(1, 41)]; 
let divizor               = 1;
if (!scDivision){
scDivision = 0;
}
scoreElDivision.innerHTML = `scor: ${scDivision} puncte`;

 
const totiDri = {aLuHu:[10], aLu90:[9,10], aLu81:[9], aLu80:[8,10], aLu72:[8,9], aLu70:[7,10], aLu64:[8], aLu63:[7,9], aLu60:[6,10], aLu56:[7,8], aLu54:[6,9], aLu50:[5,10], aLu49:[7], aLu48:[6,8],
                 aLu45:[9], aLu42:[6,7], aLu40:[4,5,8,10], aLu36:[4,6,9], aLu35:[5,7], aLu32:[4,8], aLu30:[5,6], aLu28:[4,7], aLu27:[3,9], aLu25:[5], aLu24:[3,4,6,8], aLu21:[3,7], aLu20:[2,4,5,10],
                 aLu18:[2,3,6,9], aLu16:[2,4,8], aLu15:[3,5], aLu14:[2,7], aLu12:[2,3,4,6], aLu10:[2,5], aLu9:[3,9], aLu8:[2,4], aLu7:[7], aLu6:[2,3], aLu5:[5], aLu4:[2], aLu3:[3], aLu2:[2], aLu1:[1]};

inputElDivision.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if(inputIsValidDivizion(inputElDivision.value)) {
            var userAnsDivizion = inputElDivision.value;
            if(userAnsDivizion == (deDivizat / divizor)){
                scDivision++
                localStorage.setItem("scDivision", scDivision);
                scoreElDivision.innerHTML = `scor: ${scDivision}  puncte`;
                inputElDivision.value = ``;
                deDivizat = myArr[getDivizor(1, 41)];
                selectDivizor();
                questionElDivision.innerText = `Cat este ${deDivizat} impartit la ${divizor}?`
                tipRaspunsDivision.innerHTML = `Raspuns Corect +1 punct`
                tipRaspunsDivision.classList.add('raspunsCorect')
                setTimeout(() => tipRaspunsDivision.classList.remove('raspunsCorect'), 2000)
            }else{
                scDivision--
                localStorage.setItem("scDivision", scDivision);
                scoreElDivision.innerHTML = `scor: ${scDivision}  puncte`;
                inputElDivision.value = ``;
                deDivizat = myArr[getDivizor(1, 41)];
                selectDivizor();
                questionElDivision.innerText = `Cat este ${deDivizat} impartit la ${divizor}?`
                tipRaspunsDivision.innerHTML = `Raspuns Gresit -1 punct`
                tipRaspunsDivision.classList.add('raspunsGresit')
                setTimeout(() => tipRaspunsDivision.classList.remove('raspunsGresit'), 2000)
            }}else{
                inputElDivision.value = ``;
                scoreElDivision.innerHTML = `introduceti un raspuns`
}}});

bttnDivision.addEventListener("click", ()=>{
    if(inputIsValidDivizion(inputElDivision.value)) {
        var userAnsDivizion = inputElDivision.value;
        if(userAnsDivizion == (deDivizat / divizor)){
            scDivision++
            localStorage.setItem("scDivision", scDivision);
            scoreElDivision.innerHTML = `scor: ${scDivision}  puncte`;
            inputElDivision.value = ``;
            deDivizat = myArr[getDivizor(1, 41)];
            selectDivizor();
            questionElDivision.innerText = `Cat este ${deDivizat} impartit la ${divizor}?`
            tipRaspunsDivision.innerHTML = `Raspuns Corect +1 punct`
            tipRaspunsDivision.classList.add('raspunsCorect')
            setTimeout(() => tipRaspunsDivision.classList.remove('raspunsCorect'), 2000)
        }else{
            scDivision--
            localStorage.setItem("scDivision", scDivision);
            tipRaspunsDivision.innerHTML = `scor: ${scDivision}  puncte`;
            inputElDivision.value = ``;
            deDivizat = myArr[getDivizor(1, 41)];
            selectDivizor();
            questionElDivision.innerText = `Cat este ${deDivizat} impartit la ${divizor}?`
            tipRaspunsDivision.innerHTML = `Raspuns Gresit -1 punct`
            tipRaspunsDivision.classList.add('raspunsGresit')
            setTimeout(() => tipRaspunsDivision.classList.remove('raspunsGresit'), 2000)
        }}else{
            inputElDivision.value = ``;
            scoreElDivision.innerHTML = `introduceti un raspuns `
}
})

sterge.addEventListener("click", ()=>{let a = inputElDivision.value.slice(0, -1);inputElDivision.value = a})


function inputIsValidDivizion(verifica1){
    if(verifica1.trim() === "" || isNaN(verifica1)){
        return false;
    }
        return true;
}
selectDivizor()
questionElDivision.innerText = `Cat este ${deDivizat} impartit la ${divizor}?`
function selectDivizor() { switch (deDivizat) {
    case 100: divizor = totiDri.aLuHu[getDivizor(0,totiDri.aLuHu.length -1)]; break;
    case 90:  divizor = totiDri.aLu90[getDivizor(0,totiDri.aLu90.length -1)]; break;
    case 81:  divizor = totiDri.aLu81[getDivizor(0,totiDri.aLu81.length -1)]; break;
    case 80:  divizor = totiDri.aLu80[getDivizor(0,totiDri.aLu80.length -1)]; break;
    case 72:  divizor = totiDri.aLu72[getDivizor(0,totiDri.aLu72.length -1)]; break;
    case 70:  divizor = totiDri.aLu70[getDivizor(0,totiDri.aLu70.length -1)]; break;
    case 64:  divizor = totiDri.aLu64[getDivizor(0,totiDri.aLu64.length -1)]; break;
    case 63:  divizor = totiDri.aLu63[getDivizor(0,totiDri.aLu63.length -1)]; break;
    case 60:  divizor = totiDri.aLu60[getDivizor(0,totiDri.aLu60.length -1)]; break;
    case 56:  divizor = totiDri.aLu56[getDivizor(0,totiDri.aLu56.length -1)]; break;
    case 54:  divizor = totiDri.aLu54[getDivizor(0,totiDri.aLu54.length -1)]; break;
    case 50:  divizor = totiDri.aLu50[getDivizor(0,totiDri.aLu50.length -1)]; break;
    case 49:  divizor = totiDri.aLu49[getDivizor(0,totiDri.aLu49.length -1)]; break;
    case 48:  divizor = totiDri.aLu48[getDivizor(0,totiDri.aLu48.length -1)]; break;
    case 45:  divizor = totiDri.aLu45[getDivizor(0,totiDri.aLu45.length -1)]; break;
    case 42:  divizor = totiDri.aLu42[getDivizor(0,totiDri.aLu42.length -1)]; break;
    case 40:  divizor = totiDri.aLu40[getDivizor(0,totiDri.aLu40.length -1)]; break;
    case 36:  divizor = totiDri.aLu36[getDivizor(0,totiDri.aLu36.length -1)]; break;
    case 35:  divizor = totiDri.aLu35[getDivizor(0,totiDri.aLu35.length -1)]; break;
    case 32:  divizor = totiDri.aLu32[getDivizor(0,totiDri.aLu32.length -1)]; break;
    case 30:  divizor = totiDri.aLu30[getDivizor(0,totiDri.aLu30.length -1)]; break;
    case 28:  divizor = totiDri.aLu28[getDivizor(0,totiDri.aLu28.length -1)]; break;
    case 27:  divizor = totiDri.aLu27[getDivizor(0,totiDri.aLu27.length -1)]; break;
    case 25:  divizor = totiDri.aLu25[getDivizor(0,totiDri.aLu25.length -1)]; break;
    case 24:  divizor = totiDri.aLu24[getDivizor(0,totiDri.aLu24.length -1)]; break;
    case 21:  divizor = totiDri.aLu21[getDivizor(0,totiDri.aLu21.length -1)]; break;
    case 20:  divizor = totiDri.aLu20[getDivizor(0,totiDri.aLu20.length -1)]; break;
    case 18:  divizor = totiDri.aLu18[getDivizor(0,totiDri.aLu18.length -1)]; break;
    case 16:  divizor = totiDri.aLu16[getDivizor(0,totiDri.aLu16.length -1)]; break;
    case 15:  divizor = totiDri.aLu15[getDivizor(0,totiDri.aLu15.length -1)]; break;
    case 14:  divizor = totiDri.aLu14[getDivizor(0,totiDri.aLu14.length -1)]; break;
    case 12:  divizor = totiDri.aLu12[getDivizor(0,totiDri.aLu12.length -1)]; break;
    case 10:  divizor = totiDri.aLu10[getDivizor(0,totiDri.aLu10.length -1)]; break;
    case  9:  divizor = totiDri.aLu9[getDivizor(0,totiDri.aLu9.length -1)]; break;
    case  8:  divizor = totiDri.aLu8[getDivizor(0,totiDri.aLu8.length -1)]; break;
    case  7:  divizor = totiDri.aLu7[getDivizor(0,totiDri.aLu7.length -1)]; break;
    case  6:  divizor = totiDri.aLu6[getDivizor(0,totiDri.aLu6.length -1)]; break;
    case  5:  divizor = totiDri.aLu5[getDivizor(0,totiDri.aLu5.length -1)]; break;
    case  4:  divizor = totiDri.aLu4[getDivizor(0,totiDri.aLu4.length -1)]; break;
    case  3:  divizor = totiDri.aLu3[getDivizor(0,totiDri.aLu3.length -1)]; break;
    case  2:  divizor = totiDri.aLu2[getDivizor(0,totiDri.aLu2.length -1)]; break;
    case  1:  divizor = totiDri.aLu1[getDivizor(0,totiDri.aLu1.length -1)]; break;
}}
function getDivizor(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };

  function nAppend(param){
    inputElDivision.value += param;
  }

  function forMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
