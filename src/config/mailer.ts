import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    secure: true,
    port: 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify().then(() => {
    console.log('Ready for send emails');
})