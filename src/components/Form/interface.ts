export interface FormTextFieldInput {
  name: string;
  value: string;
  isValid: boolean;
}

export interface FormProps {
  className?: string;
  onSubmit: (arg0: any) => void;
}
