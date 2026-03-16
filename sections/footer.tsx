import Link from "next/link";

const footerLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "Documentação", href: "https://docs.warrantconnect.com" },
  { label: "Status", href: "https://status.warrantconnect.com" },
  { label: "Contato", href: "mailto:contact@warrantconnect.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-wrap flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
            WarrantConnect
          </p>
          <p className="mt-2 text-sm text-slate-400">
            © WarrantConnect. Infraestrutura digital para serviços, APIs e aplicações.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          {footerLinks.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
