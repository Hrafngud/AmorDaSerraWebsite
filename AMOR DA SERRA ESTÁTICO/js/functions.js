const menuItems = document.querySelectorAll('.navbar a[href^="#"');



menuItems.forEach(item => {
 item.addEventListener('click', scrollToSection)
})

function scrollToSection(event){

   event.preventDefault();
   const element = event.target;
   const id = element.getAttribute('href');
   const to = document.querySelector(id).offsetTop;

   window.scroll({

      top: to,
      behavior: "smooth"
   });
}