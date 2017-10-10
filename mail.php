<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*require_once 'swiftemail.php';
*/$message = 'simple test';
/*$message = '<html><body>';
      $message .= '<img src="//css-tricks.com/examples/move company client Form/images/wcrf-header.png" alt="Mover client" />';

      $message .= '<h1>Hey 121</h1>';
      $message .= '</body></html>';*/
      // echo mail('dana@danalocates.com', 'Hey', "daad", "From: jeff@1sourcedfw.com\r\n");


// $to      = 'sachin.kumar@mobilyte.com';
$to      = 'alison@1sourcedfw.com';
$subject = 'custom header';
$message = 'Hey if you receive this message then reply...' ;
$header = "From: info@1sourcedfw.com\r\n";
$header.= "MIME-Version: 1.0\r\n";
$header.= "Content-Type: text/html; charset=utf-8\r\n";
$header.= "X-Priority: 1\r\n";

echo mail($to, $subject, $message, $header);



      // echo mail('betasoft111@gmail.com', '$customSubject', $message, "From: jeff@1sourcedfw.com\r\n");
    // $subject = "Registration at $website";dana@danalocates.com
      // swiftmail($to, $from, $subject, $message,$agent_name='', $agent_cc='')
// echo swiftmail('dana@danalocates.com','dana@danalocates.com','Dana to Dana','test','Dana','sachin.kumar@mobilyte.com');
