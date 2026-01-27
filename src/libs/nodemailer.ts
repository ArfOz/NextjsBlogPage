import { MailData } from '../app/api/sendemail/types'

// By default use a lightweight stub to avoid importing CommonJS-only
// `nodemailer` at build time (which can confuse Turbopack). To enable
// real sending, set `ENABLE_REAL_EMAIL=1` in the environment; the code
// will attempt a dynamic import at runtime.
export async function SendMail(data: MailData) {
    if (process.env.ENABLE_REAL_EMAIL === '1') {
        try {
            const nodemailer = await import('nodemailer')
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_PASS,
                },
            })

            const res = await transporter.sendMail({
                from: process.env.EMAIL_ADDRESS,
                to: process.env.EMAIL_ADDRESS_TO,
                subject: data.Subject,
                text: `${data.Fullname} from ${data.Message} Email:${data.Email}`,
            })
            return res
        } catch (error) {
            return { Error: String(error) }
        }
    }

    // Stubbed response used during build/diagnostics
    // Keeps the same shape used by callers (lightweight)
    // and avoids runtime dependency on `nodemailer`.
    // eslint-disable-next-line no-console
    console.log(
        '[SendMail stub] to=',
        process.env.EMAIL_ADDRESS_TO,
        'payload=',
        data,
    )
    return {
        accepted: [process.env.EMAIL_ADDRESS_TO || 'stub@example.com'],
        messageId: 'stubbed-email-id',
    }
}
