//Window load portfolio and contact
$(window).on('load',  function() {
    $('#aboutContent').show();
    $('#portfolioContent').hide();
    $('#contactContent').hide();
});



$('#about').on('click', function(){
    $('#aboutContent').show();
    $('#portfolioContent').hide();
    $('#contactContent').hide();
});

$('#portfolio').on('click', function(){
    $('#aboutContent').hide();
    $('#portfolioContent').show();
    $('#contactContent').hide();
});

$('#contact').on('click', function(){
    $('#aboutContent').hide();
    $('#portfolioContent').hide();
    $('#contactContent').show();
});
