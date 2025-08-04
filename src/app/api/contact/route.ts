import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // Your email address
            subject: `New contact form submission from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Correo enviado correctamente" })

    }catch (error) {
        console.error("Error in contact form submission:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
    
}