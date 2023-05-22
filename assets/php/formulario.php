<?php
/*
 *  CONFIGURAR TODO AQUÍ
 */

// Una dirección de correo electrónico que estará en el campo De del correo electrónico.
$from = 'Twooweb <sahidrivera55@gmail.com>';

// Una dirección de correo electrónico que recibirá el correo electrónico con la salida del formulario
$sendTo = 'sahidrivera55@gmail.com';

// Asunto del correo electrónico
$subject = 'Nuevo mensaje desde el formulario de contacto';

// Nombres de los campos del formulario y sus traducciones.
// nombre de la variable de matriz => Texto que aparecerá en el correo electrónico
$fields = array('name' => 'Nombre', 'email' => 'Email', 'message' => 'Comentario');

// Mensaje que se mostrará cuando todo esté bien :)
$okMessage = 'Formulario de contacto enviado correctamente. ¡Gracias! Te responderé a la mayor brevedad posible.';

// Si algo sale mal, mostraremos este mensaje.
$errorMessage = 'Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.';

/*
 *  VAMOS A ENVIAR EL CORREO
 */

// Si no estás depurando y no necesitas informes de errores, desactívalo con error_reporting(0);
error_reporting(E_ALL & ~E_NOTICE);

$responseArray = array('type' => 'danger', 'message' => $errorMessage);

try
{
    if(count($_POST) > 0) {
        $emailText = "Tienes un nuevo mensaje desde tu formulario de contacto\n=============================\n";

        foreach ($_POST as $key => $value) {
            // Si el campo existe en la matriz $fields, inclúyelo en el correo electrónico
            if (isset($fields[$key])) {
                $emailText .= "$fields[$key]: $value\n";
            }
        }

        // Todos los encabezados necesarios para el correo electrónico.
        $headers = array(
            'Content-Type: text/plain; charset="UTF-8";',
            'From: ' . $from,
            'Reply-To: ' . $from,
            'Return-Path: ' . $from,
        );
        
        // Enviar correo electrónico
        if (mail($sendTo, $subject, $emailText, implode("\n", $headers))) {
            $responseArray = array('type' => 'success', 'message' => $okMessage);
        }
    }
}
catch (\Exception $e)
{
    // Si se produce una excepción, se captura aquí y se envía como respuesta de error
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

?>
