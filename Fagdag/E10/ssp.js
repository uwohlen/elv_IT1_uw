let mynter = 2;
let mynter_veddet = 0;
let liv = 1;
let motstander_text = document.getElementById("motstander_text");
let etterRunde = document.getElementById("etterRunde");
let eR = document.getElementById("eR");
let Blur = document.getElementById("blur");
let mV = document.getElementById("mynterV");
let vedd_mynter = document.getElementById("vedd_mynter");
let mynter_her = document.getElementById("mynter_her");
let liv_display = document.getElementById("liv_display");
let poeng = document.getElementById("poeng")
let poeng_nr = 0
let gameOver = document.getElementById("gameOver")

let playerName = window.localStorage.getItem("navnIT1fagdag")
let total_poeng = window.localStorage.getItem("poengIT1fagdag")

mynter_her.innerHTML = "Mynter: " + mynter;
liv_display.innerHTML = "Liv: " + liv;

if (liv >= 0) {
  function valg(knapp) {
    let motstander = Math.floor(Math.random() * 3) + 1;

    if (knapp == 1 && motstander == 2) {
      setTimeout(() => {
        mynter += mynter_veddet;
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent";
        eR.innerHTML = "Gratulerer! du vant";
        Blur.className =
          "h-screen flex justify-evenly items-end w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du vant " + mynter_veddet + " mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;;
      }, 500);
      mynter_her.innerHTML = "Mynter:" + mynter;
    }

    if (knapp == 1 && motstander == 3) {
      setTimeout(() => {
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent";
        mynter -= mynter_veddet;
        eR.innerHTML = "Du Tapte";
        Blur.className =
          "h-screen flex justify-evenly items-end w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du mistet " + mynter_veddet + " mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;
        console.log(mynter);
      }, 500);
    }

    if (knapp == 2 && motstander == 1) {
      setTimeout(() => {
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent";
        mynter -= mynter_veddet;
        eR.innerHTML = "Du Tapte";
        Blur.className =
          "h-screen flex justify-evenly items-end w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du mistet " + mynter_veddet + " mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;
      }, 500);
    }

    if (knapp == 3 && motstander == 2) {
      setTimeout(() => {
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent";
        mynter -= mynter_veddet;
        eR.innerHTML = "Du Tapte";
        Blur.className =
          "h-screen flex justify-evenly items-end w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du mistet " + mynter_veddet + " mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;
        console.log(mynter);
      }, 500);
    }

    if (knapp == 2 && motstander == 3) {
      setTimeout(() => {
        mynter += mynter_veddet;
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent";
        eR.innerHTML = "Gratulerer! du vant";
        Blur.className =
          "h-screen flex justify-evenly items-center w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du vant " + mynter_veddet+ " mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;
      }, 500);
    }

    if (knapp == 3 && motstander == 1) {
      setTimeout(() => {
        mynter += mynter_veddet;
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent";
        eR.innerHTML = "Gratulerer! du vant";
        Blur.className =
          "h-screen flex justify-evenly items-end w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du vant " + mynter_veddet + " mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;
      }, 500);
    }

    if (motstander == knapp) {
      setTimeout(() => {
        etterRunde.className =
          " h-screen w-screen flex justify-center items-center absolute pb-10 bg-transparent rounded-lg";
        eR.innerHTML = "Her ble det likt";
        Blur.className = "h-screen flex justify-evenly items-end w-screen pb-32 absolute blur-md";
        mV.innerHTML = "Du mistet ingen mynter";
        mynter_her.innerHTML = "Mynter:" + mynter;
      }, 500);
    }
  }

  function Mynter(mem) {
    if (mem == 0) {
      if (mynter > mynter_veddet) {
        mynter_veddet += 1;
      }
    }
    if (mem == 1) {
      if (mynter_veddet > 0) {
        mynter_veddet -= 1;
      }
    }
    console.log(mynter_veddet);
    vedd_mynter.innerHTML = "mynter veddet: " + mynter_veddet;
    console.log("nei");
  }

  function spilleigjen() {
    etterRunde.className = "hidden";
    Blur.className =
      "h-screen flex justify-evenly items-center w-screen pb-32 absolute ";
    if (mynter_veddet > mynter) {
      mynter_veddet = mynter;
    }
    if (mynter == 0) {
      liv -= 1;

  if (liv == 0){
    gameOver.className = "h-screen w-screen absolute bg-[#ED4337] flex justify-center items-center "
    console.log(playerName)
    console.log(total_poeng)
}

      mynter = 2;
      liv_display.innerHTML = "Liv:" + liv;
      mynter_her.innerHTML = "Mynter:" + mynter;
      console.log(mynter);
    }
    if (mynter >= 6) {
        poeng_nr = 1
        if(mynter >= 8){
            poeng_nr = 3
            if (mynter >= 10){
                poeng_nr = 5
            }
        }
      }
    poeng.innerHTML = "Poeng her:" + poeng_nr
  }
}



