const Profile = () => {
  return (
    <aside className="max-w-72 w-full min-h-[47rem] bg-[var(--card-bg)] flex flex-col items-start gap-4 px-7 py-8 border border-[var(--border)] rounded-3xl shadow-xl">
      <header className="w-full flex flex-col items-center">
        <figure className="w-40 h-40 rounded-4xl bg-[var(--neutral-200)]"></figure>
        <h1 className="text-2xl text-[var(--neutral-900)] font-bold mt-8">
          Victor Kuwandira
        </h1>
        <p className="bg-[var(--neutral-300)] h-7 flex items-center text-[var(--neutral-900)] text-xs px-2 rounded-full">
          Front-end Developer
        </p>
      </header>
    </aside>
  );
};

export default Profile;
