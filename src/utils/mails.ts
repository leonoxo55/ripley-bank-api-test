import nodemailer from 'nodemailer';
import { transporter } from '../config/mailer';

const mailSender = async function main(user: any, transfer: any, recipient: any) {
  const emailConfig = transporter;
  let info = await emailConfig.sendMail({
    from: '"Bank api test" <no-reply-bank@test.com>',
    to: user.email,
    subject: "Transferencia",
    html: `
      <div>
          <span>Aviso de transferencia</span><br>
          <span>Se ha realizado una transferencia desde su cuenta bancaria</span><br><br>

          <span>Detalle de transferecia:</span><br>
          <span>Nombre Destinatario: <strong>${recipient.name}</strong><br>
          <span>Rut Destinatario: <strong>${recipient.rut}</strong><br>
          <span>Banco de destino: <strong>${transfer.bank}</strong><br>
          <span>Cuenta de destino: <strong>${recipient.account}</strong><br>
          <span>Monto transferido: <strong>${transfer.amount}</strong><br>
          
      <div>
      `
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export default mailSender;