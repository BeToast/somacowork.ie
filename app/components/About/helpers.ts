'use client'

import $ from "jquery";

const declareHeightEl = $('#about .declare-h');
const listenHeightEl = Array.from($('#about .listen-h'));


function declareHeightToListeners() {
  const declareHeight = declareHeightEl.outerHeight(true);

  listenHeightEl.forEach(el => {
    el.style.height = declareHeight + 'px';
  });
}


window.addEventListener('resize', declareHeightToListeners);
declareHeightToListeners();