<?php

use PHPMailer\PHPMailer\PHPMailer;

require("src/PHPMailer.php");
require("src/SMTP.php");
require("src/Exception.php");
$mail = new PHPMailer(true);
try {
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );
    $mail->isSMTP();
    $mail->Host = 'tricab.mail.pairserver.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contactanos@juansandoval.com.mx';
    $mail->Password = 'Admin010';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom($_POST['correo'], $_POST['nombre']);
    $mail->addAddress('contactanos@juansandoval.com.mx', 'Contacto Juan Sandoval');
    $mail->isHTML(true);
    $mail->Subject = 'Te contactaron en el formulario de tu sitio web';
    $fijo = ' ';
    if (isset($_POST['nfijo '])) {
        $fijo = ' Mi numero de telefono fijo es: ' . $_POST['nfijo '] . ' ';
    }
    $telefono = 'Mi telefono de celular es: ' . $_POST['ncelular'] . ' te contacte con el siguiente asunto:';
    $mensaje = '<div>Mi correo es: ' . $_POST['correo'] . '</div>' . '<div>' ."Mi nombre es: " . $_POST['nombre'] . $fijo . $telefono . $_POST['asunto'] . '</div>';
    $mail->Body = $mensaje;
    $mail->send();
    header('Location: '.'index.php');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
