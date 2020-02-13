"use strict";

const nodemailer = require('nodemailer');

async function main() {
    // Generate test SMTP service account from ethereal.com for testing
    // let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // false for other ports,
        auth: {
            user: 'example1@gmail.com',
            pass: 'example1 password'
        }
    })

    let info = await transporter.sendMail({
        from: '"Display Name ⛅" <example1@gmail.com>',
        to: "example2@gmail.com, example3@gmail.com",
        subject: "Hello",
        text: "Hello world",
        html: "<img src='https://nodemailer.com/nm_logo_200x136.png' with='100' />"
    })

    console.log('Message sent: %s. %s', info.messageId, info.response)
}

main().catch(console.error);


// Error:
// Invalid login: 535-5.7.8 Username and Password not accepted.
// --------------------------------------
// Resolved:
// Enable: https://myaccount.google.com/lesssecureapps?pli=1