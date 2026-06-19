import { createFileRoute, Link } from "@tanstack/react-router";
import { Server, Wrench, Lock, Headphones, Lightbulb, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Managed IT, Repair & Cybersecurity | Schrec Tech" },
      { name: "description", content: "IT services for homes and small businesses in Western PA: managed IT, computer repair, cybersecurity, support, and consulting." },
      { property: "og:title", content: "Schrec Tech Services" },
      { property: "og:description", content: "Managed IT, repair, cybersecurity, support, and consulting for Western Pennsylvania." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Server,
    title: "Managed IT Services",
    desc: "We watch over your systems so problems get fixed before you notice them. One flat monthly rate covers monitoring, updates, and unlimited support.",
    bullets: ["24/7 system monitoring", "Software updates & patching", "Unlimited remote support", "Monthly health reports"],
  },
  {
    icon: Wrench,
    title: "Computer Repair",
    desc: "Slow laptop? Won't turn on? Mystery error? We diagnose honestly and fix it right — and we'll tell you when it's time to replace instead of repair.",
    bullets: ["Free diagnostics", "Virus & malware removal", "Hardware upgrades", "Data recovery"],
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    desc: "Plain-language protection against scams, ransomware, and identity theft. Designed for real people and real small businesses — not enterprises.",
    bullets: ["Email & phishing protection", "Endpoint security", "Password & MFA setup", "Security awareness training"],
  },
  {
    icon: Headphones,
    title: "IT Support",
    desc: "Real people who pick up. Reach us by phone, email, or text — and get help from someone who remembers your setup.",
    bullets: ["On-site & remote help", "Same-day response", "No call menus", "Friendly, no jargon"],
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    desc: "Planning a move, upgrade, or new office? We help you choose the right tools without overselling — and we'll set it all up for you.",
    bullets: ["New office setup", "Hardware recommendations", "Cloud & email migration", "Vendor coordination"],
  },
  {
    icon: ShieldCheck,
    title: "Backups & Recovery",
    desc: "Your files, photos, and business data — protected automatically. So if something goes wrong, we can put everything back in minutes.",
    bullets: ["Automated cloud backups", "On-site backup options", "Tested restore process", "Ransomware protection"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-primary text-glow">Tech help</span> for everyday people and small teams
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether it's one stubborn printer or a whole office network, we handle the technical
            side so you can get back to your day.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map(({ icon: Icon, title, desc, bullets }) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-glow-soft md:p-8">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Not sure what you need?</h2>
          <p className="mt-3 text-muted-foreground">
            That's exactly what the free assessment is for. We'll listen, look things over, and
            recommend only what actually helps.
          </p>
          <div className="mt-6">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book Your Free Assessment <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}