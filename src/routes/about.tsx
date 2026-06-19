import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Users, MapPin, Handshake, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Schrec Tech — Local IT in Western Pennsylvania" },
      { name: "description", content: "Locally owned IT support in Western PA. Honest pricing, friendly service, no jargon." },
      { property: "og:title", content: "About Schrec Tech" },
      { property: "og:description", content: "Locally owned, honest IT support for Western Pennsylvania." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Honesty first", desc: "If you don't need it, we'll tell you. No upsells, no scare tactics." },
  { icon: Handshake, title: "Real relationships", desc: "We remember you, your setup, and the way you like to work." },
  { icon: Clock, title: "Respect your time", desc: "Quick replies, clear timelines, and we show up when we say we will." },
  { icon: ShieldCheck, title: "Quality work", desc: "Done right the first time — with a friendly check-in afterward." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <MapPin className="size-3" /> Based in Western PA
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Friendly tech help from your <span className="text-primary text-glow">neighbors</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Schrec Tech is a locally owned IT company built on a simple idea: technology should make
              your life easier, not harder. We're the people you call when something stops working —
              and the people who keep it working in the first place.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-glow-soft">
            <Users className="size-8 text-primary" />
            <p className="mt-4 text-lg italic text-foreground">
              "We treat every computer like it's our grandma's — patient, careful, and explained in
              plain English."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">— The Schrec Tech team</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">What we stand for</h2>
            <p className="mt-4 text-muted-foreground">
              A few things we don't compromise on.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-glow-soft">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Let's see how we can help</h2>
          <p className="mt-3 text-muted-foreground">
            Every great relationship starts with a conversation. Yours is on us.
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