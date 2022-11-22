const COL_WIDTH = 160;
const SLOT_SIZE = 150;
const COL_AMOUNT = 5;

// Create a new pixijs application that fills the screen
const app = new PIXI.Application({
  height: window.innerHeight,
  backgroundColor: "#1099bb",
  resolution: window.devicePixelRatio || 1,
});

// Add the canvas to the HTML document
document.body.appendChild(app.view);

// Load the texture we need
PIXI.Assets.load([
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png",
])
  .then(() => main())
  .catch((err) => console.error("❌ Error loading assets: " + err));

// The main game loop function that's called ones the assets are loaded
function main() {
  console.debug("✅ Assets loaded successfully");

  const slots = [
    PIXI.Texture.from("assets/1.png"),
    PIXI.Texture.from("assets/2.png"),
    PIXI.Texture.from("assets/3.png"),
    PIXI.Texture.from("assets/4.png"),
  ];

  const columns = [];
  const textureColumns = [];
  const columnsContainer = new PIXI.Container();

  // Create the columns
  for (let i = 0; i < COL_AMOUNT; i++) {
    const colContainer = new PIXI.Container();
    colContainer.x = i * COL_WIDTH;
    columnsContainer.addChild(colContainer);

    const column = {
      container: colContainer,
      slots: [],
      position: 0,
      previousPosition: 0,
      blur: new PIXI.filters.BlurFilter(),
    };

    column.blur.blurX = 0;
    column.blur.blurY = 0;

    colContainer.filters = [column.blur];

    for (let j = 0; j < 4; j++) {
      const slot = new PIXI.Sprite(
        slots[Math.floor(Math.random() * slots.length)]
      );

      slot.y = j * SLOT_SIZE;
      slot.scale.x = slot.scale.y = Math.min(
        SLOT_SIZE / slot.width,
        SLOT_SIZE / slot.height
      );

      slot.x = Math.round((SLOT_SIZE - slot.width) / 2);

      column.slots.push(slot);
      colContainer.addChild(slot);
    }

    columns.push(column);

    // Create the list of textures in the right order
    let temp = [];

    column.slots.forEach((slot) => {
      temp.push(slot.texture.textureCacheIds[0]);
    });

    textureColumns.push(temp);
  }

  app.stage.addChild(columnsContainer);

  const margin = (app.screen.height - SLOT_SIZE * 3) / 2;

  columnsContainer.y = margin;
  columnsContainer.x = Math.round(app.screen.width - COL_WIDTH * COL_AMOUNT);

  const top = new PIXI.Graphics();
  top.beginFill(0, 1);
  top.drawRect(0, 0, app.screen.width, margin);

  const bottom = new PIXI.Graphics();
  bottom.beginFill(0, 1);
  bottom.drawRect(0, SLOT_SIZE * 3 + margin, app.screen.width, margin);

  const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 56,
    fontWeight: "bold",
    fill: ["#D83400"],
  });

  const text = new PIXI.Text("Klikk for å spille ", style);
  text.x = Math.round((bottom.width - text.width) / 2);

  top.addChild(text);

  app.stage.addChild(top);
  app.stage.addChild(bottom);

  top.interactive = true;
  top.cursor = "pointer";
  top.on("pointerdown", () => {
    startPlay();
  });

  let isPlaying = false;
  function startPlay() {
    if (isPlaying) return;
    else isPlaying = true;

    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      
      let random = Math.random()
      const extra = Math.floor(random * slots.length);
      const target = c.position + 10 + i * COL_AMOUNT + extra;
      const time = 2500 + i * 600;
console.log(random*slots.length, extra)

      console.log(
        "🎰 Column " +
          i +
          " will stop at position " +
          target +
          " in " +
          time +
          "ms"
      );

      tweenTo(
        c,
        "position",
        target,
        time,
        backout(0.5),
        null,
        i === columns.length - 1 ? complete : null
      );
    }
  }

  function complete(t) {
    console.debug("✅ Game completed ", t);
    window.setTimeout(() => {
        // navigate to ../e8/index.html
        window.location.href = "../E8/index.html";
    isPlaying = false;

  }, 1000);
    isPlaying = false;
  }
  let thing = [];
  app.ticker.add((delta) => {
    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];
      c.blur.blurY = (c.position - c.previousPosition) * 8;
      c.previousPosition = c.position;
      for (let j = 0; j < c.slots.length; j++) {
        const s = c.slots[j];
        const prevy = s.y;
        s.y = ((c.position + j) % c.slots.length) * SLOT_SIZE - SLOT_SIZE;

        if (s.y < 0 && prevy > SLOT_SIZE) {
          s.texture = slots[Math.floor(Math.random() * slots.length)];
          s.scale.x = s.scale.y = Math.min(
            SLOT_SIZE / s.texture.width,
            SLOT_SIZE / s.texture.height
          );
          s.x = Math.round((SLOT_SIZE - s.width) / 2);
        }
      }
    }
  });
}

// Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
const tweening = [];
function tweenTo(object, property, target, time, easing, onchange, oncomplete) {
  const tween = {
    object,
    property,
    propertyBeginValue: object[property],
    target,
    easing,
    time,
    change: onchange,
    complete: oncomplete,
    start: Date.now(),
  };

  tweening.push(tween);
  return tween;
}
// Listen for animate update.
app.ticker.add((delta) => {
  const now = Date.now();
  const remove = [];
  for (let i = 0; i < tweening.length; i++) {
    const t = tweening[i];
    const phase = Math.min(1, (now - t.start) / t.time);

    t.object[t.property] = lerp(
      t.propertyBeginValue,
      t.target,
      t.easing(phase)
    );
    if (t.change) t.change(t);
    if (phase === 1) {
      t.object[t.property] = t.target;

      if (t.complete) {
        t.complete(t);
      }
      remove.push(t);
    }
  }
  for (let i = 0; i < remove.length; i++) {
    tweening.splice(tweening.indexOf(remove[i]), 1);
  }
});

// Basic lerp funtion.
function lerp(a1, a2, t) {
  return a1 * (1 - t) + a2 * t;
}

// Backout function from tweenjs.
// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
function backout(amount) {
  return (t) => --t * t * ((amount + 1) * t + amount) + 1;
}
