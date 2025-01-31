"use server"
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {

    const body = await req.json();

    let transporter = nodemailer.createTransport({
        host: "mail.service.nexospace.site",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Email from Website - " + body.email,
        text: body.message
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent", success: true }, { status: 200 });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ message: "Error", success: false }, { status: 500 });
    }

}