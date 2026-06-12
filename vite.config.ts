import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { Resend } from 'resend';

const resendEndpointPlugin = (mode: string): Plugin => {
  const env = loadEnv(mode, process.cwd(), '');
  const resendApiKey = env.RESEND_API_KEY;
  const resendFromEmail = env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';
  const resendToEmail = env.RESEND_TO_EMAIL ?? '';

  const register = (server: import('vite').ViteDevServer | import('vite').PreviewServer) => {
    server.middlewares.use('/api/send', async (req, res, next) => {
      if (req.method !== 'POST') {
        next();
        return;
      }

      if (!resendApiKey) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Missing RESEND_API_KEY' }));
        return;
      }

        if (!resendToEmail) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Missing RESEND_TO_EMAIL' }));
          return;
        }

      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        chunks.push(Buffer.from(chunk));
      }

      try {
        const payload = JSON.parse(Buffer.concat(chunks).toString('utf8')) as {
          name?: string;
          email?: string;
          project?: string;
        };

        const name = String(payload.name ?? '').trim();
        const email = String(payload.email ?? '').trim();
        const project = String(payload.project ?? '').trim();

        if (!name || !email || !project) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ message: 'Missing required fields' }));
          return;
        }

        const resend = new Resend(resendApiKey);
        const { error } = await resend.emails.send({
          from: `Stackd Agency <${resendFromEmail}>`,
          to: [resendToEmail],
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
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error }));
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true }));
      } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
      }
    });
  };

  return {
    name: 'resend-endpoint',
    configureServer(server) {
      register(server);
    },
    configurePreviewServer(server) {
      register(server);
    },
  };
};

export default defineConfig(({ mode }) => ({
  plugins: [react(), resendEndpointPlugin(mode)],
}));
