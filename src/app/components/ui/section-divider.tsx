export const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center w-full  bg--white">
      <div className="h-px grow bg-linear-to-r from-transparent via-gold/50 to-gold" />
      <div className="w-2 h-2 bg-gold rotate-45 mx-4" />
      <div className="h-px grow bg-linear-to-l from-transparent via-gold/50 to-gold" />
    </div>
  );
};
