'use client'

import $ from "jquery";

const declareHeightEl = $('#about .declare-h');
const listenHeightEl = Array.from($('#about .listen-h'));


function declareHeightToListeners() {
  const declareHeight = declareHeightEl.outerHeight(true);
  console.log(declareHeightEl.outerHeight(true));
  console.log(declareHeightEl.height());

  listenHeightEl.forEach(el => {
    el.style.height = declareHeight + 'px';
  });
}


window.addEventListener('resize', declareHeightToListeners);
declareHeightToListeners();