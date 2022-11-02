"use strict";

// Document elements

const gameFieldElements = document.querySelectorAll(".game__field");

// App state

let currentPlayer = "o";

// Logic

const placeMarker = function (e) {
  const target = e.target;
  if (target.dataset.marked) return;
  target.querySelector(`[data-type=full-${currentPlayer}]`).style.display =
    "block";
  removeMarkerOutline(e);
  target.dataset.marked = 1;
};

const showMarkerOutline = function (e) {
  const target = e.target;
  if (target.dataset.marked) return;
  target.querySelector(`[data-type=outline-${currentPlayer}]`).style.display =
    "block";
};

const removeMarkerOutline = function (e) {
  const target = e.target;
  target.querySelector(`[data-type=outline-${currentPlayer}]`).style.display =
    "none";
};

gameFieldElements.forEach((el) => el.addEventListener("click", placeMarker));
gameFieldElements.forEach((el) =>
  el.addEventListener("mousedown", showMarkerOutline)
);
gameFieldElements.forEach((el) =>
  el.addEventListener("mouseout", removeMarkerOutline)
);
