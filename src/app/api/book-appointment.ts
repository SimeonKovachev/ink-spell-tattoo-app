import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, phone, appointmentDate, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "465"),
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: `${email}, support@ink-spell.com`,
        subject: "Tattoo Appointment Confirmation",
        html: `<h2>Thank you for booking!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Appointment Date:</strong> ${appointmentDate}</p>
          <p><strong>Message:</strong> ${message}</p>`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Appointment booked successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error booking appointment" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
