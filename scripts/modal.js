//icones
const wppBtn = document.querySelector('#wpp-btn');
const ghBtn = document.querySelector('#gh-btn');
const lkBtn = document.querySelector('#lk-btn');

//modal
const modal = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModal = document.querySelector('#close-modal');

//whatsapp content
const ghContent = document.querySelector('.img-code:nth-child(1)')
const lkContent = document.querySelector('.img-code:nth-child(2)')
const wppContent = document.querySelector('.img-code:nth-child(3)')

wppBtn.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
    modalOverlay.classList.toggle('modal-active')
    wppContent.style.display = 'block';
    ghContent.style.display = 'none';
    lkContent.style.display = 'none';
})

ghBtn.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
    modalOverlay.classList.toggle('modal-active')
    wppContent.style.display = 'none';
    ghContent.style.display = 'block';
    lkContent.style.display = 'none';
})

lkBtn.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
    modalOverlay.classList.toggle('modal-active')
    wppContent.style.display = 'none';
    ghContent.style.display = 'none';
    lkContent.style.display = 'block';
})

closeModal.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    modalOverlay.classList.remove('modal-active')
})