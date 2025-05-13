import { useState } from "react";
import contactImg from "../../../../assets/images/contact-bg.svg";
import { FormFields, FormFieldsDataType } from "../../../../types/contact";
import { InputField } from "./InputField";

export const Contact = () => {
  const [form, setForm] = useState<FormFields>({
    fullName: "",
    email: "",
    message: "",
  });

  const formFieldsData: FormFieldsDataType[] = [
    {
      id: "fullName",
      name: "fullName",
      value: form.fullName,
      type: "text",
      isValid: true,
    },
    {
      id: "email",
      name: "email",
      value: form.email,
      type: "text",
      isValid: true,
    },
    {
      id: "message",
      name: "message",
      value: form.message,
      type: "textarea",
      isValid: true,
    },
  ];
  return (
    <div className="w-full mt-8 px-6">
      <header className="w-full flex flex-col items-start">
        <h3 className="text-2xl">Let's bring your project to life</h3>
        <p className="text-sm sm:text-lg">
          Ready to create something amazing together? Let's craft a
          user-friendly, impactful solution that makes your vision shine.
        </p>
      </header>
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-between gap-6">
        <figure>
          <img src={contactImg} alt="" />
        </figure>
        <form className="max-w-[40rem] w-full flex-col items-start gap-6">
          {formFieldsData.map((field) => {
            return <InputField field={field} key={field.id} />;
          })}
          <div className="w-full flex justify-end mt-5">
            <button
              type="submit"
              className="h-12 w-fit rounded-xl bg-[var(--primary-color)] text-white px-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
