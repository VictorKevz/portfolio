import { hobbiesData } from "./AboutData";

export const Hobbies = () => {
  return (
    <div className="w-full flex flex-col items-start mt-12 pt-6 border-t border-[var(--border)]">
      <h3 className="text-3xl">Hobbies & Interest</h3>
      <p>
        Outside of coding here are a few things I find myself doing which gives
        me the perfect balance I need.
      </p>
      <div className="w-full flex items-center justify-between gap-4 mt-6">
        {hobbiesData.map((hobby) => (
          <div className="flex flex-col gap-2 px-4 py-5 border border-[var(--border)] rounded-xl">
            <span className="flex items-center justify-center h-10 w-10 text-[var(--neutral-400)] rounded-full bg-[var(--neutral-300)]">
              <hobby.icon />
            </span>
            <div>
              <h4 className="uppercase text-sm">{hobby.title}</h4>
              <p className="text-sm">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
