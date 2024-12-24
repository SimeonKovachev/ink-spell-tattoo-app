import { client } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, appointmentDate, timeSlot, message } =
      await req.json();

    const startTime = `${appointmentDate}T${timeSlot.replace(":", "")}00`;
    const endTime = `${appointmentDate}T${(parseInt(timeSlot.split(":")[0]) + 1)
      .toString()
      .padStart(2, "0")}${timeSlot.split(":")[1]}00`;

    await client.create({
      _type: "booking",
      name,
      email,
      phone,
      appointmentDate,
      timeSlot,
      message,
    });

    const icsContent = `
      BEGIN:VCALENDAR
      VERSION:2.0
      CALSCALE:GREGORIAN
      BEGIN:VEVENT
      SUMMARY:Appointment with Ink-Spell Tattoo
      DESCRIPTION:Appointment with ${name}. Phone: ${phone}. Message: ${message || "N/A"}.
      DTSTART:${startTime}
      DTEND:${endTime}
      LOCATION:Pleven Center, ul. "Vasil Aprilov" 48, 5809 Pleven
      END:VEVENT
      END:VCALENDAR
    `.trim();

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
      subject: "Tattoo Appointment Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <header style="background-color: #8b5cf6; padding: 20px; text-align: center; color: #fff;">
            <h1>Your Tattoo Appointment</h1>
          </header>
          <main style="padding: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Date:</strong> ${appointmentDate}</p>
            <p><strong>Time Slot:</strong> ${timeSlot}</p>
            <p><strong>Message:</strong> ${message}</p>
          </main>
          <footer style="background-color: #f3f4f6; padding: 10px; text-align: center; font-size: 0.9em; color: #666;">
            <p>Ink-Spell Tattoo Studio</p>
            <p>Pleven Center, ul. "Vasil Aprilov" 48, 5809 Pleven</p>
          </footer>
        </div>
      `,
      attachments: [
        {
          filename: "appointment.ics",
          content: icsContent,
          contentType: "text/calendar",
        },
      ],
    });

    return new Response(icsContent, {
      headers: {
        "Content-Type": "text/calendar",
        "Content-Disposition": `attachment; filename="tattoo_appointment.ics"`,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to book appointment." },
      { status: 500 }
    );
  }
}

export function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
