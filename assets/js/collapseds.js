$(document).ready(function()
{
    $("#collapseHipotecario").collapse('show')
    $('#collapseHipotecario').on('shown.bs.collapse', function (e) {
        $('#colHipotecario').css('border-bottom','')
    })
    $('#collapseHipotecario').on('hidden.bs.collapse', function (e) {
        $('#colHipotecario').css('border-bottom','1px solid rgb(0, 56, 105)')

    })
    $('#collapseCivil').on('shown.bs.collapse', function (e) {
        $('#colCivil').css('border-bottom','')
    })
    $('#collapseCivil').on('hidden.bs.collapse', function (e) {
        $('#colCivil').css('border-bottom','1px solid rgb(0, 56, 105)')

    })
    $('#collapseMercantil').on('shown.bs.collapse', function (e) {
        $('#colMercantil').css('border-bottom','')
    })
    $('#collapseMercantil').on('hidden.bs.collapse', function (e) {
        $('#colMercantil').css('border-bottom','1px solid rgb(0, 56, 105)')

    })
    $('#collapseFamiliar').on('shown.bs.collapse', function (e) {
        $('#colFamiliar').css('border-bottom','')
    })
    $('#collapseFamiliar').on('hidden.bs.collapse', function (e) {
        $('#colFamiliar').css('border-bottom','1px solid rgb(0, 56, 105)')

    })
    $('#collapsePenal').on('shown.bs.collapse', function (e) {
        $('#colPenal').css('border-bottom','')
    })
    $('#collapsePenal').on('hidden.bs.collapse', function (e) {
        $('#colPenal').css('border-bottom','1px solid rgb(0, 56, 105)')

    })
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
})
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});