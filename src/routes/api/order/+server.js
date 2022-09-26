import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
// import dotenv from 'dotenv';

// dotenv.config();

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const data = await request.json();
  
  let status = await sendEmail(data);

  return json(status);

}

async function sendEmail(message) {
    
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: platform.env.SENDER_EMAIL,
            pass: platform.env.SENDER_PASS
        }
    })

    let text = JSON.stringify(message.text);

    // Transform the message.text into a formatted string
    let formattedText = text.replace(/,/g, "\n") 
    formattedText = formattedText.replace(/:/g, ": ")
    formattedText = formattedText.replace(/"/g, "")
    formattedText = formattedText.replace(/{/g, "")
    formattedText = formattedText.replace(/}/g, "")
    formattedText = formattedText.replace(/\\/g, "")
    
    try {
        let info = await transporter.sendMail({
            from: platform.env.SENDER_EMAIL,
            to: platform.env.RECEIVER_EMAIL,
            subject: message.subject,
            text: formattedText
        })
    } catch (err) {
        console.log(err)
        return false;
    }

    return true;
}

 
