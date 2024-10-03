"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

interface FormData {
  firstname: string;
  lastname: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const validateForm = (): Partial<FormData> => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const response = await fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setConfirmationMessage("Your message has been sent successfully!");
    } else {
      setConfirmationMessage("Failed to send your message. Please try again.");
    }
    setIsSubmitting(false);
  };

  const inputClassName =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rb-200 placeholder-gray-500";
  const labelClassName = "text-neutral-800 font-medium";

  return (
    <section>
      <h2 className="heading text-center text-4xl font-bold mb-12">
        Request a <span className="text-rb-100">Free Demo</span>
      </h2>
      <div
        className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gray-300"
        id="contact"
      >
        <h2 className="font-bold text-center text-xl text-neutral-800">
          Contact Us
        </h2>
        <p className="text-neutral-600 text-center text-sm max-w-sm mt-2">
          Enjoy a 30-day free trial by filling out your information.
        </p>

        {confirmationMessage && (
          <div className="mt-4 text-center text-white bg-rb-200 p-2 rounded-md">
            {confirmationMessage}
          </div>
        )}

        {!isSubmitted && (
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname" className={labelClassName}>
                  First name
                </Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  value={formData.firstname}
                  onChange={handleChange}
                  className={inputClassName}
                />
                {errors.firstname && (
                  <p className="text-rb-100">{errors.firstname}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className={labelClassName}>
                  Last name
                </Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  value={formData.lastname}
                  onChange={handleChange}
                  className={inputClassName}
                />
                {errors.lastname && (
                  <p className="text-rb-100">{errors.lastname}</p>
                )}
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="company" className={labelClassName}>
                Company
              </Label>
              <Input
                id="company"
                placeholder="Project Mayhem"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className={inputClassName}
              />
              {errors.company && (
                <p className="text-rb-100">{errors.company}</p>
              )}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phone" className={labelClassName}>
                Phone
              </Label>
              <Input
                id="phone"
                placeholder="123-456-7890"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClassName}
              />
              {errors.phone && <p className="text-rb-100">{errors.phone}</p>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className={labelClassName}>
                Email Address
              </Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClassName}
              />
              {errors.email && <p className="text-rb-100">{errors.email}</p>}
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="message" className={labelClassName}>
                Message
              </Label>
              <textarea
                id="message"
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                className={inputClassName}
              />
              {errors.message && (
                <p className="text-rb-100">{errors.message}</p>
              )}
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black to-rb-100 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition duration-300"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"} &rarr;
              <BottomGradient />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-rb-200 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-rb-100 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
