import { InputEvent, InputFieldProps } from "../../../../types/contact";

export const InputField = ({ field, onChange }: InputFieldProps) => {
  return (
    <div className="w-full flex flex-col mt-6">
      {field.type === "text" ? (
        <label htmlFor={field.id} className="w-full flex flex-col items-start">
          <input
            id={field.id}
            name={field.name}
            value={field.value}
            onChange={(event: InputEvent) => onChange(event)}
            type={field.type}
            placeholder={field.placeholder}
            className={`h-12 border text-[var(--neutral-900)] placeholder:text-[var(--neutral-400)] ${
              !field.isValid
                ? "border-[var(--red-100)] bg-red-400/5"
                : "border-[var(--border)]"
            } w-full rounded-xl pl-4 caret-[var(--primary-color)] ${
              field.isValid
                ? "hover:border-[var(--primary-color)]"
                : "hover:border-[var(--red-100)]"
            }`}
          />
          {!field.isValid && (
            <span className="text-sm mt-1 text-[var(--red-100)]">
              {field.errorMessage}
            </span>
          )}
        </label>
      ) : (
        <div className="w-full flex flex-col items-start">
          <textarea
            className={`border text-[var(--neutral-900)] placeholder:text-[var(--neutral-400)] ${
              !field.isValid
                ? "border-[var(--red-100)] bg-red-400/5"
                : "border-[var(--border)]"
            } ${
              field.isValid
                ? "hover:border-[var(--primary-color)]"
                : "hover:border-[var(--red-100)]"
            }
            w-full  rounded-xl p-4`}
            id={field.id}
            name={field.name}
            value={field.value}
            onChange={(event: InputEvent) => onChange(event)}
            placeholder={field.placeholder}
            rows={6}
          ></textarea>
          {!field.isValid && (
            <span className="text-xs sm:text-sm mt-1 text-[var(--red-100)]">
              {field.errorMessage}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
