import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/app/lib/mail/mailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, email, phone, message } = body;

    await sendMail({
      to: process.env.EMAIL_RECEIVER!, // Your email or company inbox
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Mail error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
