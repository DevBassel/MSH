export default function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${className} w-full md:w-4/5 mx-auto  text-white px-4 `}
    >
      {children}
    </section>
  );
}
