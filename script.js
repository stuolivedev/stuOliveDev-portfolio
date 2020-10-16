//Window load portfolio and contact
$(window).on('load',  function() {
    $('#portfolioContent').show();
    $('#aboutContent').hide();
    $('#contactContent').hide();
});

$('#portfolio').on('click', function(){
    $('#portfolioContent').show();
    $('#aboutContent').hide();
    $('#contactContent').hide();
});

$('#about').on('click', function(){
    $('#portfolioContent').hide();
    $('#aboutContent').show();
    $('#contactContent').hide();
});

$('#contact').on('click', function(){
    $('#portfolioContent').hide();
    $('#aboutContent').hide();
    $('#contactContent').show();
});
