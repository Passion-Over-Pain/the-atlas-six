export const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-6xl mx-auto my-24 px-4 opacity-60">
      <div className="h-px grow bg-linear-to-r from-transparent via-gold/50 to-gold" />
      <div className="w-2 h-2 bg-gold rotate-45 mx-4" />
      <div className="h-px grow bg-linear-to-l from-transparent via-gold/50 to-gold" />
    </div>
  );
};
