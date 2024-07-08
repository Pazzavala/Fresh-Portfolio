'use server';
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);


// We see the info on out server now by using actions 
export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if (!validateString(senderEmail, 500)) {
        return {error: "invalid sender email"};
    }

    if (!validateString(message, 5000)) {
        return {error: "invalid message"};
    }

    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'pazrodriguez612@gmail.com',
            subject: 'message from contact form',
            reply_to: senderEmail as string,
            text: message as string
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }
    
};