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

export const BookingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<BookingFormInputs>();

  const selectedDate = watch("appointmentDate");
  const {
    slots: availableSlots,
    isLoading,
    error,
  } = useBookingSlots(selectedDate);

  const onSubmit = async (data: BookingFormInputs) => {
    try {
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

      if (!response.ok) throw new Error("Booking failed");

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
        "Free consultation booked successfully! Check your email for confirmation."
      );
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to book consultation");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label className="block mb-2 font-semibold text-white">Phone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Your phone number"
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
            Consultation Date
          </label>
          <div className="relative w-full">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
            <Controller
              control={control}
              name="appointmentDate"
              rules={{ required: "Consultation date is required" }}
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={field.onChange}
                  className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200"
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  placeholderText="Select date"
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
        <label className="block mb-2 font-semibold text-white">Message</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <textarea
            {...register("message", { maxLength: 500 })}
            className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200 min-h-[100px]"
            placeholder="Tell us about your tattoo idea or any questions you have..."
          />
        </div>
        {errors.message && (
          <span className="text-red-500 text-sm mt-1 block">
            Message is too long (max 500 characters)
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-purple"></div>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center p-4">
          Error loading available slots
        </div>
      ) : (
        <div className="relative w-full">
          <label className="block mb-2 font-semibold text-white">
            Consultation Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              {...register("timeSlot", { required: "Time slot is required" })}
              className="w-full border border-accent-purple bg-transparent p-3 pl-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all duration-200 appearance-none"
            >
              <option value="">Select time</option>
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
      )}

      <Button
        text="Book Free Consultation"
        type="filled"
        size="md"
        icon={<Calendar size={20} />}
      />
    </form>
  );
};

export default BookingForm;
