import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Professional corporate HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Inquiry - Mahaveer Medi-Sales</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 50px 20px;">
        <tr>
          <td align="center">
            <table width="650" cellpadding="0" cellspacing="0" style="background-color: #ffffff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
              
              <!-- Logo Header -->
              <tr>
                <td style="padding: 40px 50px 30px; border-bottom: 1px solid #e9ecef;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="60">
                        <img src="${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'}/mahaveer-logo.avif" alt="Mahaveer Medi" width="50" height="50" style="display: block; border-radius: 8px;" />
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #1a1a1a; letter-spacing: -0.3px;">
                          Mahaveer Medi-Sales
                        </h2>
                        <p style="margin: 2px 0 0 0; font-size: 13px; color: #6c757d; font-weight: 400;">
                          New Website Inquiry
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Main Content -->
              <tr>
                <td style="padding: 45px 50px;">
                  
                  <p style="margin: 0 0 8px 0; font-size: 14px; color: #495057; font-weight: 500;">
                    New Contact Submission
                  </p>
                  <h1 style="margin: 0 0 30px 0; font-size: 24px; font-weight: 600; color: #212529; line-height: 1.3;">
                    You have received a new inquiry
                  </h1>
                  
                  <!-- Contact Details -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 35px;">
                    <tr>
                      <td style="padding: 20px 0; border-bottom: 1px solid #e9ecef;">
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.8px;">
                          Contact Name
                        </p>
                        <p style="margin: 0; font-size: 16px; color: #212529; font-weight: 500;">
                          ${name}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 0; border-bottom: 1px solid #e9ecef;">
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.8px;">
                          Email Address
                        </p>
                        <p style="margin: 0; font-size: 16px;">
                          <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
                        </p>
                      </td>
                    </tr>
                    ${phone ? `
                    <tr>
                      <td style="padding: 20px 0; border-bottom: 1px solid #e9ecef;">
                        <p style="margin: 0 0 8px 0; font-size: 12px; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.8px;">
                          Phone Number
                        </p>
                        <p style="margin: 0; font-size: 16px;">
                          <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">${phone}</a>
                        </p>
                      </td>
                    </tr>
                    ` : ''}
                  </table>
                  
                  <!-- Message -->
                  <div style="background-color: #f8f9fa; border-left: 3px solid #059669; padding: 25px 25px; margin-bottom: 35px;">
                    <p style="margin: 0 0 10px 0; font-size: 12px; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.8px;">
                      Message
                    </p>
                    <p style="margin: 0; font-size: 15px; color: #495057; line-height: 1.7; white-space: pre-wrap;">
${message}
                    </p>
                  </div>
                  
                  <!-- Action Button -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <a href="mailto:${email}?subject=Re: Your inquiry to Mahaveer Medi-Sales" 
                           style="display: inline-block; background-color: #059669; color: #ffffff; text-decoration: none; padding: 13px 28px; border-radius: 6px; font-size: 14px; font-weight: 500; letter-spacing: 0.3px;">
                          Reply to Inquiry
                        </a>
                      </td>
                    </tr>
                  </table>
                  
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 30px 50px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin: 0 0 4px 0; font-size: 12px; color: #6c757d;">
                          Received: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Company Info Footer -->
              <tr>
                <td style="padding: 25px 50px; background-color: #212529;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #ffffff; font-weight: 500;">
                          Mahaveer Medi-Sales Pvt. Ltd.
                        </p>
                        <p style="margin: 0; font-size: 13px; color: #adb5bd; line-height: 1.6;">
                          Mahaveer Arcade, Sirsi Road, Bengaluru<br>
                          Phone: 080-45655000<br>
                          Email: info@mahaveersales.com
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
            </table>
            
            <!-- Legal Footer -->
            <table width="650" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
              <tr>
                <td style="padding: 0 20px;">
                  <p style="margin: 0; font-size: 11px; color: #6c757d; text-align: center; line-height: 1.5;">
                    This email was sent from the Mahaveer Medi-Sales contact form.<br>
                    © ${new Date().getFullYear()} Mahaveer Medi-Sales Pvt. Ltd. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
            
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Customer acknowledgement email template
    const customerAcknowledgementTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Mahaveer Medi-Sales</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 50px 20px;">
        <tr>
          <td align="center">
            <table width="650" cellpadding="0" cellspacing="0" style="background-color: #ffffff; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
              
              <!-- Logo Header -->
              <tr>
                <td style="padding: 40px 50px 30px; border-bottom: 1px solid #e9ecef;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td width="60">
                        <img src="${process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com'}/mahaveer-logo.avif" alt="Mahaveer Medi" width="50" height="50" style="display: block; border-radius: 8px;" />
                      </td>
                      <td style="padding-left: 15px; vertical-align: middle;">
                        <h2 style="margin: 0; font-size: 20px; font-weight: 600; color: #1a1a1a; letter-spacing: -0.3px;">
                          Mahaveer Medi-Sales
                        </h2>
                        <p style="margin: 2px 0 0 0; font-size: 13px; color: #6c757d; font-weight: 400;">
                          India's Leading Medicine Supplier
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Main Content -->
              <tr>
                <td style="padding: 45px 50px;">
                  
                  <h1 style="margin: 0 0 20px 0; font-size: 26px; font-weight: 600; color: #212529; line-height: 1.3;">
                    Thank you for reaching out, ${name.split(' ')[0]}
                  </h1>
                  
                  <p style="margin: 0 0 25px 0; font-size: 16px; color: #495057; line-height: 1.7;">
                    We have successfully received your inquiry and appreciate you taking the time to contact us. Our team will review your message and get back to you as soon as possible.
                  </p>
                  
                  <!-- Expected Response Time -->
                  <div style="background-color: #e7f5ee; border-left: 3px solid #059669; padding: 20px 25px; margin-bottom: 30px;">
                    <p style="margin: 0; font-size: 14px; color: #059669; font-weight: 600;">
                      Expected Response Time
                    </p>
                    <p style="margin: 8px 0 0 0; font-size: 15px; color: #495057; line-height: 1.6;">
                      Our team typically responds within <strong>24-48 hours</strong> during business days. For urgent matters, please call us at <a href="tel:08045655000" style="color: #059669; text-decoration: none; font-weight: 500;">080-45655000</a>.
                    </p>
                  </div>
                  
                  <!-- Summary of Submission -->
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #495057; font-weight: 500;">
                    Here's a summary of what you submitted:
                  </p>
                  
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
                    <tr>
                      <td>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                              <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; font-weight: 500;">
                                YOUR NAME
                              </p>
                              <p style="margin: 0; font-size: 15px; color: #212529;">
                                ${name}
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                              <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; font-weight: 500;">
                                YOUR EMAIL
                              </p>
                              <p style="margin: 0; font-size: 15px; color: #212529;">
                                ${email}
                              </p>
                            </td>
                          </tr>
                          ${phone ? `
                          <tr>
                            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                              <p style="margin: 0 0 5px 0; font-size: 12px; color: #6c757d; font-weight: 500;">
                                YOUR PHONE
                              </p>
                              <p style="margin: 0; font-size: 15px; color: #212529;">
                                ${phone}
                              </p>
                            </td>
                          </tr>
                          ` : ''}
                          <tr>
                            <td style="padding: 12px 0 0 0;">
                              <p style="margin: 0 0 8px 0; font-size: 12px; color: #6c757d; font-weight: 500;">
                                YOUR MESSAGE
                              </p>
                              <p style="margin: 0; font-size: 15px; color: #495057; line-height: 1.7; white-space: pre-wrap;">
