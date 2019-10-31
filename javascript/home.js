$(document).ready(function() {
  "use strict";



  if (document.getElementById("default-select")) {
      $('select').niceSelect();
  };
  if (document.getElementById("default-select2")) {
      $('select').niceSelect();
  };
  if (document.getElementById("service-select")) {
      $('select').niceSelect();
  };    

 
  $('.img-pop-up').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});





$('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });


  if(document.getElementById("portfolio")){
        var $grid = $(".grid").isotope({
          itemSelector: ".all",
          percentPosition: true,
          masonry: {
            columnWidth: ".all"
          }
        })
  };
  







});
