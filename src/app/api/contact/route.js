import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { sendContactMail } from "@/lib/nodemailer";
export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                message
            }
        });
        const mailPromise = await sendContactMail(name, email);
        return NextResponse.json({ message: "Contact created successfully" }, { status: 201 });
    } catch (error) {
        console.error("Error creating contact:", error);
        return NextResponse.json({ error: "Failed to create contact" }, { status: 500 });
    }
}