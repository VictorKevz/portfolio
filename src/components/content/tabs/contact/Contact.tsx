import { useCallback, useState } from "react";
import { motion } from "framer-motion";

import contactImg from "../../../../assets/images/contact.svg";
import {
  FormSubmitEvent,
  FormFields,
  FormFieldsDataType,
  FormFieldsValid,
  InputEvent,
  EmptyFormFields,
} from "../../../../types/contact";
import { InputField } from "./InputField";
import { Send } from "@mui/icons-material";
import { useAlertContext } from "../../../../context/AlertContext";
import { useNavTabsContext } from "../../../../context/NavTabsContext";

export const Contact = () => {
  //States....................................................
  const [form, setForm] = useState<FormFields>(EmptyFormFields);
  const [formValid, setFormValid] = useState<FormFieldsValid>({
    fullName: true,
    email: true,
    message: true,
  });
  const { handleAlert } = useAlertContext();
  const { onUpdate } = useNavTabsContext();
  //Handlers....................................................
  const handleChange = useCallback((event: InputEvent) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when typing
    setFormValid((prev) => ({
      ...prev,
      [name]: true,
    }));
  }, []);

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    const valid = handleValidation();
    if (!valid) {
      handleAlert({
        severity: "error",
        message: "Failed to send",
        show: true,
      });
      return;
    }
    handleAlert({
      severity: "success",
      message: "Message successfully sent!",
      show: true,
    });
    setForm(EmptyFormFields);

    //redirect to about tab after 2 seconds
    setTimeout(() => onUpdate("about"), 1500);
  };

  const handleValidation = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newFormValid = { ...formValid };

    newFormValid.fullName = !!form.fullName.trim();
    newFormValid.message = !!form.message.trim() && form.message.length > 3;
    newFormValid.email = !!form.email.trim() && regex.test(form.email);
    setFormValid(newFormValid);

    const isValid = Object.values(newFormValid).every(Boolean);

    return isValid;
  };

  const isValid = Object.values(formValid).every(Boolean);

  //Data....................................................
  const formFieldsData: FormFieldsDataType[] = [
    {
      id: "fullName",
      name: "fullName",
      value: form.fullName,
      type: "text",
      placeholder: "Enter your full name...",
      isValid: formValid.fullName,
      errorMessage: "Name can't be blank.",
    },
    {
      id: "email",
      name: "email",
      value: form.email,
      type: "text",
      placeholder: "Enter your full email address...",
      isValid: formValid.email,
      errorMessage: "Please provide a valid email address.",
    },
    {
      id: "message",
      name: "message",
      value: form.message,
      type: "textarea",
      placeholder: "Enter your full message...",
      isValid: formValid.message,
      errorMessage: "Message can't be blank, enter at least 3 words",
    },
  ];
  return (
    <div className="w-full mt-6 px-6">
      <header className="w-full flex flex-col items-start">
        <h3 className="text-2xl">Let's bring your project to life</h3>
        <p className="text-sm sm:text-lg xl:w-[90%]">
          Ready to create something amazing together? Let's craft a
          user-friendly, impactful solution that makes your vision shine.
        </p>
      </header>
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-6">
        <figure className="w-[70%] lg:w-[50%]">
          <img src={contactImg} alt="" className="w-full h-auto" />
        </figure>
        <motion.form
          onSubmit={(e: FormSubmitEvent) => handleSubmit(e)}
          key={!isValid ? "error" : "normal"}
          animate={!isValid ? { x: [0, -10, 10, -10, 0] } : {}}
          transition={{
            duration: 0.4,
          }}
          className="w-full md:w-[90%] flex flex-col items-start gap-3 relative"
        >
          {formFieldsData.map((field) => {
            return (
              <InputField
                field={field}
                key={field.id}
                onChange={handleChange}
              />
            );
          })}
          <div className="w-full flex justify-end mt-4">
            <button
              type="submit"
              className="h-12 w-fit shadow-2xl rounded-xl primary-gradient-bg text-[var(--neutral-0)] px-4 gap-2"
            >
              <Send className="-rotate-45" /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};
