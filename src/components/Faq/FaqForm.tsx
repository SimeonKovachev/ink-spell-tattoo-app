"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Common/Button"; // Reusing your button component
import { toast } from "react-hot-toast";
import { Mail, MessageSquare, User } from "lucide-react";
import { FaqFormInputs } from "@/types/faqFormInputs";

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

      if (!response.ok) throw new Error("Грешка при изпращане на съобщението");

      toast.success(
        "Съобщението ви беше изпратено успешно! Ще се свържем с вас скоро."
      );
    } catch (error) {
      console.error("FAQ Form Submission Error:", error);
      toast.error("Грешка при изпращане. Моля, опитайте отново.");
    }
  };

  return (
    <div className="max-w-xl w-full bg-dark-2 p-8 rounded-lg shadow-lg border border-dark-3">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Имате въпроси? Свържете се с нас!
      </h3>

      <p className="text-gray-400 mb-6 leading-relaxed">
        Ако не намирате отговора, който търсите, не се колебайте да се свържете
        с нас чрез формата по-долу. С удоволствие ще ви помогнем!
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
        <div className="relative w-full">
          <label className="block mb-2 font-semibold text-white">Име</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              {...register("name", { required: "Името е задължително" })}
              placeholder="Вашето име"
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
          <label className="block mb-2 font-semibold text-white">Имейл</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              {...register("email", { required: "Имейлът е задължителен" })}
              placeholder="вашият@имейл.com"
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
          <label className="block mb-2 font-semibold text-white">Въпрос</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              {...register("question", { required: "Въпросът е задължителен" })}
              placeholder="Задайте въпроса си или споделете обратна връзка"
              className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200 min-h-[100px]"
            />
          </div>
          {errors.question && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.question.message}
            </span>
          )}
        </div>

        <Button
          text="Изпрати съобщение"
          responsiveSize={{
            sm: "sm",
            md: "md",
            lg: "md",
          }}
        />
      </form>
    </div>
  );
};

export default FaqForm;
