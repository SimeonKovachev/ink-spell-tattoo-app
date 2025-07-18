export type ConversionEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  event_callback?: () => void;
  event_timeout?: number;
  send_to?: string;
};
