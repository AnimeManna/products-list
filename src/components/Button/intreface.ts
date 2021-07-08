export interface ButtonProps {
  onClick?: () => void;
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}
