'use server';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request): Promise<Response> {
    try {
        // Parsing JSON body from the request
        const body = await request.json();
        const { firstname, lastname, email, phone, company, message } = body;

        // Construct the message object for SendGrid
        const emailContent = {
            to: ['aldo@thebrandingbull.com', 'dbotturi@redtailtelematics.com'], // Specify the recipient email address
            from: 'redtail@thebrandingbull.com', // Specify your verified SendGrid sender email
            subject: 'Redtail Landing Page Lead',
            text: `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
            html: `
                <strong>First Name:</strong> ${firstname}<br>
                <strong>Last Name:</strong> ${lastname}<br>
                <strong>Company:</strong> ${company}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Phone:</strong> ${phone}<br><hr>
                <strong>Message:</strong> ${message}<br>
            `,
        };

        // Send the email using SendGrid
        await sgMail.send(emailContent);

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Failed to send email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}