${message}
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <p style="margin: 0 0 25px 0; font-size: 15px; color: #495057; line-height: 1.7;">
                    In the meantime, feel free to explore our services or learn more about how we've been serving India's healthcare sector for over 20 years.
                  </p>
                  
                  <p style="margin: 0; font-size: 15px; color: #495057;">
                    Best regards,<br>
                    <strong style="color: #212529;">Mahaveer Medi-Sales Team</strong>
                  </p>
                  
                </td>
              </tr>
              
              <!-- Contact Info Section -->
              <tr>
                <td style="padding: 30px 50px; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
                  <p style="margin: 0 0 15px 0; font-size: 14px; color: #212529; font-weight: 600;">
                    Need Immediate Assistance?
                  </p>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding: 8px 0;">
                        <p style="margin: 0; font-size: 14px; color: #495057;">
                          <strong style="color: #212529;">Phone:</strong> <a href="tel:08045655000" style="color: #059669; text-decoration: none;">080-45655000</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <p style="margin: 0; font-size: 14px; color: #495057;">
                          <strong style="color: #212529;">Email:</strong> <a href="mailto:info@mahaveersales.com" style="color: #059669; text-decoration: none;">info@mahaveersales.com</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <p style="margin: 0; font-size: 14px; color: #495057;">
                          <strong style="color: #212529;">Office:</strong> Mahaveer Arcade, Sirsi Road, Bengaluru
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Company Info Footer -->
              <tr>
                <td style="padding: 25px 50px; background-color: #212529;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin: 0 0 10px 0; font-size: 14px; color: #ffffff; font-weight: 500;">
                          Mahaveer Medi-Sales Pvt. Ltd.
                        </p>
                        <p style="margin: 0; font-size: 13px; color: #adb5bd; line-height: 1.6;">
                          With over 20 years of experience, we have built a reputation for being the leading wholesale medicine supplier in India.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
            </table>
            
            <!-- Legal Footer -->
            <table width="650" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
              <tr>
                <td style="padding: 0 20px;">
                  <p style="margin: 0; font-size: 11px; color: #6c757d; text-align: center; line-height: 1.5;">
                    This is an automated confirmation email. Please do not reply directly to this message.<br>
                    © ${new Date().getFullYear()} Mahaveer Medi-Sales Pvt. Ltd. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
            
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Email to company
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,
      text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}\n\nReceived: ${new Date().toLocaleString()}`,
      html: htmlTemplate,
    };

    // Acknowledgement email to customer
    const customerMailOptions = {
      from: `"Mahaveer Medi-Sales" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for contacting Mahaveer Medi-Sales`,
      text: `Dear ${name},\n\nThank you for reaching out to Mahaveer Medi-Sales. We have received your inquiry and will respond within 24-48 hours.\n\nYour message:\n${message}\n\nFor urgent matters, please call us at 080-45655000.\n\nBest regards,\nMahaveer Medi-Sales Team`,
      html: customerAcknowledgementTemplate,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerMailOptions);
    
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
  }
}

export function OPTIONS() {
  return NextResponse.json(null, {
    status: 204,
    headers: {
      Allow: 'POST',
    },
  });
}