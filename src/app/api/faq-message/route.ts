import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, question } = await req.json();

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
      to: process.env.EMAIL_TO,
      subject: "New FAQ Question from Website",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Question:</strong> ${question}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FAQ Submission Error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
