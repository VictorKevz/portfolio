import { InputFieldProps } from "../../../../types/contact";

export const InputField = ({ field }: InputFieldProps) => {
  return (
    <div className="w-full">
      {field.type === "text" ? (
        <label htmlFor={field.id} className="w-full flex flex-col items-start">
          <input
            id={field.id}
            name={field.name}
            value={field.value}
            type={field.type}
            className="h-12 border border-[var(--border)] w-full my-5 rounded-xl"
          />
        </label>
      ) : (
        <textarea
          className="border border-[var(--border)] w-full flex flex-col items-start mt-5 rounded-xl"
          id={field.id}
          name={field.name}
          value={field.value}
          rows={8}
        >
          <input className="" />
        </textarea>
      )}
    </div>
  );
};
