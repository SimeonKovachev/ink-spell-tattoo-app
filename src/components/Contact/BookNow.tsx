"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { google, outlook, ics } from "calendar-link";
import { BookingFormInputs } from "@/types/bookingForm";


export default function BookNow() {
  const { register, handleSubmit, reset, formState } =
    useForm<BookingFormInputs>();
  const { errors } = formState;

  const onSubmit = async (data: BookingFormInputs) => {
    try {
      await axios.post("/api/book-appointment", data);

      const event = {
        title: "Tattoo Appointment",
        description: `Appointment with ${data.name}`,
        start: new Date(data.appointmentDate),
        duration: [1, "hour"] as [number, "minute" | "hour" | "day"],
      };

      const googleCalendarLink = google(event);
      const outlookCalendarLink = outlook(event);
      const appleCalendarLink = ics(event);

      // Open Google Calendar link in a new tab
      window.open(googleCalendarLink, "_blank");

      alert("Your appointment has been booked successfully!");
      console.log("Google Calendar:", googleCalendarLink);
      console.log("Outlook Calendar:", outlookCalendarLink);
      console.log("Apple Calendar (ICS):", appleCalendarLink);

      // Reset the form fields
      reset();
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("There was an error booking your appointment. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border p-2 rounded"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label>Phone</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="w-full border p-2 rounded"
          />
          {errors.phone && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label>Appointment Date</label>
          <input
            type="date"
            {...register("appointmentDate", { required: true })}
            className="w-full border p-2 rounded"
          />
          {errors.appointmentDate && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>

        <div>
          <label>Message (optional)</label>
          <textarea
            {...register("message")}
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
