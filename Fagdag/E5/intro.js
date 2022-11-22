let title = document.querySelector('#name');
let nameanimation = [
    { t: "{ }", ms: 250 },
    { t: "{_}", ms: 250 },
    { t: "{ }", ms: 250 },
    { t: "{_}", ms: 250 },
    { t: "{A_}", ms: 200 },
    { t: "{AR_}", ms: 200 },
    { t: "{ARK_}", ms: 200 },
    { t: "{ARKA_}", ms: 200 },
    { t: "{ARKAD_}", ms: 200 },
    { t: "{ARKADE_}", ms: 200 },
    { t: "{ARKADEN_}", ms: 200 },
    { t: "{ARKADEN }", ms: 200 },
    { t: "{ARKADEN_}", ms: 200 },
    { t: "{ARKADEN_}", ms: 300 },
    { t: "{ARKADEN}", ms: 300 },
    { t: "{ARKADEN}", ms: 300 }
];
let stepD = 1;
/*if (window.localStorage.stepD)
    stepD = window.localStorage.stepD;*/
let x = 0;

let updateName = () => {
    let step = nameanimation[x];
    title.innerText = step.t;
    x++;

    if (x < nameanimation.length)
        setTimeout(updateName, step.ms / stepD);
    else {
        title.classList.add('top');
        setTimeout(() => {
            document.getElementById('main-page').style.opacity = 1;
        }, 500);
        window.localStorage.stepD = 2;
    }
}
updateName();


