import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL ?? 'selvamariyappan2@gmail.com';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, project } = req.body;

    if (!name || !email || !project) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const { data, error } = await resend.emails.send({
      from: `Stackd Agency <${RESEND_FROM_EMAIL}>`,
      to: [RESEND_TO_EMAIL],
      replyTo: email,
      subject: `New Project Enquiry from ${name}`,
      html: `
        <h2>New Project Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong></p>
        <p>${project.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      return res.status(error.statusCode ?? 400).json({
        message:
          error.message ??
          'Resend rejected the message. In testing mode, emails can only be sent to the account owner inbox.',
        error,
      });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}
