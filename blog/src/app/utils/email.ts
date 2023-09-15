import nodemailer from 'nodemailer';
import { EmailForm } from '../components/ContactForm';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
})

export async function sendEmail({ subject, from, message }: EmailForm) {
  const mailData = {
    to: process.env.AUTH_USER,
    subject: `[Blog] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
  }
  return transporter.sendMail(mailData)

}