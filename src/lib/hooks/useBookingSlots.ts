import { useState, useEffect } from "react";
import { format } from "date-fns";

interface UseBookingSlotsResult {
  slots: string[];
  isLoading: boolean;
  error: Error | null;
}

export const useBookingSlots = (
  selectedDate: Date | null
): UseBookingSlotsResult => {
  const [slots, setSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSlots = async () => {
      if (!selectedDate) return;

      setIsLoading(true);
      setError(null);

      try {
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        const response = await fetch(`/api/slots?date=${formattedDate}`);

        if (!response.ok) {
          throw new Error("Failed to fetch slots");
        }

        const availableSlots = await response.json();
        setSlots(availableSlots);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch slots")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlots();
  }, [selectedDate]);

  return { slots, isLoading, error };
};
