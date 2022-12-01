const svar = ["It is certain.", "It is decidedly so.", "Without a doubt", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]
let svarNum = Math.floor(Math.random() * 20);
let inputEl = document.getElementById("input")
let svarEl = document.getElementById("svarId")


inputEl.addEventListener("keydown", lagrefunk);

function lagrefunk(event) {
    if (event.keyCode === 13 && inputEl.value !== null) {
        console.log(svar[svarNum])
        svarEl.innerHTML = "" + svar[svarNum]
    }
    svarNum = Math.floor(Math.random() * 20)
}