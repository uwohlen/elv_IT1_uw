let ShowAndHideWork = () => {
  var x = document.getElementById('projects-popup');
  if(x.style.display == 'none') {
    x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}

let ShowAndHideMe = () => {
  var a = document.getElementById('aboutMe-popup');
  if(a.style.display == 'none') {
    a.style.display = 'block';
  } else {
      a.style.display = 'none';
  }
}