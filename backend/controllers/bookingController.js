const emailService = require('../services/emailService');

exports.createBooking = async (req, res) => {
    const { name, email, car, details } = req.body;

    if (!name || !email || !car) {
        return res.status(400).json({ message: 'Name, email, and car model & year are required.' });
    }

    try {
        await emailService.sendBookingNotification({ name, email, car, details });
        res.status(200).json({ message: 'Booking request sent successfully!' });
    } catch (error) {
        console.error('Error sending booking email:', error);
        res.status(500).json({ message: 'Failed to send booking request.' });
    }
};