let ShowAndHideB = () => {
  var x = document.getElementById('bouldering-popup');
  if(x.style.display == 'none') {
    x.style.display = 'block', x.style.position = 'absolute', x.style.transform = 'translate(-50%,-50%)', x.style.top = '50%', x.style.left = '50%';
  } else {
      x.style.display = 'none';
  }
}