require('dotenv').config();
import { addEmailColumn } from '@/integrations/monday';

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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, sendMessage } = req.body;

    try {
      // Step 1: Send the email using nodemailer
      const info = await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`, // Sender's email
        to: "tessa@loveandlearnnanny.com", // Your recipient's email
        subject: `📪 ${firstName} ${lastName}`, // Subject line
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

      // Step 2: Add a delay before calling addEmailColumn
      const delay = 5000; // Delay in milliseconds
      console.log(`Waiting ${delay} ms before updating Monday.com...`);
      await sleep(delay);

      // Step 3: Update the email column in Monday.com
      console.log("Updating Monday.com...");
      const response = await addEmailColumn("7887121862", `📪 ${firstName} ${lastName}`, email);

      if (response) {
        console.log("Email column updated successfully:", response);
        res.status(200).json({ message: "Email sent and Monday.com updated successfully" });
      } else {
        console.error("Failed to update Monday.com");
        res.status(500).json({ error: "Failed to update Monday.com after sending email" });
      }
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
