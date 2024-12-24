import { client } from "@/lib/client";
import { sendConsultationEmail } from "@/lib/emails/sendConsultationEmail";
import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, appointmentDate, timeSlot, message } =
      await req.json();

    const [hours, minutes] = timeSlot.split(":");
    const startDate = new Date(appointmentDate);
    startDate.setHours(parseInt(hours), parseInt(minutes), 0);

    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30);
    const formatDateForICS = (date: Date) => {
      return format(date, "yyyyMMdd'T'HHmmss'Z'");
    };

    const studioEmail =
      process.env.EMAIL_FROM || "iva.lazarova.draws@gmail.com";
    const studioName = "Ink Spell Tattoo Studio";

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ink Spell Tattoo Studio//Consultation Booking//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:REQUEST",
      "BEGIN:VEVENT",
      `UID:${Date.now()}@inkspell.tattoo`,
      `DTSTAMP:${formatDateForICS(new Date())}`,
      `DTSTART:${formatDateForICS(startDate)}`,
      `DTEND:${formatDateForICS(endDate)}`,
      "STATUS:CONFIRMED",
      `ORGANIZER;CN="${studioName}":mailto:${studioEmail}`,
      `SUMMARY:Free Consultation at Ink Spell Tattoo Studio`,
      `DESCRIPTION:Free consultation with ${name}\\nPhone: ${phone}\\nMessage: ${
        message || "N/A"
      }`,
      "LOCATION:Pleven Center\\, ul. Vasil Aprilov 48\\, 5809 Pleven",
      "BEGIN:VALARM",
      "TRIGGER:-PT15M",
      "ACTION:DISPLAY",
      "DESCRIPTION:Reminder",
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    await client.create({
      _type: "booking",
      name,
      email,
      phone,
      appointmentDate,
      timeSlot,
      message,
    });

    const formattedDate = format(new Date(appointmentDate), "MMMM do, yyyy");

    await sendConsultationEmail({
      name,
      email,
      phone,
      formattedDate,
      timeSlot,
      message,
      icsContent,
    });

    return new Response(icsContent, {
      headers: {
        "Content-Type": "text/calendar; method=REQUEST",
        "Content-Disposition": 'attachment; filename="consultation.ics"',
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
