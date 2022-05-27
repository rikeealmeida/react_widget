import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "fbf57a4eb7e65d",
        pass: "214295c9b691b1"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Henrique Almeida <rickwow123@gmail.com>',
            subject,
            html: body,
        })

    }
}