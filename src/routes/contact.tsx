import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Schrec Tech — Book Your Free Assessment" },
      { name: "description", content: "Book your free IT assessment with Schrec Tech. Serving homes and small businesses in Western PA." },
      { property: "og:title", content: "Book Your Free Assessment | Schrec Tech" },
      { property: "og:description", content: "Friendly, local IT help — message us today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      service: String(form.get("service") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    try {
      await submit({ data });
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Book your <span className="text-primary text-glow">free assessment</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Tell us a little about what's going on. We'll get back within one business day — usually much sooner.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary shadow-glow-soft">
                  <CheckCircle2 className="size-7" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Thanks — we got it!</h2>
                <p className="mt-2 max-w-md text-muted-foreground">
                  We'll be in touch within one business day to set up your free assessment.
                </p>
              </div>
            ) : (
              <form className="grid gap-5" onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required maxLength={100} placeholder="Jane Smith" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" type="tel" maxLength={40} placeholder="(724) 555-0123" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service">What do you need help with?</Label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="">Pick one (optional)</option>
                      <option>Managed IT Services</option>
                      <option>Computer Repair</option>
                      <option>Cybersecurity</option>
                      <option>IT Support</option>
                      <option>IT Consulting</option>
                      <option>Something else</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Tell us what's going on</Label>
                  <Textarea id="message" name="message" required maxLength={2000} rows={5} placeholder="A few sentences is plenty — we'll follow up with questions." />
                </div>
                {status === "error" && (
                  <p className="text-sm text-destructive">{errorMsg || "Something went wrong. Please try again."}</p>
                )}
                <Button type="submit" variant="hero" size="xl" disabled={status === "loading"}>
                  {status === "loading" ? (<><Loader2 className="size-4 animate-spin" /> Sending…</>) : "Book My Free Assessment"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree we may contact you about your request. No spam — promise.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">Reach us directly</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Phone className="size-4 text-primary" /> (724) 555-0123</li>
                <li className="flex items-center gap-3"><Mail className="size-4 text-primary" /> hello@schrectech.com</li>
                <li className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> Western Pennsylvania</li>
                <li className="flex items-center gap-3"><Clock className="size-4 text-primary" /> Mon–Fri · 8a–6p</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold">Prefer to pick a time?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Online scheduling is coming soon — your Calendly, Google Calendar, or Acuity embed will live here.
              </p>
              <div className="mt-4 grid h-32 place-items-center rounded-lg border border-border bg-background text-xs text-muted-foreground">
                Scheduling embed placeholder
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}