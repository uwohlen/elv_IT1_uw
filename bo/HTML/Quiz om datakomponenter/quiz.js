let poeng = 0;
let laast = [];
let navn = window.localStorage.getItem("navn");
navn = toTitleCase(navn);

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

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

function checkIfDone() {
  if (laast.length == 4) {
    document.getElementById("modal").className =
      "h-screen w-screen z-20 fixed inset-x-0 mx-auto my-auto flex justify-center items-center transition ease-in-out delay-150";
    let modalTekst = document.getElementById("modalTekst");
    document.getElementById("blurSkjerm").className =
      "bg-slate-700 h-screen blur";
    document.getElementById("modalBoks").style.width = "33%";
    document.getElementById("modalBoks").style.height = "33%";
    switch (poeng) {
      case 0:
        modalTekst.innerText = `Jobb mer med dette, ${navn}. Du fikk null poeng.`;
        break;
      case 1:
        modalTekst.innerText = `Jobb mer med dette, ${navn}. Du fikk ètt poeng.`;
        break;
      case 2:
        modalTekst.innerText = `Litt til, så er du der, ${navn}! Du fikk to poeng.`;
        break;
      case 3:
        modalTekst.innerText = `Bra jobbet, ${navn}! Du fikk tre poeng.`;
        break;
      case 4:
        modalTekst.innerText = `Bra jobbet, ${navn}! Du fikk fire poeng!`;
      default:
        break;
    }
  }
}
