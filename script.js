/* =========================================================
   PRAGNA'S ROYAL KINGDOM
   PAGE CONTROLLER
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const scenes = [
  document.getElementById("scene1"),
  document.getElementById("scene2"),
  document.getElementById("scene3"),
document.getElementById("scene4"),
document.getElementById("scene5"),
document.getElementById("scene6"),
document.getElementById("scene7"),
document.getElementById("scene8")
];

const enterBtn = document.getElementById("enterBtn");
const continueBtn = document.getElementById("continueBtn");
const progress = document.getElementById("progress");
const particles = document.getElementById("particles");


/* =========================================================
   PAGE 3 PAPER
========================================================= */

const page3Paper =
  document.querySelector("#scene3 .content");


/* =========================================================
   CREATE ROYAL SYMBOLS ON FOLDED PAPER
   HTML DOES NOT NEED TO BE CHANGED
========================================================= */

const foldDecoration =
  document.createElement("div");

foldDecoration.className =
  "fold-decoration";


foldDecoration.innerHTML = `
  <span class="fold-star">✦</span>
  <span class="fold-crown">♕</span>
  <span class="fold-star">✦</span>
`;


page3Paper.appendChild(foldDecoration);


/* =========================================================
   CURRENT PAGE
========================================================= */

let currentScene = 0;


/* =========================================================
   SHOW PAGE
========================================================= */

function showScene(index) {

  if (index < 0 || index >= scenes.length) {
    return;
  }


  scenes.forEach((scene, i) => {

    scene.classList.toggle(
      "active",
      i === index
    );

  });


  currentScene = index;

  updateProgress();


  /* -------------------------------------------------------
     PAGE 3 ALWAYS STARTS FOLDED
  ------------------------------------------------------- */

  if (index === 2) {

    page3Paper.classList.add("folded");

  }

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

  const number =
    String(currentScene + 1).padStart(2, "0");

  progress.textContent =
    number + " / 08";
}


/* =========================================================
   PAGE 1 → PAGE 2
========================================================= */

enterBtn.addEventListener("click", () => {

  showScene(1);

});


/* =========================================================
   PAGE 2 → PAGE 3
========================================================= */

continueBtn.addEventListener("click", () => {

  showScene(2);

});


/* =========================================================
   PAGE 3
   TOUCH PAPER = FOLD / UNFOLD
========================================================= */

page3Paper.addEventListener("click", () => {

  if (!scenes[2].classList.contains("active")) {
    return;
  }


  page3Paper.classList.toggle("folded");

});


/* =========================================================
   GOLD PARTICLES
========================================================= */

function createParticles() {

  const total = 30;

  for (let i = 0; i < total; i++) {

    const particle =
      document.createElement("span");

    particle.className =
      "particle";


    particle.style.left =
      Math.random() * 100 + "%";


    particle.style.top =
      (70 + Math.random() * 35) + "%";


    particle.style.animationDuration =
      (6 + Math.random() * 8) + "s";


    particle.style.animationDelay =
      (Math.random() * 8) + "s";


    const size =
      2 + Math.random() * 2;


    particle.style.width =
      size + "px";

    particle.style.height =
      size + "px";


    particles.appendChild(particle);

  }

}


/* =========================================================
   START
========================================================= */

createParticles();

showScene(0);
/* =========================================================
   PAGE 3 → PAGE 4
   NEXT BUTTON ONLY
========================================================= */

const page3NextBtn =
  document.getElementById("page3NextBtn");

page3NextBtn.addEventListener("click", (event) => {

  event.stopPropagation();

  showScene(3);

});
const page4NextBtn =
  document.getElementById("page4NextBtn");

page4NextBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  showScene(4);
});
/* =========================================================
   PAGE 5 - ENVELOPE INTERACTION
========================================================= */

const scene5 =
  document.getElementById("scene5");

const envelopeArea =
  document.getElementById("envelopeArea");

const letterFolded =
  document.getElementById("letterFolded");

const page5NextBtn =
  document.getElementById("page5NextBtn");


/* -----------------------------------------
   TOUCH ENVELOPE
----------------------------------------- */

