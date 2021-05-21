$(document).ready(function () {
    $('a.nav-link[data-toggle=collapse]').on('click', function (e) {
        $('.collapse').collapse('hide');
    })
    $('#navHipotecario').on('click', function (e) {
        $('.collapse').collapse('hide');
        setTimeout(openHipotecario, 600);
    })

    function openHipotecario() {

        $('#collapseHipotecario').collapse('show')
    }

    $('#navCivil').on('click', function (e) {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openCivil, 600);
    })

    function openCivil() {

        $('#collapseCivil').collapse('show')
    }

    $('#navMercantil').on('click', function (e) {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openMercantil, 600);
    })

    function openMercantil() {

        $('#collapseMercantil').collapse('show')
    }

    $('#navFamiliar').on('click', function (e) {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openFamiliar, 600);
    })

    function openFamiliar() {

        $('#collapseFamiliar').collapse('show')
    }

    $('#navPenal').on('click', function (e) {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openPenal, 600);
    })

    function openPenal() {

        $('#collapsePenal').collapse('show')
    }

    $(window.location.hash).collapse('show');
});

