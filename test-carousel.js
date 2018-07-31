$(document).ready(function(){
   $(".owl-carousel").owlCarousel(
       {
           loop:true,
           nav:false,
           dots:true,
           items: 1,
           autoplay: true
       }
    ); 
});

$(document).ready(function(){
  $(".page_link").click(function(){
    $(".page_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
  $(".categories_link").click(function(){
    $(".link_menu_toggle").slideToggle();
  });
});

