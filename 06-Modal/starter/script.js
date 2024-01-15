'use strict';

const modal = document.querySelector('.modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// console.log(btnsShowModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  //   for (let element of document.querySelectorAll('.hidden'))
  //     element.style.display = 'none';
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  //   for (let element of document.querySelectorAll('.hidden'))
  //     element.style.display = 'none';
};

for (let btn of btnsShowModal) btn.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
