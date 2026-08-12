"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitContactForm } from "@/app/actions/contact";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

// This matches the schema in the server action
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("submitting");
    
    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setSubmitStatus("success");
        setServerMessage(result.message || "");
        reset();
      } else {
        setSubmitStatus("error");
        setServerMessage(result.error || "");
      }
    } catch (error) {
      setSubmitStatus("error");
      setServerMessage("An unexpected error occurred. Please try again.");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-surface rounded-2xl p-8 md:p-12 flex flex-col items-center text-center border border-border/50 h-full justify-center min-h-[500px]">
        <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="text-2xl font-bold font-manrope text-primary mb-4">Message Sent Successfully</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          {serverMessage || "Thank you for reaching out. A member of our team will get back to you shortly."}
        </p>
        <Button onClick={() => setSubmitStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 border border-border/50 shadow-sm relative">
      <h3 className="text-2xl font-bold font-manrope text-primary mb-6">Send us a message</h3>
      
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-destructive/10 text-destructive rounded-lg flex items-start gap-3">
          <AlertCircle className="size-5 shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{serverMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-text-primary">Full Name <span className="text-destructive">*</span></label>
            <Input id="fullName" placeholder="John Doe" {...register("fullName")} className={errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""} />
            {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-text-primary">Company (Optional)</label>
            <Input id="company" placeholder="Apex Corp" {...register("company")} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-text-primary">Email Address <span className="text-destructive">*</span></label>
            <Input id="email" type="email" placeholder="john@example.com" {...register("email")} className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-text-primary">Phone Number (Optional)</label>
            <Input id="phone" type="tel" placeholder="+234 ..." {...register("phone")} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-text-primary">Service of Interest <span className="text-destructive">*</span></label>
          <div className="relative">
            <select
              id="service"
              {...register("service")}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                errors.service ? "border-destructive focus-visible:ring-destructive" : ""
              )}
            >
              <option value="">Select a service...</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.title}>{service.title}</option>
              ))}
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
          {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-text-primary">Subject <span className="text-destructive">*</span></label>
          <Input id="subject" placeholder="How can we help?" {...register("subject")} className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""} />
          {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-text-primary">Message <span className="text-destructive">*</span></label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your project..." 
            className={cn("min-h-[150px] resize-y", errors.message ? "border-destructive focus-visible:ring-destructive" : "")} 
            {...register("message")} 
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
        </div>

        <Button 
          type="submit" 
          size="lg" 
          className="w-full text-base font-semibold"
          disabled={submitStatus === "submitting"}
        >
          {submitStatus === "submitting" ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
