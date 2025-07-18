import { ConversionEventParams } from "@/types/conversionEvent";
import { TRACKING_VALUES } from "@/config/trackingValues.config";

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: {
        [key: string]: any;
        event_callback?: () => void;
        event_timeout?: number;
        send_to?: string;
      }
    ) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = "AW-16778180960";
const CONVERSION_ID = "ads_conversion_Book_appointment_1";

const isGtagAvailable = (): boolean => {
  return typeof window !== "undefined" && !!window.gtag;
};

// Page view tracking
export const pageview = (url: string): void => {
  if (isGtagAvailable()) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

export const trackConversion = (
  conversionId: string,
  eventParameters: ConversionEventParams = {}
): void => {
  if (isGtagAvailable()) {
    window.gtag("event", conversionId, {
      send_to: GA_TRACKING_ID,
      currency: "BGN", // Default currency
      ...eventParameters,
    });
  }
};

// Enhanced tracking with delayed navigation
export const trackConversionWithNavigation = (
  conversionId: string,
  redirectUrl?: string,
  eventParameters: ConversionEventParams = {}
): boolean => {
  if (isGtagAvailable()) {
    const callback = redirectUrl
      ? (): void => {
          window.location.href = redirectUrl;
        }
      : undefined;

    window.gtag("event", conversionId, {
      send_to: GA_TRACKING_ID,
      currency: "BGN",
      event_callback: callback,
      event_timeout: 2000,
      ...eventParameters,
    });
  }
  return false;
};

// Helper function for creating event parameters
const createEventParams = (
  category: string,
  label: string,
  value: number
): ConversionEventParams => ({
  event_category: category,
  event_label: label,
  value,
  currency: "BGN",
});

// Specific conversion events for Ink Spell Tattoo Studio
export const conversions = {
  // Page visits
  pageView: (pageName: string): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "page_view",
        `page_${pageName}`,
        TRACKING_VALUES.PAGE_VIEW
      )
    );
  },

  // High-value conversions
  navbarBookNow: (): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "navbar",
        "navbar_book_now_click",
        TRACKING_VALUES.NAVBAR_BOOK
      )
    );
  },

  bookingFormSubmit: (redirectUrl?: string): boolean => {
    return trackConversionWithNavigation(
      CONVERSION_ID,
      redirectUrl,
      createEventParams(
        "conversion",
        "booking_form_submit",
        TRACKING_VALUES.BOOKING_FORM
      )
    );
  },

  // Contact actions
  phoneClick: (): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams("contact", "phone_click", TRACKING_VALUES.PHONE_CLICK)
    );
  },

  emailClick: (emailType?: string): void => {
    const label = emailType ? `email_click_${emailType}` : "email_click";
    trackConversion(
      CONVERSION_ID,
      createEventParams("contact", label, TRACKING_VALUES.EMAIL_CLICK)
    );
  },

  // Service interactions
  serviceCardClick: (serviceName: string): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "service",
        `service_card_click_${serviceName}`,
        TRACKING_VALUES.SERVICE_CARD
      )
    );
  },

  servicePageView: (serviceName: string): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "service",
        `service_page_view_${serviceName}`,
        TRACKING_VALUES.SERVICE_PAGE
      )
    );
  },

  // Gallery interactions
  galleryTabSwitch: (tabName: string): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "gallery",
        `gallery_tab_${tabName}`,
        TRACKING_VALUES.GALLERY_TAB
      )
    );
  },

  galleryImageClick: (imageTitle: string): void => {
    const sanitizedTitle = imageTitle
      .toLowerCase()
      .replace(/\s+/g, "_")
      .slice(0, 20); // Limit length
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "gallery",
        `gallery_image_${sanitizedTitle}`,
        TRACKING_VALUES.GALLERY_IMAGE
      )
    );
  },

  // Reviews interaction
  reviewsLeaveReview: (): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "reviews",
        "leave_review_click",
        TRACKING_VALUES.REVIEWS_CLICK
      )
    );
  },

  // General button clicks
  buttonClick: (buttonName: string): void => {
    trackConversion(
      CONVERSION_ID,
      createEventParams(
        "button",
        `button_click_${buttonName}`,
        TRACKING_VALUES.BUTTON_CLICK
      )
    );
  },
} as const;

// Custom hook for React components
export const useConversions = () => {
  return conversions;
};