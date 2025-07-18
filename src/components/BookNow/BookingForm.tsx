"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BookingFormInputs } from "@/types/bookingForm";
import Button from "../Common/Button";
import { useBookingSlots } from "@/lib/hooks/useBookingSlots";
import { format } from "date-fns";
import {
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import { track } from "@vercel/analytics/react";
import { useConversions } from "@/lib/gtag";

export const BookingForm: React.FC = () => {
  const conversions = useConversions();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<BookingFormInputs>();

  const selectedDate = watch("appointmentDate");
  const { slots: availableSlots } = useBookingSlots(selectedDate);

  const onSubmit = async (data: BookingFormInputs) => {
    try {
      track("booknow_appointment_book_btn");
      conversions.bookingFormSubmit();

      const formattedData = {
        ...data,
        appointmentDate: data.appointmentDate
          ? format(data.appointmentDate, "yyyy-MM-dd")
          : null,
      };

      const response = await fetch("/api/book-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) throw new Error("Грешка при резервацията");

      const calendarContent = await response.text();
      const blob = new Blob([calendarContent], {
        type: "text/calendar;charset=utf-8",
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "consultation.ics";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      toast.success(
        "Безплатната консултация е резервирана успешно! Проверете имейла си за потвърждение."
      );
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Грешка при резервацията на консултация");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 flex flex-col items-center md:items-stretch"
    >
      <style>
        {`
      .react-datepicker-wrapper {
        display: block;
        width: 100%;
      }
      .react-datepicker__input-container {
        display: block;
        width: 100%;
      }
      .react-datepicker__input-container input {
        width: 100%;
      }
    `}
      </style>

      <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2">
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
          <label className="block mb-2 font-semibold text-white">Телефон</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              {...register("phone", {
                required: "Телефонният номер е задължителен",
              })}
              placeholder="Вашият телефонен номер"
              className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200"
            />
          </div>
          {errors.phone && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="relative w-full">
          <label className="block mb-2 font-semibold text-white">
            Дата за консултация
          </label>
          <div className="relative w-full">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
            <Controller
              control={control}
              name="appointmentDate"
              rules={{ required: "Датата за консултация е задължителна" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  placeholderText="Изберете дата"
                />
              )}
            />
          </div>
          {errors.appointmentDate && (
            <span className="text-red-500 text-sm mt-1 block">
              {errors.appointmentDate.message}
            </span>
          )}
        </div>
      </div>

      <div className="relative w-full">
        <label className="block mb-2 font-semibold text-white">Съобщение</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            {...register("message", { maxLength: 500 })}
            className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200 min-h-[100px]"
            placeholder="Разкажете ни за вашата идея за татуировка или задайте въпросите си..."
          />
        </div>
        {errors.message && (
          <span className="text-red-500 text-sm mt-1 block">
            Съобщението е твърде дълго (максимум 500 знака)
          </span>
        )}
      </div>

      <div className="relative w-full">
        <label className="block mb-2 font-semibold text-white">
          Час за консултация
        </label>
        <div className="relative">
          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            {...register("timeSlot", { required: "Часът е задължителен" })}
            className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200 appearance-none"
          >
            <option value="">Изберете час</option>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot} className="bg-dark text-white">
                {slot}
              </option>
            ))}
          </select>
        </div>
        {errors.timeSlot && (
          <span className="text-red-500 text-sm mt-1 block">
            {errors.timeSlot.message}
          </span>
        )}
      </div>

      <div className="flex justify-center w-full">
        <Button
          text="Запиши безплатна консултация"
          type="filled"
          responsiveSize={{
            sm: "sm",
            md: "md",
            lg: "md",
          }}
          icon={<Calendar size={20} />}
        />
      </div>
    </form>
  );
};

export default BookingForm;
