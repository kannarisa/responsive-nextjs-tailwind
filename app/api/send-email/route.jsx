export async function POST(req) {
  console.log("BREVO_API_KEY:", process.env.BREVO_API_KEY);
  if (!process.env.BREVO_API_KEY) {
    return res.status(500).json({ error: "BREVO_API_KEY is missing" });
  }

  try {
    const { name, email, message } = await req.json();

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY, // ใช้จาก .env
      },
      body: JSON.stringify({
        sender: { email: process.env.EMAIL_FROM },
        to: [{ email: process.env.EMAIL_TO, name: "" }],
        subject: "New Contact Form Submission",
        htmlContent: `<p><strong>Name:</strong> ${name}</p>
                      <p><strong>Email:</strong> ${email}</p>
                      <p><strong>Message:</strong> ${message}</p>`,
      }),
    });

    if (!response.ok) throw new Error("Failed to send email");

    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
