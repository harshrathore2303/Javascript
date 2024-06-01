'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModel = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
    // modal.style.display = 'block'
}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++){
    console.log(btnsOpenModal[i].addEventListener('click', openModel));
}
// for (const i of btnsOpenModal){
//     console.log(i.textContent);
// }

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
