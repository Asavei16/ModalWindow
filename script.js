'use strict';

const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const modals = document.querySelectorAll('.modal');

const closeModal = function() {
  modals.forEach((modal) => {
    modal.classList.add('hidden');
  });
  overlay.classList.add('hidden');
};

const openModal = function(event) {
  const modalId = event.target.getAttribute('data-modal-id');
  const modal = document.querySelector(`#modal-${modalId}`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});

modals.forEach((modal) => {
  const closeButton = modal.querySelector('.close-modal');
  closeButton.addEventListener('click', closeModal);
});
