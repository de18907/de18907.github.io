<?php
// Configura el correo que recibirá los mensajes
$destinatario = "sanh1907@hotmail.com";

// Captura y limpia datos del formulario
$nombre  = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email   = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$asunto  = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : 'Sin asunto';
$mensaje = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

if (empty($nombre) || empty($email) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Por favor completa todos los campos correctamente.";
    exit;
}

// Cuerpo del correo
$cuerpo = "Has recibido un nuevo mensaje desde tu página web:\n\n";
$cuerpo .= "Nombre: $nombre\n";
$cuerpo .= "Correo: $email\n";
$cuerpo .= "Asunto: $asunto\n\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

// Encabezados del correo
$headers = "From: $nombre <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envía el correo
if (mail($destinatario, $asunto, $cuerpo, $headers)) {
    echo "OK"; // Lo que espera el JS de la plantilla
} else {
    http_response_code(500);
    echo "No se pudo enviar el mensaje.";
}
?>
