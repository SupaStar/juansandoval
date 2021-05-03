$(document).ready(function() {
   /* $('a.nav-link[data-toggle=collapse]').on('click',function(e)
    {

        $('.collapse').collapse('hide');
    })*/
    $('#navHipotecario').on('click',function (e)
    {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openHipotecario,500);
    })

    function openHipotecario()
    {

        $('#collapseHipotecario').collapse('show')
    }$('#navCivil').on('click',function (e)
    {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openCivil,500);
    })

    function openCivil()
    {

        $('#collapseCivil').collapse('show')
    }$('#navMercantil').on('click',function (e)
    {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openMercantil,500);
    })

    function openMercantil()
    {

        $('#collapseMercantil').collapse('show')
    }
    $('#navFamiliar').on('click',function (e)
    {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openFamiliar,500);
    })

    function openFamiliar()
    {

        $('#collapseFamiliar').collapse('show')
    }
    $('#navPenal').on('click',function (e)
    {
        e.preventDefault()
        $('.collapse').collapse('hide');
        setTimeout(openPenal,500);
    })

    function openPenal()
    {

        $('#collapsePenal').collapse('show')
    }
    $(window.location.hash).collapse('show');
});

