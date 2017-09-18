$(document).ready(function() {
  $('select').material_select();
  $(".button-collapse").sideNav();
  $('#autoWidth').lightSlider({
          autoWidth:true,
          loop:true,
          onSliderLoad: function() {
              $('#autoWidth').removeClass('cS-hidden');
          }
      });  
});
