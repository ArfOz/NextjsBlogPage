'use strict';

import { MailData } from './types';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
    },
});

// async..await is not allowed in global scope, must use a wrapper
export async function SendMail(data: MailData) {
    // send mail with defined transport object
    try {
        const res = await transporter.sendMail({
            from: 'arfoz1245@gmail.com', // sender address
            to: 'arifozkan1245@gmail.com', // list of receivers
            subject: data.Subject, // Subject line
            text: `${data.Fullname} from ${data.Message} Email:${data.Email}`, // html body
        });
        return res;
    } catch (error) {
        return { Error: JSON.stringify(error) };
    }
}
