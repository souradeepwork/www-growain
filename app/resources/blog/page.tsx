"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { PenSquare, ArrowRight, CheckCircle2 } from "lucide-react";

const futureTopics = [
  "Local SEO playbooks",
  "Consistency frameworks for social",
  "AI-assisted content workflows",
  "Reporting that leaders actually read",
];

const placeholderPosts = [
  {
    title: "The Search-to-Store Playbook",
    summary: "How multi-location brands turn Google intent into real visits with AI-powered tracking.",
    image: "/img/store-journey.jpeg",
  },
  {
    title: "Consistency Beats Algorithms",
    summary: "Why planned social and review cadences outperform trend-chasing every time.",
    image: "/img/cafe-owner-see.jpeg",
  },
  {
    title: "Inside the Growain Engine",
    summary: "A behind-the-scenes look at Cloudain’s infrastructure powering everyday growth.",
    image: "/img/02-growain-engine.jpeg",
  },
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-black to-black" />
        <div className="absolute inset-0 dot-noise opacity-20" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.8fr)] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                Growain Blog
                <PenSquare className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-primary text-glow">
                  Publishing soon.
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                  We&apos;re putting the finishing touches on a library of playbooks for local growth, AI-backed marketing, and the Growain Engine.
                  Be the first to read deep dives on search-to-store journeys, review systems, and social cadences that actually scale.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">Get Early Access</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="mailto:stories@growain.com">Pitch a Story</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[32px] border border-primary/25 bg-black/40 p-4">
                <Image
                  src="/img/growain-engine.jpeg"
                  alt="Growain Engine dashboard"
                  width={650}
                  height={450}
                  className="rounded-3xl object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 rounded-full border border-primary/30 bg-black/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-primary/70">
                Growain Engine
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming content */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-black via-secondary/10 to-black">
        <div className="container px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-primary/70">Sneak peek</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
              Fresh growth stories on the way.
            </h2>
            <p className="text-lg text-foreground/80">
              We&apos;re interviewing operators, mapping real campaigns, and sharing frameworks you can copy tomorrow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {placeholderPosts.map((post) => (
              <Card key={post.title} className="border-primary/20 bg-black/55 backdrop-blur-sm overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <CardContent className="space-y-3 p-6">
                  <CardTitle className="text-xl text-primary">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground/75">{post.summary}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Early access card */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container px-4 sm:px-6 lg:px-8">
          <Card className="glow-primary border-primary/25 bg-black/70">
            <CardContent className="grid gap-8 md:grid-cols-[1.1fr_minmax(0,0.7fr)] items-center p-8 md:p-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-display text-primary">Want a ping when we publish?</h3>
                <p className="text-lg text-foreground/80">
                  Book a quick walkthrough of the Growain Engine and get our first three playbooks delivered straight to your inbox.
                </p>
                <Button size="lg" className="pulse-glow" asChild>
                  <Link href="/book-demo">
                    Book a Free Growth Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <ul className="space-y-3 text-sm text-foreground/70">
                {futureTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
