//DROP DOWN MENU

const drop_menu_btn = document.querySelector('.drop-menu')

const mobile_menu_button = document.querySelector('.mobile-menu')

const mobile_menu_option = document.querySelector('.option')

drop_menu_btn.addEventListener('click', function(){
    drop_menu_btn.classList.toggle('active')
    mobile_menu_button.classList.toggle('active')
    mobile_menu_option.classList.toggle('active')
})


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
