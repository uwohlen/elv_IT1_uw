const COL_WIDTH = 160;
const SLOT_SIZE = 150;
const COL_AMOUNT = 5;

let score = 0;

// Create a new pixijs application that fills the screen
const app = new PIXI.Application({
  backgroundColor: ["#ffffff"],
  borderRadius: 10,
  resolution: window.devicePixelRatio || 1,
});

// Add the canvas to the HTML document
document.getElementById("game").appendChild(app.view);

window.onload = function () {
    // update levelIT1fagdag
    window.localStorage.setItem("levelIT1fagdag", "E7");

  // Update the name of the player
  let playerName = window.localStorage.getItem("navnIT1fagdag");
  let playerScore = window.localStorage.getItem("poengIT1fagdag");

  if (playerName === "" || playerName === null || playerName === undefined)
  {  playerName = "Spelar";}
  if (playerScore === "" || playerScore === null || playerScore === undefined)
{    playerScore = "0";}

  score = parseInt(playerScore);

  console.debug("🥙 Found player name: " + playerName);
  console.debug("🤳 Found player score: " + playerScore);

  document.getElementById("playerName").innerText = playerName + "!";
  document.getAnimations("score").innerText = playerScore;

  if (score < 5) {
    document.getElementById("playbtn").className += " btn-disabled";
    document.getElementById("tooltip").className = "tooltip w-full";
  }
};

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
  main.start = startPlay;

  console.debug("✅ Assets loaded successfully");

  // Remove the html element with the loading message
  document.getElementById("loader").remove();

  const slots = [
    PIXI.Texture.from("assets/1.png"),
    PIXI.Texture.from("assets/2.png"),
    PIXI.Texture.from("assets/3.png"),
    PIXI.Texture.from("assets/4.png"),
  ];

  const columns = [];
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
  }

  app.stage.addChild(columnsContainer);
  const margin = ((app.screen.height - SLOT_SIZE) / 25) * 0;
  columnsContainer.y = margin - 50;
  columnsContainer.x = Math.round(app.screen.width - COL_WIDTH * 5);
  const top = new PIXI.Graphics();
  top.beginFill(0, 1);
  top.drawRect(0, 0, app.screen.width, margin);
  const bottom = new PIXI.Graphics();
  bottom.beginFill(0, 1);
  bottom.drawRect(0, SLOT_SIZE * 3 + margin, app.screen.width, margin);

  app.stage.addChild(top);
  app.stage.addChild(bottom);

  // Set the interactivity.
  bottom.interactive = true;
  bottom.cursor = "pointer";
  bottom.addListener("pointerdown", () => {
    startPlay();
  });

  let isPlaying = false;
  function startPlay() {
    if (isPlaying) return;
    else isPlaying = true;

    // if the player dosent have enough points, dont let them play
    if (score < 5) {
      alert("Du har ikkje nok poeng til å spela!");
      return;
    }
    // deduct 3 points for each spin
    score -= 5;
    document.getElementById("score").innerText = score;

    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];

      let random = Math.random();
      const extra = Math.floor(random * slots.length);
      const target = c.position + 10 + i * COL_AMOUNT + extra;
      const time = 2500 + i * 600;

      console.debug(
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

    let rows = [[], [], []];

    // for each column
    for (let i = 0; i < columns.length; i++) {
      const c = columns[i];

      let topSlot = c.slots[0];
      let middleSlot = c.slots[0];
      let bottomSlot = c.slots[0];

      for (let j = 0; j < c.slots.length; j++) {
        const s = c.slots[j];
        if (Math.abs(s.y) < Math.abs(topSlot.y)) topSlot = s;

        if (Math.abs(s.y - 150) < Math.abs(middleSlot.y - 150)) middleSlot = s;

        if (Math.abs(s.y - 300) < Math.abs(bottomSlot.y - 300)) bottomSlot = s;
      }
      rows[0].push(assetNameToColorname(topSlot.texture.textureCacheIds[0]));
      rows[1].push(assetNameToColorname(middleSlot.texture.textureCacheIds[0]));
      rows[2].push(assetNameToColorname(bottomSlot.texture.textureCacheIds[0]));
    }

    score += 1;
    // check for 3, 4 or 5 of the same color
    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];

      // 3 of the same color in a row
      if (r[0] === r[1] && r[1] === r[2]) {
        score += 3;
      }

      if (r[0] === r[1] && r[1] === r[2] && r[2] === r[3]) {
        score += 4;
        console.debug("🎰 4 in a row", r);
      }

      if (r[0] === r[1] && r[1] === r[2] && r[2] === r[3] && r[3] === r[4]) {
        score += 5;
        console.debug("🎰 5 in a row", r);
      }
    }

    // check for 3 in a column
    for (let i = 0; i < rows[0].length; i++) {
      const c = [rows[0][i], rows[1][i], rows[2][i]];
      if (c[0] === c[1] && c[1] === c[2]) {
        score += 3;
        console.debug("🥳 3 in a column ", c);
      }
    }

    console.debug("🎰 Score: " + score);

    if (score < 5) {
      document.getElementById("playbtn").className += " btn-disabled";
      document.getElementById("tooltip").className = "tooltip w-full";
    }

    document.getElementById("score").innerText = score;

    // update the local storage
    localStorage.setItem("poengIT1fagdag", score);

    isPlaying = false;
  }
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

function assetNameToColorname(name) {
  switch (name) {
    case "assets/1.png":
      name = "red";
      break;
    case "assets/2.png":
      name = "green";
      break;
    case "assets/3.png":
      name = "blue";

      break;
    case "assets/4.png":
      name = "pink";
      break;

    default:
      break;
  }

  return name;
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
