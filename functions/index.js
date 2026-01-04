const functions = require("firebase-functions");
const admin = require("firebase-admin");
require('dotenv').config();
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp();

// Create a transporter using Gmail (or other service)
// Note: For Gmail, you might need an App Password if 2FA is enabled.
// It's best to use environment variables for credentials.
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendEmail = functions.https.onCall(async (data, context) => {
    const { name, email, message } = data;

    if (!name || !email || !message) {
        throw new functions.https.HttpsError('invalid-argument', 'Missing required fields');
    }

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "baghcreativeworks@gmail.com", // The destination email
        subject: `New Message from ${name} via BCW Website`,
        text: `
    Name: ${name}
    Email: ${email}
    
    Message:
    ${message}
  `,
        html: `
    <h3>New Message from BCW Website</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("Error sending email:", error);
        throw new functions.https.HttpsError('internal', 'Failed to send email', error.toString());
    }
});