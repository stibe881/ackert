<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle OPTIONS request for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$firstName = $_POST['firstName'] ?? '';
$lastName = $_POST['lastName'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$message = $_POST['message'] ?? '';
$position = $_POST['position'] ?? '';

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($position)) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse.']);
    exit;
}

// Handle file upload
if (!isset($_FILES['cv']) || $_FILES['cv']['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte laden Sie Ihren Lebenslauf hoch.']);
    exit;
}

$cvFile = $_FILES['cv'];
$cvName = $cvFile['name'];
$cvTmpName = $cvFile['tmp_name'];
$cvSize = $cvFile['size'];
$cvType = $cvFile['type'];

// Validate file type (PDF only)
$allowedTypes = ['application/pdf'];
if (!in_array($cvType, $allowedTypes)) {
    http_response_code(400);
    echo json_encode(['error' => 'Nur PDF-Dateien sind erlaubt.']);
    exit;
}

// Validate file size (max 10MB)
if ($cvSize > 10 * 1024 * 1024) {
    http_response_code(400);
    echo json_encode(['error' => 'Die Datei ist zu gross (max. 10MB).']);
    exit;
}

// Read file content
$cvContent = file_get_contents($cvTmpName);
$cvContentEncoded = chunk_split(base64_encode($cvContent));

// Email configuration
$to = 'ackertgarten@hotmail.com';
$subject = 'Bewerbung: ' . $position;

// Create email boundary
$boundary = md5(time());

// Email headers
$headers = "From: $firstName $lastName <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

// Email body
$emailBody = "--$boundary\r\n";
$emailBody .= "Content-Type: text/plain; charset=UTF-8\r\n";
$emailBody .= "Content-Transfer-Encoding: 7bit\r\n\r\n";

$emailBody .= "Neue Bewerbung eingegangen\n\n";
$emailBody .= "Position: $position\n\n";
$emailBody .= "Persönliche Daten:\n";
$emailBody .= "Name: $firstName $lastName\n";
$emailBody .= "E-Mail: $email\n";
if (!empty($phone)) {
    $emailBody .= "Telefon: $phone\n";
}
$emailBody .= "\n";

if (!empty($message)) {
    $emailBody .= "Nachricht:\n$message\n\n";
}

$emailBody .= "--$boundary\r\n";

// Attach CV
$emailBody .= "Content-Type: $cvType; name=\"$cvName\"\r\n";
$emailBody .= "Content-Transfer-Encoding: base64\r\n";
$emailBody .= "Content-Disposition: attachment; filename=\"$cvName\"\r\n\r\n";
$emailBody .= $cvContentEncoded . "\r\n";
$emailBody .= "--$boundary--";

// Send email
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Bewerbung erfolgreich gesendet']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.']);
}
?>
