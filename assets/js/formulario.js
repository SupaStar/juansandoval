$(document).ready(function (b)
{

    $('#btnEnviarform').on('click',function (event)
    {

        event.preventDefault();
        $.ajax({
                method: "post",
                url: "formulario.php",
                data:
                    $('#formcontacto').serialize()
                ,
                success:function (e)
                {
                    console.log("Correcto")
                },
                error:function(e)
                {
                    console.log("no correcto")
                }
            }
        )
    })


})