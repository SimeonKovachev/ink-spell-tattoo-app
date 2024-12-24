export const generateConsultationEmail = ({
  name,
  email,
  phone,
  formattedDate,
  timeSlot,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  formattedDate: string;
  timeSlot: string;
  message?: string;
}) => `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Consultation Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f7f7f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <!-- Email wrapper -->
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;">
        <tr>
          <td align="center" bgcolor="#f7f7f7" style="padding: 20px 0;">
            <!-- Email container -->
            <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <!-- Header -->
              <tr>
                <td bgcolor="#8b5cf6" style="padding: 30px 40px; text-align: center;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Your Free Consultation</h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td bgcolor="#ffffff" style="padding: 40px;">
                  <!-- Greeting -->
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #333333;">Hi ${name},</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #333333;">Your free consultation has been confirmed for:</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Appointment Details Box -->
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 20px;">
                        <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #333333;">
                          <strong>Date:</strong> ${formattedDate}
                        </p>
                        <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #333333;">
                          <strong>Time:</strong> ${timeSlot} (30 minutes)
                        </p>
                      </td>
                    </tr>
                  </table>

                  <!-- Customer Details -->
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="padding-bottom: 20px;">
                        <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #444444;">Your Details:</h2>
                        <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #333333;">
                          <strong>Phone:</strong> ${phone}
                        </p>
                        <p style="margin: 0 0 10px 0; font-size: 16px; line-height: 1.5; color: #333333;">
                          <strong>Email:</strong> ${email}
                        </p>
                        ${
                          message
                            ? `
                          <p style="margin: 0; font-size: 16px; line-height: 1.5; color: #333333;">
                            <strong>Message:</strong> ${message}
                          </p>
                        `
                            : ""
                        }
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td bgcolor="#f3f4f6" style="padding: 30px 40px;">
                  <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                      <td style="text-align: center;">
                        <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #666666;">
                          Ink Spell Tattoo Studio
                        </p>
                        <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; color: #666666;">
                          Pleven Center, ul. "Vasil Aprilov" 48
                        </p>
                        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #8b5cf6;">
                          See you soon!
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;
