

setTimeout(() => {
   anime({
    targets: "#blink",
    translateY: window.innerHeight-50,
    easing: "linear",
    direction: "alternate",
    loop: true

  })
}, 400);


function pil_S(params) {
  const blink = document.getElementById("blink")
  const pil = document.getElementById("pil");
  let pil_cor = pil.getBoundingClientRect();
  let blink_cor = blink.getBoundingClientRect();
console.log(pil_cor.x, blink_cor.x)
  anime({
    targets: "#pil",
    translateX: blink.x - pil_cor.x,
    easing: "linear",
    direction: "alternate",
    loop: true,
    duration: 1500

  })
  setTimeout(() => {
    console.log(pil_cor.y, blink_cor.y)
    if(pil_cor.x <= 50){
      console.log("eyey")
      if (blink_cor.y > pil_cor.y - 200){
        console.log("hello")
      }
    }
    else{
      console.log
    }
  }, 1500 );
  console.log("ey")  
}

