$(document).ready(function() {
    $('a.nav-link[data-toggle=collapse]').on('click',function(e)
    {
        $('.collapse').collapse('hide');
    })
    $(window.location.hash).collapse('show');
});

