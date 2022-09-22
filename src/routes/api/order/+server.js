import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env);

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();
  
  let status = await sendEmail(data);

  return json(status);

}

async function sendEmail(message) {
    console.log("Sending email...")
    console.log(message);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASS
        }
    })

    console.log(process.env.SENDER_EMAIL)
    console.log(process.env.SENDER_PASS)

    let info = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: message.subject,
        text: message.text
    })

    console.log(info);

    return true;
}

 