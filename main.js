/*
  WyomingWes AI Takeover System led by cfo 67 kid
  ----------------------------
  simulates an AI "boot sequence" that transforms
  the site experience and persists user state.
*/

// grab some stuff(elements)
const button = document.querySelector(".stuff-content button");
const hero = document.querySelector(".stuff");
const title = document.querySelector(".stuff-content h1");
const overlay = document.getElementById("ai-overlay");
// Energy pulse stuff(overlay for short flashes)
const pulse = document.createElement("div");
pulse.classList.add("ai-pulse");
document.body.appendChild(pulse);

// check if user already triggered AI last time
let mode = localStorage.getItem("wyomingWesMode") || "normal";

// Apply saved state on load
if (mode === "ai") activateAI(false);

// update button text
button.textContent = "Initiate AI Takeover";
// click event — toggle AI mode
button.addEventListener("click", () => {
  if (mode === "normal") {
    activateAI(true);// boot sequence on first activation
  } else {
    deactivateAI();// shut it down
  }
});

/*
  activateAI()
  -----------------------------
  the big boy: shake, colors, flash
  showBoot = whether to run the dramatic boot sequence
*/
function activateAI(showBoot) {
  mode = "ai";
  localStorage.setItem("wyomingWesMode", mode);// save state, because persistence is cool

  if (showBoot) runBootSequence();// optional dramatic message thing

  // make the hero section permanently AI mode + shake(combine to reduce dead weight)
  hero.classList.add("ai-active", "ai-shake");


  // trigger AI pulse overlay (temporary)
  pulse.classList.remove("ai-pulse"); // reset animation
  void pulse.offsetWidth; // force browser to notice
  pulse.classList.add("ai-pulse");

  // update text and button
  title.textContent = "WYOMINGWES AI — OPERATIONAL";
  button.textContent = "Shut Down AI";
}
/*
  deactivateAI()
  -----------------------------
  calm everything down. no more cool stuff happening ig. back to tranquil wyoming life.
*/

function deactivateAI() {
  mode = "normal";
  localStorage.setItem("wyomingWesMode", mode);

  // remove all temporary and persistent AI effects
  hero.classList.remove("ai-active");
  hero.classList.remove("ai-shake");

  overlay.classList.add("hidden"); // hide boot messages if visible


  // update text and button
  title.textContent = "Welcome to WyomingWes Ventures Inc.";
  button.textContent = "Initiate AI Takeover";
}

/*
  AI boot sequence for drama effect
*/
function runBootSequence() {
  overlay.classList.remove("hidden");

  const messages = [
    "Initializing WyomingWes AI...",
    "Analyzing market inefficiencies...",
    "Allocating capital irresponsibly...",
    "AI takeover complete."
  ];

  let index = 0;
  overlay.textContent = messages[index];

  const interval = setInterval(() => {
    index++;
    if (index >= messages.length) {
      clearInterval(interval);
      overlay.classList.add("hidden");// done, hide overlay
    } else {
      overlay.textContent = messages[index];
    }
  }, 900);// change every 900ms, keep punchy

}
