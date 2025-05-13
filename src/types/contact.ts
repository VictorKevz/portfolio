export type FormFields = {
  fullName: string;
  email: string;
  message: string;
};
export const EmptyFormFields: FormFields = {
  fullName: "",
  email: "",
  message: "",
};

export type FormFieldsValid = {
  fullName: boolean;
  email: boolean;
  message: boolean;
};
export type FormFieldsDataType = {
  id: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  isValid: boolean;
  errorMessage: string;
};
export type InputEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export type InputFieldProps = {
  field: FormFieldsDataType;
  onChange: (event: InputEvent) => void;
};

export type SeverityType = "success" | "warning" | "error" | "info";

export interface AlertState {
  severity: SeverityType;
  message: string;
  show: boolean;
}

export const DefaultAlertState: AlertState = {
  severity: "success",
  message: "",
  show: false,
};
