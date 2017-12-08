<?php
    function get_real_ip()
    {
 
        if (isset($_SERVER["HTTP_CLIENT_IP"]))
        {
            return $_SERVER["HTTP_CLIENT_IP"];
        }
        elseif (isset($_SERVER["HTTP_X_FORWARDED_FOR"]))
        {
            return $_SERVER["HTTP_X_FORWARDED_FOR"];
        }
        elseif (isset($_SERVER["HTTP_X_FORWARDED"]))
        {
            return $_SERVER["HTTP_X_FORWARDED"];
        }
        elseif (isset($_SERVER["HTTP_FORWARDED_FOR"]))
        {
            return $_SERVER["HTTP_FORWARDED_FOR"];
        }
        elseif (isset($_SERVER["HTTP_FORWARDED"]))
        {
            return $_SERVER["HTTP_FORWARDED"];
        }
        else
        {
            return $_SERVER["REMOTE_ADDR"];
        }
 
    }
    $ip = get_real_ip();

$name = $_REQUEST['namesinput'];
$email = $_REQUEST['emailinput'];
$telofono = $_REQUEST['telefonoinput'];
$msg = $_REQUEST['contacmsginput'];


$mensaje = '
<div style="background-color:#ffffff;color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-size:12px;line-height:18px;font-family:helvetica,arial,verdana,sans-serif">
	<h2 style="background-color:#eeeeee">Formulario Contacto- '.$name.'</h2>
	<table cellspacing="0" cellpadding="0" width="100%" style="background-color:#ffffff">
		<tbody>
			<tr>
				<td valign="top" style="background-color:#ffffff"><b>Nombre:</b></td>
				<td>'.$name.'</td>
			</tr>
			<tr>
				<td valign="top" style="background-color:#ffffff"><b>Correo electrónico:</b></td>
				<td><a href="'.$email.'" target="_blank">'.$email.'</a></td>
			</tr>
			<tr>
				<td valign="top" style="background-color:#ffffff"><b>Mensaje:</b></td>
				<td>'.$msg.'</td>
			</tr>
			<tr>
				<td valign="top" style="background-color:#ffffff"><b>Teléfono móvil:</b></td>
				<td>'.$telofono.'</td>
			</tr>
		</tbody>
	</table>
	<br><br>
	<div style="background-color:#eeeeee;font-size:10px;line-height:11px">
	Formulario enviado desde el sitio web: <a href="http://alextrixvz.github.io" target="_blank">http://alextrixvz.github.io</a></div><div style="background-color:#eeeeee;font-size:10px;line-height:11px">Dirección IP del visitante: '.$ip.'</div></div>';

enviarEmail($mensaje, $name);



function enviarEmail($mensaje, $cliente){
	require("PHPMailer/class.phpmailer.php");
	require("PHPMailer/class.smtp.php");
			$mail = new PHPMailer();

		  	$body = '<html>
		     <head>
		        <meta charset="UTF-8">
		        <meta name="copyrigth" content="">
		        <title>Formulario Contacto</title>
		     </head>
		     <body>
		       '.$mensaje.'
		     </body>
		    </html>';
		                 
		    $body .= "";
		    $mail->CharSet = 'UTF-8';
		    $mail->IsSMTP(); 

		    //Sustituye (ServidorDeCorreoSMTP)  por el host de tu servidor de correo SMTP
		    $mail->Host = "smtp.gmail.com";   
		    $mail->Port       = 465;  
		    $mail->SMTPAuth = true;
		    $mail->SMTPSecure = "ssl"; 
		    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
			$mail->SMTPDebug = 1; //Alternative to above constant
		    
		    //Sustituye  ( CuentaDeEnvio )  por la cuenta desde la que deseas enviar por ejem. prueba@domitienda.com  
		    $mail->From     = "alejandrodategeek@gmail.com";
		    $mail->FromName = "alejandro";
		    $mail->Subject  = "Formulario Contacto-".$cliente;
		    $mail->AltBody  = ""; 
		    $mail->IsHTML(true);
		    $mail->MsgHTML($body);

		    // Sustituye  (CuentaDestino )  por la cuenta a la que deseas enviar por ejem. usuario@destino.com  
		    $mail->AddAddress('alejandrodategeek@gmail.com','');
		    $mail->SMTPAuth = true;

		    // Sustituye (CuentaDeEnvio )  por la misma cuenta que usaste en la parte superior en este caso  prueba@midominio.com  y sustituye (ContraseñaDeEnvio)  por la contraseña que tenga dicha cuenta 
		    $mail->Username = "correodepruebasalemoni@gmail.com";
		    $mail->Password = "14072010Monica"; 
		    $mail->Send();


			
		}
 