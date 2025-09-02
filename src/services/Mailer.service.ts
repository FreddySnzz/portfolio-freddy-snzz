import FormData from "form-data";
import Mailgun from "mailgun.js"; 

interface EmailProps {
  senderEmail: string,
  message: string
}

export async function sendSimpleMessage({ senderEmail, message }: EmailProps) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "root",
    key: process.env.NEXT_PUBLIC_MAILER_API_KEY!,
    url: process.env.NEXT_PUBLIC_MAILER_BASE_URL
  });

  const templateHtml = `
    <!doctype html>
    <html lang="pt-br">
      <head>
        <style>
          body { margin:0; padding:0; background:#0b0f14; }
          .wrapper { width:100%; }
          .container {
            width:100%;
            max-width:600px;
            margin:0 auto;
            background:#0f172a;
          }
          .p { padding:24px; }
          .title { font:700 20px/1.3 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#e5e7eb; margin:0 0 12px; }
          .text  { font:400 16px/1.6 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#cbd5e1; margin:0; }
          .label { color:#94a3b8; font-size:14px; }
          .blockquote {
            margin:16px 0 0;
            padding:12px 16px;
            border-left:4px solid #60a5fa;
            background:#111827;
            color:#e5e7eb;
            white-space:pre-wrap;
          }
          .footer { font:12px/1.4 system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#64748b; padding:16px 24px 24px; }
        </style>
      </head>
      <body>
        <table role="presentation" class="wrapper" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              <table role="presentation" class="container" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="p">
                    <h1 class="title">Você recebeu uma nova mensagem</h1>
                    <p class="text">
                      <span class="label">Remetente:</span><br />
                      <strong>${senderEmail}</strong>
                    </p>
                    <p class="text"><span class="label">Disse:</span></p>
                    <div class="blockquote">${message}</div>
                  </td>
                </tr>
                <tr>
                  <td class="footer">
                    Este e-mail foi gerado automaticamente. Não responda a este endereço.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>

  `

  try {
    const data = await mg.messages.create(
      process.env.NEXT_PUBLIC_DOMAIN!, {
        from: `Mailgun Sandbox <postmaster@${process.env.NEXT_PUBLIC_DOMAIN!}>`,
        to: ["Fredson Luiz <fredsonluiz.03@gmail.com>"],
        subject: "CONTATO - Portfolio",
        html: templateHtml
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  };
};