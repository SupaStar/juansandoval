<?php
$remitente = $_POST['correo'];
$destinatario = "alfredomendez60@gmail.com";
$asunto = "Te contactaron en el formulario de tu sitio web";
$fijo = ' ';
if (isset($_POST['nfijo '])){
    $fijo = ' Mi numero de telefono fijo es: ' . $_POST['nfijo '] . ' ';
}
$telefono = 'Mi telefono de celular es: ' . $_POST['ncelular'] . ' te contacte con el siguiente asunto:\n';
$mensaje = "Mi nombre es: " . $_POST['nombre'] . $fijo . $telefono . $_POST['asunto'];
$headers = "From: $remitente\r\nReply-to: $remitente";

mail($destinatario, $asunto, $mensaje, $headers);
?>