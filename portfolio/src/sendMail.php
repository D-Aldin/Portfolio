<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS":
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: Content-Type");
        exit;

    case "POST":
        header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json');  // <-- Add this line

        $json = file_get_contents("php://input");
        $params = json_decode($json);

        if (!$params || !isset($params->email) || !isset($params->name) || !isset($params->message)) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid input"]);
            exit;
        }

        $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
        $name = htmlspecialchars($params->name, ENT_QUOTES, 'UTF-8');
        $messageText = htmlspecialchars($params->message, ENT_QUOTES, 'UTF-8');

        $recipient = "contact@aldin-dobric.de";
        $subject = "Contact from <$email>";
        $message = "From: " . $name . "<br>" . nl2br($messageText);

        $headers = [
            "MIME-Version: 1.0",
            "Content-type: text/html; charset=utf-8",
            "From: noreply@aldin-dobric.de"
        ];

        if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
            echo json_encode(["status" => "Message sent successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Message could not be sent"]);
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
