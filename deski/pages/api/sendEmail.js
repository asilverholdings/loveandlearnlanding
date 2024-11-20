require('dotenv').config();

const nodemailer = require("nodemailer");
const SMPT_USER = process.env.SMPT_USER;
const SMPT_PASS = process.env.SMPT_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: SMPT_USER,
    pass: SMPT_PASS,
  },
});

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { firstName, lastName, email, sendMessage } = req.body;
  
      try {
        // Send the email using nodemailer
        const info = await transporter.sendMail({
          from: `"${firstName} ${lastName}" <${email}>`, // Sender's email
          to: "tessa@loveandlearnnanny.com", // Your recipient's email
          subject: `🆕➡📪 ${firstName} ${lastName}`, // Subject line
          text: `
            Message: ${sendMessage}
          
            From: ${firstName} ${lastName}
            Email: ${email} 
          `, // Plain text body with the user's email included
          html: `
            <p><strong>Message:</strong> ${sendMessage}</p>
            <p><strong>From:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
          `, // HTML body with the user's email included
        });
  
        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: "Email sent successfully" });
      } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
