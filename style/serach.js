$(document).ready(function () {
    console.log('fajdsfjaskd')
    $('#search').click(function (e) {
         
        e.preventDefault();
        $('.menu-item').toggleClass('hide-item');
        $('.search-form').toggleClass('active-serach-form');
        $('.serach-dropdown').toggleClass('hide-dropdown');
        $('.input-serach').attr('autofocus','on');
        

        console.log('fasdhfhas')
    });
});