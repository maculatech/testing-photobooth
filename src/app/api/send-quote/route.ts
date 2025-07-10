import { NextRequest, NextResponse } from 'next/server'
import { sendMail } from '@/app/lib/mail/mailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      phone,
      eventName,
      eventDate,
      startTime,
      endTime,
      duration,
      venueName,
      address,
      guests,
      boothTypes,
      addOns,
      themeRequest,
      contactMethods,
      comment,
    } = body

    await sendMail({
      to: process.env.EMAIL_RECEIVER!,
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event:</strong> ${eventName} on ${eventDate} (${startTime} - ${endTime})</p>
        <p><strong>Duration:</strong> ${duration}</p>
        <p><strong>Venue:</strong> ${venueName}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Booth Types:</strong> ${boothTypes.join(', ')}</p>
        <p><strong>Add-Ons:</strong> ${addOns.join(', ')}</p>
        <p><strong>Theme Request:</strong> ${themeRequest}</p>
        <p><strong>Preferred Contact Methods:</strong> ${contactMethods.join(', ')}</p>
        <p><strong>Additional Comment:</strong> ${comment}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Mail error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
