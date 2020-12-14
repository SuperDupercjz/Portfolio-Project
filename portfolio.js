alert("Page is Under construction, updating mobile responsiveness and Javascript ")
$(document).ready(function() {

    const navslide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navlinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {

            nav.classList.toggle('nav-active'); 

            navlinks.forEach((link, index) => {
                if ( link.style.animation ){
                    link.style.animation = '';
                }else{
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                }
              
              
              });
 burger.classList.toggle('toggle'); 

        });
 

    }
   
    navslide(); 
  
      $('.myFunction').click(function(){
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });

      $('.myFunction2').click(function(){
        var x = document.getElementById("myDIV2");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
      $('.myFunction3').click(function(){
        var x = document.getElementById("myDIV3");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      });
});
