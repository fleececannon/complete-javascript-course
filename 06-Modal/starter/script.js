'use strict';

const modalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener('click', function () {
    console.log('click');
    openModal();
  });
}

modalCloseButton.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closeModal();
  }
});