envelopeArea.addEventListener("click", (event) => {

  event.stopPropagation();

  if (scene5.classList.contains("letter-open")) {
    return;
  }

  if (!scene5.classList.contains("envelope-open")) {

    scene5.classList.add("envelope-open");

    /*
      Wait for the envelope flap animation,
      then make the letter ready to touch.
    */

    setTimeout(() => {

      scene5.classList.add("letter-ready");

    }, 2000);

  }

});

/* -----------------------------------------
   TOUCH FOLDED LETTER
   → OPEN FULL LETTER
----------------------------------------- */

letterFolded.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!scene5.classList.contains("letter-ready")) {
    return;
  }

  scene5.classList.remove("letter-folded-back");
  scene5.classList.add("letter-open");
});
/* -----------------------------------------
   PAGE 5 NEXT
----------------------------------------- */
page5NextBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  showScene(5);
});

/* =========================================================
   FOLD LETTER AFTER READING
========================================================= */

const letterOpened =
  document.getElementById("letterOpened");

letterOpened.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!scene5.classList.contains("letter-open")) {
    return;
  }

  scene5.classList.add("letter-folding");

  setTimeout(() => {

    scene5.classList.remove("letter-open");
    scene5.classList.remove("letter-folding");

    /* Keep NEXT button visible */
    scene5.classList.add("letter-folded-back");

  }, 900);
});
/* =========================================================
   PAGE 6 - BLOW THE CANDLES
========================================================= */

const scene6 =
  document.getElementById("scene6");

const blowCandlesBtn =
  document.getElementById("blowCandlesBtn");

const page6NextBtn =
  document.getElementById("page6NextBtn");

const confetti =
  document.getElementById("confetti");


blowCandlesBtn.addEventListener("click", (event) => {

  event.stopPropagation();

  if (scene6.classList.contains("candles-blown")) {
    return;
  }

  scene6.classList.add("candles-blown");

  createConfetti();

});


function createConfetti() {

  confetti.innerHTML = "";

  const pieces = 70;

  for (let i = 0; i < pieces; i++) {

    const piece =
      document.createElement("span");

    piece.className =
      "confetti-piece";

    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      90 + Math.random() * 180;

    const x =
      Math.cos(angle) * distance;

    const y =
      Math.sin(angle) * distance;

    const rotation =
      Math.random() * 720 - 360;

    piece.style.setProperty(
      "--x",
      x + "px"
    );

    piece.style.setProperty(
      "--y",
      y + "px"
    );

    piece.style.setProperty(
      "--r",
      rotation + "deg"
    );

    /* colorful paper pieces */
    const colors = [
      "#650018",
      "#d98ba5",
      "#f4c95d",
      "#ff8fab",
      "#ffffff",
      "#b08a2e"
    ];

    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];

    piece.style.animationDelay =
      (Math.random() * .25) + "s";

    confetti.appendChild(piece);
  }
}

page6NextBtn.addEventListener("click", (event) => {

  event.stopPropagation();

  birthdayAudio.pause();

  showScene(6);

});
/* =========================================================
   PAGE 7 - BIRTHDAY SONG
========================================================= */

/* =========================================================
   PAGE 7 - BIRTHDAY SONG
========================================================= */

const scene7 =
  document.getElementById("scene7");

const birthdayAudio =
  document.getElementById("birthdayAudio");

const songControlBtn =
  document.getElementById("songControlBtn");

const lyricCurrent =
  document.getElementById("lyricCurrent");

const page7NextBtn =
  document.getElementById("page7NextBtn");


/* =========================================================
   PAGE 7 LYRICS
   TIMES ARE TEMPORARY FOR NOW
========================================================= */

