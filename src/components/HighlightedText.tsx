type TextProps = {
  text: string;
};

export const HighlightedText = ({ text }: TextProps) => {
  return (
    <span className="bg-gradient-to-r from-[var(--primary-gradient-left)] to-[var(--primary-gradient-right)] bg-clip-text text-transparent font-extrabold ">
      {text}
    </span>
  );
};
