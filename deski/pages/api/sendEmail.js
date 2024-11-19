const nodemailer = require("nodemailer");

 // Set up Nodemailer transporter
 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Change this to your email provider's SMTP server
    port: 587, 
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, 
    },
});


export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, message } = req.body;

        try {
            // Send the email
            const mailOptions = {
                from: email, // The user's email
                to: process.env.RECEIVER_EMAIL, // Your email where messages are received
                subject: `New Contact Form Submission from ${firstName} ${lastName}`,
                text: `You have received a new message from ${firstName} ${lastName}.\n\nMessage: ${message}\n\nReply to: ${email}`,
            };

            await transporter.sendMail(mailOptions);

            // Respond with success
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        // Handle invalid HTTP methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
