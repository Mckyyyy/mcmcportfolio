<?php
// Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP(); // Use SMTP
        $mail->Host       = 'smtp.gmail.com'; // Gmail SMTP server
        $mail->SMTPAuth   = true; // Enable SMTP authentication
        $mail->Username   = 'besasmcmc@gmail.com'; // Your Gmail address
        $mail->Password   = 'whvp zvsq hpsj wikj'; // Your Gmail password or app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
        $mail->Port       = 587; // TCP port to connect to

        // Recipients
        $mail->setFrom($email, $name); // Sender (form submitter)
        $mail->addAddress('besasmcmc@gmail.com', 'From Profile Contact'); // Recipient (your email)

        // Content
        $mail->isHTML(true); // Set email format to HTML        $mail->Subject = "Portfolio Contact: $subject";
        $mail->Body    = "
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Mobile:</strong> {$mobile}</p>
            <p><strong>Subject:</strong> {$subject}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";
        $mail->AltBody = "Name: $name\nEmail: $email\nMobile: $mobile\nSubject: $subject\nMessage: $message"; // Plain text version

        // Send the email
        $mail->send();        echo "<script>
            window.location.href = 'index.php#contact';
        </script>";
        exit();
    } catch (Exception $e) {
        echo "<script>
            alert('Message could not be sent. Please try again later. Error: ' + {$mail->ErrorInfo});
            window.location.href = 'index.php#contact';
        </script>";
        exit();
    }
}
?>