const page7Lyrics = [
  { time: 6.500, text: "Tonight, the moon looks a little brighter," },
  { time: 12.640, text: "As if the sky knows whose day it is. Some girls are beautiful," },
  { time: 19.280, text: "And some girls make beauty look like poetry." },

  { time: 28.120, text: "She walks like morning wearing golden light, with a smile that" },
  { time: 33.420, text: "Could soften the darkest night. Gorgeous isn't quite the word to" },
  { time: 38.860, text: "Say, when beauty has a thousand different ways." },

  { time: 42.900, text: "Her eyes hold stories no book could contain, a little sunshine dancing" },
  { time: 47.920, text: "Through the rain. And every little laugh she gives away, turns an ordinary" },
  { time: 53.480, text: "Moment into a holiday. So let the candles" },

  { time: 58.740, text: "Glow, let every star appear, for a girl like her" },
  { time: 64.720, text: "Deserves a beautiful new year." },

  { time: 70.710, text: "Happy birthday, Pragna, queen of a beautiful heart." },
  { time: 76.620, text: "May every dream you've ever dreamed know exactly where to" },
  { time: 81.740, text: "Start. May your smile stay golden, may your soul" },
  { time: 87.980, text: "Stay bright. May life place roses at your feet and stars" },
  { time: 93.680, text: "Beside your night. You're not just another page in the" },
  { time: 99.440, text: "Story of this world. You're the kind of beautiful chapter" },
  { time: 105.380, text: "People wish they'd never close." },

  { time: 110.300, text: "There's elegance hidden in the way she smiles, a" },
  { time: 115.960, text: "Quiet kind of magic that stays for miles. She doesn't need a crown upon her" },
  { time: 121.940, text: "Head, the room already knows when she has entered it." },
  { time: 126.240, text: "Beautiful like roses after rain, graceful like sunlight through a window" },
  { time: 131.540, text: "Pane. And if the world were written like a book, she'd be the chapter everyone" },
  { time: 137.740, text: "Would stop and look. Tonight belongs to her, the" },
  { time: 143.420, text: "Candles know her name. And every little wish she makes" },
  { time: 149.320, text: "Deserves to find its way." },

  { time: 155.580, text: "Happy birthday, Pragna, queen of a beautiful heart. May every dream you've" },
  { time: 161.600, text: "Ever dreamed know exactly where to start. May your" },
  { time: 166.940, text: "Smile stay golden, may your soul stay bright." },
  { time: 172.080, text: "May life place roses at your feet and stars beside your" },
  { time: 177.920, text: "Night. You're not just another page in the story of" },
  { time: 183.740, text: "This world. You're the kind of beautiful chapter people wish" },
  { time: 189.460, text: "They'd never close." },

  { time: 195.380, text: "May she never forget how beautifully she" },
  { time: 201.320, text: "Shines, how some souls carry sunlight even on the" },
  { time: 206.660, text: "Quietest nights. May she chase every dream" },
  { time: 212.500, text: "With that fearless heart." },
  { time: 218.260, text: "And may every ending lead to a beautiful" },
  { time: 223.500, text: "Start. Let the years make her wiser," },
  { time: 229.920, text: "But never less wild. Let the world see the woman behind" },
  { time: 235.960, text: "That beautiful smile. And if beauty were a kingdom," },
  { time: 241.860, text: "She'd never need a throne. Because some queens are born with" },
  { time: 247.820, text: "Royalty of their own." },

  { time: 253.100, text: "Happy birthday, Pragna, let the whole sky celebrate." },
  { time: 258.940, text: "For a girl this rare and beautiful deserves a little extra fate." },
  { time: 265.280, text: "May your laughter fill the years, may your dreams become your view." },
  { time: 271.140, text: "May every beautiful thing in this world find its beautiful way to you." },
  { time: 277.400, text: "Keep that gorgeous smile, keep that light in your" },
  { time: 282.940, text: "Eyes. Keep becoming the woman your dreams have already" },
  { time: 288.800, text: "Described." },

  { time: 293.420, text: "And tonight," },
  { time: 301.480, text: "When the candles disappear, may the wish you" },
  { time: 307.580, text: "Keep quietly be the one that comes true." },
  { time: 315.720, text: "Happy birthday, Pragna. Some girls are remembered, some girls become" },
  { time: 321.520, text: "Poetry." }
];

let currentLyricIndex = -1;


/* =========================================================
   SHOW LYRIC
========================================================= */

function showLyric(index) {

  if (index < 0 || index >= page7Lyrics.length) {
    return;
  }

  if (index === currentLyricIndex) {
    return;
  }

  currentLyricIndex = index;

  lyricCurrent.style.opacity = "0";
  lyricCurrent.style.transform =
    "translateY(14px) scale(.96)";

  setTimeout(() => {

    lyricCurrent.textContent =
      page7Lyrics[index].text;

    lyricCurrent.style.opacity = "1";
    lyricCurrent.style.transform =
      "translateY(0) scale(1)";

  }, 300);
}


