const EMOJIER = {
    "dyr": ["&#128054;", "&#128049;", [0, 3, 0]],
    "hatt": ["&#127913;", "&#128082;", [0, 0, 1]]
};
const DIV_BILDE = document.getElementById("bilde");

function generer_bilde() {
    DIV_BILDE.innerHTML = "";
    const SVAR = JSON.parse(localStorage.getItem("minNettsideBilde"));
    if (SVAR === null) {
        return false;
    }
    DIV_BILDE.style.display = "block";

    let keys = Object.keys(SVAR);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let emoji_data = EMOJIER[key];
        let emoji = emoji_data[SVAR[key]];
        let xyz = emoji_data[emoji_data.length - 1];
        let left = xyz[0];
        let top = xyz[1];
        let z = xyz[2];
        DIV_BILDE.innerHTML += "<span style='top:" + top + "rem; left:" + left + "rem; z-index:" + z + ";'>" + emoji + "</span>";
    }
    return true;
}
