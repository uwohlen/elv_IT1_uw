let title = document.querySelector('#name');
let nameanimation = [
    { t: "{ }", ms: 250 },
    { t: "{_}", ms: 250 },
    { t: "{ }", ms: 250 },
    { t: "{_}", ms: 250 },
    { t: "{C_}", ms: 200 },
    { t: "{CO_}", ms: 200 },
    { t: "{COL_}", ms: 200 },
    { t: "{COLD_}", ms: 200 },
    { t: "{COLD }", ms: 200 },
    { t: "{COLD_}", ms: 200 },
    { t: "{COLD }", ms: 200 },
    { t: "{COLD}", ms: 300 },
    { t: "{COLD}", ms: 300 }
];
let stepD = 1;
if (window.localStorage.stepD)
    stepD = window.localStorage.stepD;
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