//Window load portfolio and contact
$(window).on('load',  function() {
    $('#portfolioContent').show();
    $('#aboutContent').hide();
    $('#contactContent').hide();

    $('#portfolio').addClass('highlight');
});

$('#portfolio').on('click', function(){
    $('#portfolioContent').fadeIn("slow");
    $('#aboutContent').hide();
    $('#contactContent').hide();

    $('#portfolio').addClass('highlight');
    $('#about').removeClass('highlight');
    $('#contact').removeClass('highlight');
});

$('#about').on('click', function(){
    $('#portfolioContent').hide();
    $("#aboutContent").fadeIn("slow");
    $('#contactContent').hide();

    $('#portfolio').removeClass('highlight');
    $('#about').addClass('highlight');
    $('#contact').removeClass('highlight');
});

$('#contact').on('click', function(){
    $('#portfolioContent').hide();
    $('#aboutContent').hide();
    $('#contactContent').fadeIn("slow");

    $('#portfolio').removeClass('highlight');
    $('#about').removeClass('highlight');
    $('#contact').addClass('highlight');
});
