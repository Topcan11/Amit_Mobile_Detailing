const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendBookingNotification = async (bookingDetails) => {
    const { name, email, car, details } = bookingDetails;

    const mailOptions = {
        from: `"Amit Mobile Detailing" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'New Booking Request',
        html: `
            <h2>New Booking Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Car Model & Year:</strong> ${car}</p>
            <p><strong>Service Details / Special Requests:</strong></p>
            <p>${details}</p>
        `,
    };

    return transporter.sendMail(mailOptions);
};