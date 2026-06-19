import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Wrench, Headphones, Lock, Lightbulb, Server, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Schrec Tech — Friendly IT Support in Western PA" },
      { name: "description", content: "Managed IT, computer repair, cybersecurity, and consulting for homes and small businesses in Western Pennsylvania. Book your free assessment." },
      { property: "og:title", content: "Schrec Tech — Friendly IT Support in Western PA" },
      { property: "og:description", content: "Honest, local IT help with no jargon. Book your free assessment today." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Server, title: "Managed IT Services", desc: "Proactive monitoring and maintenance so your tech just works." },
  { icon: Wrench, title: "Computer Repair", desc: "Fast, honest fixes for desktops, laptops, and everything in between." },
  { icon: Lock, title: "Cybersecurity", desc: "Plain-English protection from scams, ransomware, and data loss." },
  { icon: Headphones, title: "IT Support", desc: "Friendly humans on the phone — no menus, no waiting on hold." },
  { icon: Lightbulb, title: "IT Consulting", desc: "Smart advice on hardware, software, and growing your setup." },
  { icon: ShieldCheck, title: "Backups & Recovery", desc: "Sleep easy knowing your files and business data are safe." },
];

const benefits = [
  "Free, no-pressure assessment",
  "Locally owned in Western PA",
  "Flat-rate, transparent pricing",
  "Real humans, no jargon",
  "On-site & remote support",
  "Response within 1 business day",
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="absolute left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="size-1.5 rounded-full bg-primary shadow-glow-soft" />
              Serving Western Pennsylvania
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              IT that <span className="text-primary text-glow">just works</span>.
              <br />
              And people who actually pick up.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Schrec Tech keeps your computers, networks, and data running smoothly — for your home or
              your small business. No jargon. No surprise bills. Just honest, local help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Book Your Free Assessment <ArrowRight className="size-4" /></Link>
              </Button>
              <Button asChild variant="outlineGlow" size="xl">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <span>Trusted by neighbors and small businesses across the region</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <img src={logoAsset.url} alt="Schrec Tech logo" className="mx-auto w-full max-w-md drop-shadow-[0_0_40px_oklch(0.85_0.14_220/0.45)]" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Everything your tech needs, under one roof</h2>
            <p className="mt-4 text-muted-foreground">
              From a single laptop to a whole office network — we handle the technical stuff so you can focus on what you do best.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-glow-soft">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outlineGlow">
              <Link to="/services">See all services <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-border/60 bg-card/30 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Local. Honest. Easy to reach.</h2>
            <p className="mt-4 text-muted-foreground">
              We started Schrec Tech because too many people get talked down to — or talked into things
              they don't need. We do the opposite: explain plainly, fix it right the first time, and treat
              your home or business like our own.
            </p>
            <div className="mt-8">
              <Button asChild variant="hero">
                <Link to="/about">About Schrec Tech</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border/60 py-20">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="absolute left-1/2 top-1/2 -z-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready for tech that <span className="text-primary text-glow">just works</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Book a free, no-pressure assessment. We'll listen, take a look, and tell you straight what (if anything) you need.
          </p>
          <div className="mt-8">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book Your Free Assessment <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
