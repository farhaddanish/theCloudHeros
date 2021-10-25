$(document).ready(function () {

    $('#search').click(function (e) {

        e.preventDefault();
        $('.menu-item').toggleClass('hide-item');
        $('.search-form').toggleClass('active-serach-form');
        $('.serach-dropdown').toggleClass('hide-dropdown');
        $('#search-id').focus()
        document.getElementById('search-id').querySelector('input').setAttribute('autofocus','autofocus')
        console.log(document.getElementById('search-id').querySelector('input'))
    });
    
});