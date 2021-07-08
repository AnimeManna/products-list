export interface FormTextFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  onValidate?: (value: string) => string | undefined;
  autoComplete?: string;
}
