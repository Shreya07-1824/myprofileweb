<?php
declare(strict_types=1);

require __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['ok' => false, 'message' => 'Invalid request method.'], 405);
}

$email = post_value('email');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(['ok' => false, 'message' => 'Enter a valid email address.'], 422);
}

try {
    $stmt = db()->prepare(
        'INSERT INTO newsletter_subscribers (email, status)
         VALUES (:email, "active")
         ON DUPLICATE KEY UPDATE status = "active", updated_at = CURRENT_TIMESTAMP'
    );
    $stmt->execute([':email' => $email]);

    json_response(['ok' => true, 'message' => 'Subscribed successfully.']);
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    json_response(['ok' => false, 'message' => 'Could not subscribe right now.'], 500);
}
