import { NavTabs } from "../NavTabs";

export const ContentContainer = () => {
  return (
    <section className="max-w-7xl w-full bg-[var(--neutral-0)] border border-[var(--border)] rounded-3xl shadow-xl min-h-30 lg:min-h-[40rem]">
      <header className="hidden lg:flex w-full justify-end">
        <nav className="max-w-xl w-full min-h-17 flex items-center bg-[var(--neutral-300)] rounded-bl-3xl rounded-tr-[1.43rem] px-4 border-b border-l border-[var(--border)]">
          <NavTabs />
        </nav>
      </header>
      <p>Hellow there!!!</p>
    </section>
  );
};
