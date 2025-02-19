// import { NextResponse } from "next/server";
// import Brevo from "@getbrevo/brevo";

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     // เช็คว่าข้อมูลมาครบไหม
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // ดึง API Key จาก .env
//     const apiKey = process.env.BREVO_API_KEY;
//     if (!apiKey) {
//       return NextResponse.json(
//         { error: "Missing Brevo API Key" },
//         { status: 500 }
//       );
//     }

//     // ตั้งค่า Brevo API Client
//     const client = new Brevo.ApiClient();
//     client.authentications["api-key"].apiKey = apiKey;

//     const emailApi = new Brevo.TransactionalEmailsApi(client);
//     const sendSmtpEmail = new Brevo.SendSmtpEmail({
//       sender: { email: process.env.EMAIL_FROM },
//       to: [{ email: process.env.EMAIL_TO }],
//       subject: "New Contact Form Submission",
//       htmlContent: `<h3>New Message from ${name}</h3>
//                     <p><strong>Email:</strong> ${email}</p>
//                     <p><strong>Message:</strong> ${message}</p>`,
//     });

//     // ส่งอีเมล
//     await emailApi.sendTransacEmail(sendSmtpEmail);

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     const response = await fetch("https://api.brevo.com/v3/smtp/email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-key": process.env.BREVO_API_KEY,
//       },
//       body: JSON.stringify({
//         sender: { email: "burgermeat@email.com", name: "Burger meat" },
//         to: [{ email, name }],
//         subject: "Test Email from Brevo",
//         htmlContent: `<p>${message}</p>`,
//         // ถ้ามีอยู่แล้วให้ update
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send email");
//     }

//     return Response.json({
//       success: true,
//       message: "Email sent successfully!",
//     });
//   } catch (error) {
//     return Response.json(
//       { success: false, message: error.message },
//       { status: 500 }
//     );
//   }
// }

// app/api/send-email/route.js
// import { NextResponse } from "next/server";
// import * as SibApiV3Sdk from "@sendinblue/client";
// import { getEmailTemplate } from "@/utils/emailUtils";

// export async function POST(req) {
//   // Example test payload
//   const testEmail = {
//     toEmail: "test@example.com",
//     subject: "Welcome to Our Store!",
//     templateName: "orderConfirmation",
//     templateData: {
//       orderNumber: "ORD123",
//       items: [
//         {
//           name: "Product 1",
//           quantity: 2,
//           price: 29.99,
//         },
//       ],
//       total: 59.98,
//     },
//   };

//   // Send test email
//   await fetch("/api/send-email", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(testEmail),
//   });
//   try {
//     const { toEmail, subject, templateName, templateData } = await req.json();

//     const htmlContent = getEmailTemplate(templateName, templateData);
//     const client = new SibApiV3Sdk.TransactionalEmailsApi();

//     client.setApiKey(
//       SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
//       process.env.BREVO_API_KEY
//     );

//     const emailData = {
//       sender: { email: "no-reply@yourdomain.com", name: "Your Brand" },
//       to: [{ email: toEmail }],
//       subject: subject,
//       htmlContent: htmlContent,
//       // ... additional configuration
//     };

//     const response = await client.sendTransacEmail(emailData);
//     return NextResponse.json({ success: true, response });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return NextResponse.json(
//       { error: "An error occurred while sending the email" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY, // ใช้จาก .env
      },
      body: JSON.stringify({
        sender: { email: "burgermeat@email.com" }, // เปลี่ยนเป็นอีเมลของคุณ
        to: [{ email: "test@email.com", name: "Test User" }],
        subject: "New Contact Form Submission",
        htmlContent: `<p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    if (!response.ok) throw new Error("Failed to send email");

    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    return Response.json({ success: false, message: error.message }, { status: 500 });
  }
}