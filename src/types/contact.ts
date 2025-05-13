export type FormFields = {
  fullName: string;
  email: string;
  message: string;
};
export type EmptyFormFields = {
  fullName: "";
  email: "";
  message: "";
};

export type FormFieldsDataType = {
  id: string;
  name: string;
  value: string;
  type: string;
  isValid: boolean;
};

export type InputFieldProps = {
  field: FormFieldsDataType;
};
