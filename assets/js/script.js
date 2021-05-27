//Inicio 
$(function () {
 //Agregando smooth scroll

  $("#link1").click(function() {
    $('html, body').animate({
        scrollTop: $("#quienessomos").offset().top
    }, 500);
});

$("#link2").click(function() {
  $('html, body').animate({
      scrollTop: $("#destacados").offset().top
  }, 500);
});

$("#link3").click(function() {
  $('html, body').animate({
      scrollTop: $("contacto").offset().top
  }, 500);
});

//Agregando tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})




});