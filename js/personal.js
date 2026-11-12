//DROP DOWN MENU

const drop_menu_btn = document.querySelector('.drop-menu')

const mobile_menu_button = document.querySelector('.mobile-menu')

const mobile_menu_option = document.querySelector('.option')

//

drop_menu_btn.addEventListener('click', function(){
    drop_menu_btn.classList.toggle('active')
    mobile_menu_button.classList.toggle('active')
    mobile_menu_option.classList.toggle('active')
})






//NEW DISPLAY CASE

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('portfolioModal');
  const modalTitle = document.getElementById('modalTitle');
  const projDesc = document.getElementById('projDesc');
  const modalImg = document.getElementById('modalImg');
  const closeModalBtn = document.querySelector('.close-modal-btn');

  // Open Modal function mapping data variables
  const openModal = (card) => {
    modalTitle.textContent = card.getAttribute('data-title');
    projDesc.textContent = card.getAttribute('data-desc');
    modalImg.src = card.getAttribute('data-img');
    modalImg.alt = card.getAttribute('data-title');
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  // Close Modal function
  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore background scrolling
  };

  // Event Delegation for opening modal buttons
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('display-case-img')) {
      const projectCard = e.target.closest('.portfolio-item');
      openModal(projectCard);
    }
  });

  // Event Listeners for closing modal
  closeModalBtn.addEventListener('click', closeModal);

  // Close on backdrop overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape Key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

















//INTERACTIVE MENU

/*let images = document.querySelectorAll('img')
const modal = document.querySelector('.modal')
const modal_image = document.querySelector('.modal-image')
const modal_text = document.querySelector('.modal-text')
const close = document.querySelector('.close')

console.log(images);

images.forEach(image => {

    image.addEventListener('click', () =>{
        modal_image.src = image.src
        modal.classList.add('display')
        modal_text.innerHTML = image.alt;

        close.addEventListener('click', () =>{
            modal.classList.remove('display')
        })
    })

});
*/


//PAUSE BUTTON

const pause_button = document.getElementById('pause')

const marble_video = document.getElementById('marble-video')


pause_button.addEventListener('click', function(){
    if (marble_video.paused) {
        marble_video.play();
        
      } else {
        marble_video.pause();
      }

})
