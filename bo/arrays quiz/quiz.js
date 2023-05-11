window.onload = function () {
  initQuiz();
};

var quiz = [
  {
    sporsmaal: "Hva er et annet ord for totallsystemet?",
    alternativer: [
      "Det binære tallsystemet",
      "Det sekundære tallsystemet",
      "Det sekulære tallsystemet",
      "Datatallsystemet",
    ],
    fasit: 1,
    image: "../media/binary.png",
  },
  {
    sporsmaal: "Hvor mange bits er i en byte?",
    alternativer: ["4", "8", "16", "64"],
    fasit: 2,
    image: "../media/harddrive.jpeg",
  },
  {
    sporsmaal: "Hva er et annet ord for sekstentallsystemet?",
    alternativer: ["Dex", "Tex", "Hex", "Mex"],
    fasit: 3,
    image: "../media/hex.webp",
  },
  {
    sporsmaal: "Hvilken del av datamaskinen utfører beregninger?",
    alternativer: ["Prosessoren", "RAM", "Grafikkkortet", "Harddisken"],
    fasit: 1,
    image: "../media/kalkulator.jpeg",
  },
];

function initQuiz() {
  for (let spm in quiz) {
    let index = spm;
    spm = quiz[index];
    console.log(spm);
    var elem = document.createElement("div");
    elem.innerHTML = `<div>
       <h2 class="text-2xl text-white font-bold text-center pt-3">
         ${spm.sporsmaal}
       </h2>

       <div class="flex flex-row justify-center">
         <img
           src=${spm.image}
           class="h-[300px] rounded-3xl object-cover w-[450px]"
           alt="CPU"
         />
         <div class="flex flex-row w-[450px] justify-between ml-11">
           <div class="flex flex-col h-[300px] w-[215px] justify-between">
             <button
               onclick="knappKlikket(${index},1,${spm.fasit})"
               class="bg-white h-[140px] rounded-3xl"
               id="${index}Alt1"
             >
             ${spm.alternativer[0]}
             </button>
             <button
               onclick="knappKlikket(${index},2,${spm.fasit})"
               class="bg-white h-[140px] rounded-3xl"
               id="${index}Alt2"
             >${spm.alternativer[1]}</button>
           </div>
           <div class="flex flex-col h-[300px] w-[215px] justify-between">
             <button
               onclick="knappKlikket(${index},3,${spm.fasit})"
               class="bg-white h-[140px] w-full rounded-3xl"
               id="${index}Alt3"
             >${spm.alternativer[2]}</button>
             <button
               onclick="knappKlikket(${index},4,${spm.fasit})"
               class="bg-white h-[140px] rounded-3xl"
               id="${index}Alt4"
             >${spm.alternativer[3]}</button>
           </div>
         </div>
       </div>
     </div>`;

    document.getElementById("quiz").appendChild(elem);
  }
}

let poeng = 0;
let laast = [];
let navn = window.localStorage.getItem("navn");

function knappKlikketRiktig(spm, Alt) {
  if (laast.includes(spm)) return;
  let Alt1 = document.getElementById(spm + "Alt" + Alt);
  Alt1.className = "h-[140px] rounded-3xl bg-green-200";
  Alt1.innerText = "Riktig!";
  poeng += 1;
  laast.push(spm);
  checkIfDone();
}

function knappKlikketFeil(spm, Alt) {
  if (laast.includes(spm)) return;
  document.getElementById("Alt" + Alt);
  let selected = document.getElementById(spm + "Alt" + Alt);
  selected.className = "h-[140px] rounded-3xl bg-red-200";
  selected.innerText = "Feil";
  laast.push(spm);
  checkIfDone();
}

function knappKlikket(spm, Alt, fasit) {
  console.log(Alt);
  console.log(fasit);
  if (Alt == fasit) {
    knappKlikketRiktig(spm, Alt);
  } else {
    knappKlikketFeil(spm, Alt);
  }
}


function checkIfDone() {
  if (laast.length == quiz.length) {
    document.getElementById("result").innerText=`Du fikk ${poeng} poeng.`
    document.getElementById("result").className+="flex"
  }
}
