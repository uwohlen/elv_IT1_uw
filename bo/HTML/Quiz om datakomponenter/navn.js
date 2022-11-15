function navn() {
  let navn = document.getElementById("navn").value;
  window.localStorage.setItem("navn", navn);
}
