<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Collect and clean input data
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $subject_input = strip_tags(trim($_POST["subject"]));
    $message = trim($_POST["message"]);

    // 2. Set your destination email address
    $recipient = "sitholelicane0@gmail.com"; 
 

    // 3. Set the email subject line
    $email_subject = "New Portfolio Message: " . ($subject_input ? $subject_input : "No Subject");

    // 4. Build the email body content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // 5. Build the email headers
    $email_headers = "From: $name <$email>\r\n";
    $email_headers .= "Reply-To: $email\r\n";

    // 6. Attempt to send the email
    if (mail($recipient, $email_subject, $email_content, $email_headers)) {
        // Redirect back or echo a success state
        echo "Thank you! Your message has been sent. - contact.php:30";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message. - contact.php:32";
    }
} else {
    echo "There was a problem with your submission, please try again. - contact.php:35";
}
?>