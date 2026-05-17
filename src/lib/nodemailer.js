import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export async function sendContactMail(name, email) {

    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Message Received 🚀",

        html: `
            <div style="font-family:sans-serif;">

                <h2>Thanks for reaching out, ${name}!</h2>

                <p>
                    Your message has been received successfully.
                </p>

                <p>
                    I'll get back to you soon.
                </p>

                <br/>

                <p>
                    — Vishankh Bhardwaj
                </p>

            </div>
        `,
    });
}