function updateLyrics() {

  const time =
    birthdayAudio.currentTime;

  let index = -1;

  for (let i = 0;
       i < page7Lyrics.length;
       i++) {

    if (time >= page7Lyrics[i].time) {
      index = i;
    } else {
      break;
    }
  }

  if (index !== -1) {
    showLyric(index);
  }
}


birthdayAudio.addEventListener(
  "timeupdate",
  updateLyrics
);  



/* =========================================================
   START / STOP
========================================================= */

songControlBtn.addEventListener(
  "click",
  async function (event) {

    event.stopPropagation();

    if (birthdayAudio.paused) {

      try {

        await birthdayAudio.play();

        songControlBtn.textContent =
          "STOP THE SONG";

      }

      catch (error) {

        console.log(
          "Audio error:",
          error
        );

        alert(
          "The birthday song is not connected yet."
        );

      }

    }

    else {

      birthdayAudio.pause();

      songControlBtn.textContent =
        "START THE SONG";

    }

  }
);


/* =========================================================
   WHEN SONG ENDS
========================================================= */
birthdayAudio.addEventListener(
  "ended",
  function () {

    songControlBtn.textContent =
      "START THE SONG";

    birthdayAudio.currentTime = 0;

    currentLyricIndex = -1;

    lyricCurrent.textContent =
      "Press START THE SONG...";

  }
);
  


/* =========================================================
   NEXT BUTTON
========================================================= */

page7NextBtn.addEventListener(
  "click",
  function (event) {

    event.stopPropagation();

    birthdayAudio.pause();

    songControlBtn.textContent =
      "START THE SONG";
      
showScene(7);

    /*
 PAGE 8 WILL BE CONNECTED HERE
    */

  }
);

/* =========================================================
   PAGE 7 - FORCE TITLE TO TOP
========================================================= */

const page7Title =
  document.querySelector("#scene7 .page7-title");

const page7Crown =
  document.querySelector("#scene7 .page7-crown");

if (page7Title) {

  page7Title.style.setProperty(
    "position",
    "absolute",
    "important"
  );

  page7Title.style.setProperty(
    "top",
    "10px",
    "important"
  );

  page7Title.style.setProperty(
    "left",
    "50%",
    "important"
  );

  page7Title.style.setProperty(
    "transform",
    "translateX(-50%)",
    "important"
  );

  page7Title.style.setProperty(
    "width",
    "100%",
    "important"
  );
}


if (page7Crown) {

  page7Crown.style.setProperty(
    "color",
    "#f4c95d",
    "important"
  );

  page7Crown.style.setProperty(
    "text-shadow",
    "0 1px 3px #650018, 0 0 10px rgba(244,201,93,.7)",
    "important"
  );
}
/* =========================================================
   PAGE 7 - FORCE BUTTONS TO BOTTOM
========================================================= */

const page7Controls =
  document.querySelector("#scene7 .page7-controls");

if (page7Controls) {

  page7Controls.style.setProperty(
    "position",
    "absolute",
    "important"
  );

  page7Controls.style.setProperty(
    "left",
    "50%",
    "important"
  );

  page7Controls.style.setProperty(
    "top",
    "auto",
    "important"
  );

  page7Controls.style.setProperty(
    "bottom",
    "80px",
    "important"
  );

  page7Controls.style.setProperty(
    "transform",
    "translateX(-50%)",
    "important"
  );

  page7Controls.style.setProperty(
    "width",
    "100%",
    "important"
  );
}
/* =================================
   PAGE 8 — TAP GIFT
================================= */

const page8Gift =
  document.getElementById("giftBox");

const page8Reveal =
  document.getElementById("giftReveal");

page8Gift.addEventListener("click", function () {

  page8Gift.classList.add("gift-opening");

  setTimeout(function () {

    page8Gift.style.display = "none";

    page8Reveal.classList.add(
      "show-gift-reveal"
    );

  }, 1200);

});
// =========================================================
// BUTTON SOUND FOR ALL BUTTONS
// =========================================================

const buttonClickSound = new Audio("button-click.wav");

document.addEventListener("click", function (event) {

  const button = event.target.closest("button");

  if (!button) return;

  buttonClickSound.currentTime = 0;
  buttonClickSound.play().catch(() => {});

});