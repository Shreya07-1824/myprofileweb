<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['ok' => false, 'message' => 'Invalid request method.'], 405);
}

$name = post_value('name');
$email = post_value('email');
$phone = post_value('phone');
$service = post_value('service');
$budget = post_value('budget');
$message = post_value('message');
$consent = isset($_POST['consent']);
$errors = [];

if (!preg_match("/^[a-zA-Z\s.'-]{2,60}$/", $name)) {
    $errors['name'] = 'Enter a valid name.';
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Enter a valid email.';
}

if (!preg_match('/^[+]?\d[\d\s-]{8,16}$/', $phone)) {
    $errors['phone'] = 'Enter a valid phone number.';
}

if ($service === '') {
    $errors['service'] = 'Select a service.';
}

if ($budget === '') {
    $errors['budget'] = 'Select a budget.';
}

if (mb_strlen($message) < 25) {
    $errors['message'] = 'Message must be at least 25 characters.';
}

if (!$consent) {
    $errors['consent'] = 'Consent is required.';
}

$attachmentName = null;
$attachmentPath = null;

if (!empty($_FILES['attachment']['name'])) {
    $file = $_FILES['attachment'];
    $allowedTypes = [
        'application/pdf' => 'pdf',
        'application/msword' => 'doc',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'docx',
        'image/png' => 'png',
        'image/jpeg' => 'jpg',
    ];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        $errors['attachment'] = 'File upload failed.';
    } elseif ($file['size'] > 2 * 1024 * 1024) {
        $errors['attachment'] = 'File must be under 2 MB.';
    } else {
        $mime = mime_content_type($file['tmp_name']);
        if (!isset($allowedTypes[$mime])) {
            $errors['attachment'] = 'Invalid file type.';
        } else {
            $uploadDir = dirname(__DIR__) . '/uploads';
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0755, true);
            }
            $safeName = bin2hex(random_bytes(12)) . '.' . $allowedTypes[$mime];
            $destination = $uploadDir . '/' . $safeName;
            if (!move_uploaded_file($file['tmp_name'], $destination)) {
                $errors['attachment'] = 'Could not save uploaded file.';
            } else {
                $attachmentName = substr(basename($file['name']), 0, 180);
                $attachmentPath = 'uploads/' . $safeName;
            }
        }
    }
}

if ($errors) {
    json_response(['ok' => false, 'message' => 'Please fix the highlighted fields.', 'errors' => $errors], 422);
}

try {
    $stmt = db()->prepare(
        'INSERT INTO contact_enquiries
        (name, email, phone, service, budget, message, attachment_name, attachment_path, ip_address, user_agent)
        VALUES
        (:name, :email, :phone, :service, :budget, :message, :attachment_name, :attachment_path, :ip_address, :user_agent)'
    );

    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':phone' => $phone,
        ':service' => $service,
        ':budget' => $budget,
        ':message' => $message,
        ':attachment_name' => $attachmentName,
        ':attachment_path' => $attachmentPath,
        ':ip_address' => $_SERVER['REMOTE_ADDR'] ?? null,
        ':user_agent' => substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 255),
    ]);

    json_response(['ok' => true, 'message' => 'Thank you. Your enquiry has been saved and I will contact you soon.']);
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    json_response(['ok' => false, 'message' => 'Server error. Please try WhatsApp or email.'], 500);
}
