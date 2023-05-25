let liste = [];
liste[0] = 3;
liste[1] = 5;
liste[2] = 4;
liste[3] = 178;
liste[4] = -2;

let randoml = [];

let liste1 = ["ja", "nei", "hvordan", "ja", "ja", "nei"];

function trykk() {
  lengde(liste);
  sjekkAntall(liste1);
  finne_størst_verdi(liste);
  finne_minst_verdi(liste);
  finne_sum(liste);
  finne_sum_etter_index(liste);
  finne_gjennomsnitt(liste);
  index(liste1, "flæ", 2);
  reverse(liste);
  includes(liste1, "ja");
  sort(liste);
  slice(liste1, 2);
  kopier(liste1);
  random(randoml, 8, 1000);
  stokk(liste1);
}

function lengde(param) {
  console.debug("lengden på arrayen er", param.length);
}

function sjekkAntall(param) {
  let AntallAv = document.getElementById("skjekkAntall");
  let antall = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] == AntallAv.value) {
      antall += 1;
    }
  }
  console.debug("antallet av '", AntallAv.value, "' i lista er:", antall);
}

function finne_størst_verdi(param) {
  let størst_verdi = "ingen tall i arrayen";
  for (let i = 0; i < param.length; i++) {
    if (parseInt(param[i]) || typeof param[i] === "number") {
      if (typeof størst_verdi === "string") {
        størst_verdi = parseInt(param[i]);
      }
      if (param[i] > størst_verdi) {
        størst_verdi = parseInt(param[i]);
      }
    }
  }
  console.log("det største tallet i arrayen er", størst_verdi);
  return størst_verdi;
}

function finne_minst_verdi(param) {
  let minst_verdi = "ingen tall i arrayen";
  for (let i = 0; i < param.length; i++) {
    if (parseInt(param[i]) || typeof param[i] === "number") {
      if (typeof minst_verdi === "string") {
        minst_verdi = parseInt(param[i]);
      }
      if (param[i] < minst_verdi) {
        minst_verdi = parseInt(param[i]);
      }
    }
  }
  console.log("det minste tallet i arrayen er", minst_verdi);
}

function finne_sum(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    if (parseInt(param[i]) || typeof param[i] === "number") {
      sum += parseInt(param[i]);
    }
  }
  console.log("summen av alle tallene i arrayen er", sum);
}

function finne_sum_etter_index(param) {
  let innsats = document.getElementById("innsats");
  let sum_etter_innsats = 0;
  for (let i = parseInt(innsats.value); i < param.length; i++) {
    if (parseInt(param[i]) || typeof param[i] === "number") {
      sum_etter_innsats += parseInt(param[i]);
    }
  }
  console.debug(
    "summen av alle tallene i arrayen etter",
    innsats.value,
    "er",
    sum_etter_innsats
  );
}

function finne_gjennomsnitt(param) {
  let teller = 0;
  let nevner = 0;
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    if (parseInt(param[i]) || typeof param[i] === "number") {
      teller += parseInt(param[i]);
      nevner++;
    }
  }
  sum = teller / nevner;
  console.log("gjennomsnittet av alle tallene i arrayen er", sum);
}

function index(param, hva, nr) {
  let nåværende = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] == hva.toString()) {
      nåværende++;
    }
    if (nåværende == nr) {
      console.log(i + 1);
      return;
    }
  }
  nåværende = -1;
  console.debug(nåværende);
}

function reverse(param) {
  let motsatt = [];
  for (let i = 0; i < param.length; i++) {
    motsatt[i] = param[param.length - 1 - i];
  }
  console.debug(motsatt);
}

/**
 *
 * @param {Array} params
 * @param {søkeord} hva
 * @returns {boolean}
 */
function includes(params, hva) {
  for (let i = 0; i < params.length; i++) {
    if ((params[i] = hva)) {
      return true;
    }
  }

  return false;
}

function sort(params) {
  let sorter = [];
  let temp = 0;
  for (let i = 0; i < params.length; i++) {
    if (i == 0);
    sorter.push(params[i]);
    for (let flytte = 0; flytte < i; flytte++) {
      if (params[i] > params[flytte]) {
        temp = params[flytte];
        params[flytte] = params[i];
        params[i] = temp;
      }
    }
  }
  console.debug("arrayen sortert i synkende rekkefølge", params);
}

function slice(params, start) {
  let klone = [];
  for (let i = start; i < params.length; i++) {
    klone.push(params[i]);
  }
  console.debug("arrayen fra", start, klone);
}

function kopier(params) {
  kopi = [];
  for (let i = 0; i < params.length; i++) {
    kopi.push(params[i]);
  }
  console.debug("arrayen kopiert", kopi, params);
}

function random(params, lengde, grense) {
  for (let i = 0; i < lengde; i++) {
    randoml[i] = Math.floor(Math.random() * grense);
  }
  console.debug("tilfeldig tall", randoml);
}

function stokk(params) {
  let sorter = [];
  let temp = 0;
  for (let i = 0; i < params.length; i++) {
    if (i == 0);
    sorter.push(params[i]);
    let a = Math.floor(Math.random() * params.length);
    let b = Math.floor(Math.random() * params.length);
    for (let flytte = 0; flytte < i; flytte++) {
      if (a > b) {
        temp = params[flytte];
        params[flytte] = params[i];
        params[i] = temp;
      }
      if (a < b) {
        temp = params[i];
        params[i] = params[flytte];
        params[flytte] = temp;
      }
    }
  }
  console.debug("tilfeldig stokka", params);
}
