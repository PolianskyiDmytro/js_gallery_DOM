'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const a = e.target.closest('a');

  if (!a) {
    return;
  }

  largeImg.src = a.href;
  largeImg.alt = a.title;
});
