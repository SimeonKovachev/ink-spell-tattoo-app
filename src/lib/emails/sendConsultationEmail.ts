import nodemailer from "nodemailer";
import { generateConsultationEmail } from "./templates/consultation";

export const sendConsultationEmail = async ({
  name,
  email,
  phone,
  formattedDate,
  timeSlot,
  message,
  icsContent,
}: {
  name: string;
  email: string;
  phone: string;
  formattedDate: string;
  timeSlot: string;
  message?: string;
  icsContent: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: `${email}, ${process.env.EMAIL_FROM}`,
    subject: "Free Consultation Confirmation - Ink Spell Tattoo Studio",
    html: generateConsultationEmail({
      name,
      email,
      phone,
      formattedDate,
      timeSlot,
      message,
    }),
    attachments: [
      {
        filename: "consultation.ics",
        content: icsContent,
        contentType: "text/calendar; method=REQUEST",
      },
    ],
  });
};
