import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send notification email to Will
    await transporter.sendMail({
      from: `"Elevate Assured Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Assessment Enquiry – ${service} – ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 22px;">New Assessment Enquiry</h1>
          </div>
          <div style="padding: 32px; background-color: #f9f9f9; border: 1px solid #e0e0e0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; width: 35%;">
                  <strong style="color: #555;">Name</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #1a1a1a;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <strong style="color: #555;">Email</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #1a1a1a;">
                  <a href="mailto:${email}" style="color: #c9a84c;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <strong style="color: #555;">Phone</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #1a1a1a;">
                  <a href="tel:${phone}" style="color: #c9a84c;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">
                  <strong style="color: #555;">Service</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #1a1a1a;">
                  ${service}
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 10px 0; vertical-align: top;">
                  <strong style="color: #555;">Message</strong>
                </td>
                <td style="padding: 10px 0; color: #1a1a1a; white-space: pre-wrap;">
                  ${message}
                </td>
              </tr>
              ` : ''}
            </table>
          </div>
          <div style="padding: 16px; background-color: #1a1a1a; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
              Sent from the Elevate Assured website contact form
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: `"Elevate Assured" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We've received your enquiry – Elevate Assured`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a1a1a; padding: 24px; text-align: center;">
            <h1 style="color: #c9a84c; margin: 0; font-size: 22px;">Elevate Assured</h1>
          </div>
          <div style="padding: 32px; background-color: #f9f9f9; border: 1px solid #e0e0e0;">
            <p style="color: #1a1a1a; font-size: 16px;">Hi ${name},</p>
            <p style="color: #555; line-height: 1.6;">
              Thanks for getting in touch. We've received your enquiry for <strong>${service}</strong> and will be in contact within 24 hours to discuss your £99 assessment.
            </p>
            <p style="color: #555; line-height: 1.6;">
              In the meantime, if you need to reach us urgently:
            </p>
            <p style="margin: 0;">
              <a href="tel:01202619792" style="color: #c9a84c; font-weight: bold; font-size: 16px;">01202 619792</a>
            </p>
          </div>
          <div style="padding: 16px; background-color: #1a1a1a; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
              Elevate Assured · will@elevateassured.co.uk
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Enquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
