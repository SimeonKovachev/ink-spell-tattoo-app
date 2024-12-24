import { client } from "@/lib/client";
import { formatTime, parseTime } from "@/lib/utils/date";
import { Booking } from "@/types/booking";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const date = url.searchParams.get("date");

  if (!date) {
    return NextResponse.json({ error: "Date is required" }, { status: 400 });
  }

  try {
    const dayOfWeek = new Date(date).toLocaleString("en-US", {
      weekday: "long",
    });

    const workingHours = await client.fetch(
      `*[_type == "workingHours" && day == $day][0]`,
      { day: dayOfWeek }
    );

    if (!workingHours || workingHours.isClosed) {
      return NextResponse.json([]);
    }

    const startMinutes = parseTime(workingHours.startTime);
    const endMinutes = parseTime(workingHours.endTime);

    const allSlots: string[] = [];
    for (let time = startMinutes; time < endMinutes; time += 30) {
      allSlots.push(formatTime(time));
    }

    const bookedSlots = await client.fetch<Booking[]>(
      `*[_type == "booking" && appointmentDate == $date]`,
      { date }
    );

    const bookedTimes = bookedSlots.map((booking) => booking.timeSlot);

    const availableSlots = allSlots.filter(
      (slot) => !bookedTimes.includes(slot)
    );

    return NextResponse.json(availableSlots);
  } catch (error) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}
