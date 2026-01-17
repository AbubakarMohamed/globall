// api/send-email.js (for Next.js API route)
// You'll need to install nodemailer: npm install nodemailer

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, from, subject, body } = req.body;

  // Validate required fields
  if (!to || !from || !subject || !body) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Configure your email service
    // Replace these with your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASSWORD, // your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: `"${from}" <${process.env.SMTP_USER}>`, // sender address (use your SMTP email)
      to: to, // info@globalbridge.co.ke
      replyTo: from, // user's email for replies
      subject: subject, // enquiry type
      text: body, // plain text body
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <p>${body.replace(/\n/g, '<br>')}</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #666; font-size: 12px;">This email was sent from the contact form at globalbridge.co.ke</p>
      </div>`, // html body
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ 
      message: 'Email sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email',
      error: error.message 
    });
  }
}