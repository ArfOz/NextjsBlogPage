'use strict';

import { MailData } from './types';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'arfoz1245@gmail.com',
        pass: 'ylknokiouhgfzbqe',
    },
});

// async..await is not allowed in global scope, must use a wrapper
export async function SendMail(data: MailData) {
    // send mail with defined transport object
    const res = await transporter.sendMail({
        from: 'arfoz1245@gmail.com', // sender address
        to: 'arifozkan1245@gmail.com', // list of receivers
        subject: data.Subject, // Subject line
        text: data.Fullname, // plain text body
        html: data.Message, // html body
    });
    if (res.Error) {
        console.log(res.Error);
    }

    return res;

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}
