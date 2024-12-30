export type ButtonProps = {
  text: string;
  type?: "filled" | "outlined";
  onClick?: () => void;
  navigateTo?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
};