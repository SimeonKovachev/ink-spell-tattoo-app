"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Common/Button"; // Reusing your button component
import { toast } from "react-hot-toast";
import { Mail, MessageSquare, User } from "lucide-react";

type FaqFormInputs = {
  name: string;
  email: string;
  question: string;
};

const FaqForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FaqFormInputs>();

  const onSubmit = async (data: FaqFormInputs) => {
    try {
      const response = await fetch("/api/faq-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Your message has been sent! We'll get back to you soon.");
    } catch (error) {
      console.error("FAQ Form Submission Error:", error);
      toast.error("Failed to send your message. Please try again.");
    }
  };

  return (
    <div className="max-w-xl w-full bg-dark-2 p-8 rounded-lg shadow-lg border border-dark-3">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Still have questions? Reach out!
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        If you can’t find the answer you’re looking for, feel free to reach out
        using the form below. We’re happy to help!
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
        <div className="relative w-full">
          <label className="block mb-2 font-semibold text-white">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your full name"
              className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200"
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="relative w-full">
          <label className="block mb-2 font-semibold text-white">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="your@email.com"
              className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200"
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="relative w-full">
          <label className="block mb-2 font-semibold text-white">
            Question
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              {...register("question", { required: "Question is required" })}
              placeholder="Ask your question or share your feedback"
              className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200 min-h-[100px]"
            />
          </div>
          {errors.question && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.question.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <Button text="Send Message" />
      </form>
    </div>
  );
};

export default FaqForm;
