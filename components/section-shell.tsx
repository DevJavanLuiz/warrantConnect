import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="section-wrap">
        <div className="mb-14 flex max-w-3xl flex-col gap-5">
          {eyebrow ? <span className="chip w-fit">{eyebrow}</span> : null}
          <h2 className="section-heading">{title}</h2>
          <p className="section-copy">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
