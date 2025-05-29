import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const SectionWrapper = ({ children, className, id }: Props) => {
  return (
    <section className={cn("relative w-full p-6 md:p-16", className)} id={id}>
      {children}
    </section>
  );
};
