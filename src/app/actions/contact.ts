"use server";

import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data server-side
    const validatedData = contactSchema.parse(data);

    // TODO: Integrate email provider here (e.g., Resend, SendGrid, SMTP)
    // For now, we simulate a network request and log the submission
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Contact form submitted successfully:", validatedData);

    return { success: true, message: "Your message has been sent successfully. We will get back to you shortly." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Validation failed. Please check the form fields." };
    }
    
    console.error("Error submitting contact form:", error);
    return { success: false, error: "An unexpected error occurred. Please try again later." };
  }
}
