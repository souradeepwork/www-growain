"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import {
  MapPin,
  FileText,
  Share2,
  Star,
  MousePointerClick,
  Zap,
  Eye,
  BarChart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Local Presence & Maps Optimization",
    description:
      "Complete management of Google Business Profiles and local directory presence for maximum visibility.",
    href: "/services/local-seo",
  },
  {
    icon: FileText,
    title: "SEO & Content Growth",
    description:
      "Research-driven content strategy that answers real questions and drives qualified visitors.",
    href: "/services/seo-content",
  },
  {
    icon: Share2,
    title: "Social Media & Promotion Management",
    description:
      "Consistent, on-brand social content that supports your search and conversion goals.",
    href: "/services/social-orchestration",
  },
  {
    icon: Star,
    title: "Reviews, Feedback & Survey System",
    description:
      "Automated review collection and sentiment analysis to build trust and improve service.",
    href: "/services/reviews-surveys",
  },
  {
    icon: MousePointerClick,
    title: "Lead Capture, Forms & Chat",
    description:
      "Optimized contact points that make it easy for customers to take the next step.",
    href: "/services/lead-capture",
  },
  {
    icon: Zap,
    title: "Website Performance & Web Vitals",
    description:
      "Continuous monitoring and optimization of site speed and user experience metrics.",
    href: "/services/web-vitals",
  },
  {
    icon: Eye,
    title: "Competitor & Market Intelligence",
    description:
      "Track how competitors show up so your strategy is based on reality, not assumptions.",
    href: "/services/competitor-intel",
  },
  {
    icon: BarChart,
    title: "Automation, Analytics & Reporting",
    description:
      "Clear alerts and simple reports that show what's working and why, in plain language.",
    href: "/services/automation-analytics",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-emerald-dark/20 to-black" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary text-glow">
              Managed services powered by the Growain Engine.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              Growain combines a dedicated team with a cloud and AI platform from Cloudain. You get
              focused services that are measurable, connected, and built for your stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-foreground/80">
              All services share the same tracking and insight layer. No conflicting numbers. No
              mystery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="hover-scale group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagement Works */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-secondary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glow-primary">
              <CardContent className="p-8 md:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  How Engagement Works
                </h2>
                <div className="flex flex-wrap items-center gap-4 text-lg text-foreground/80">
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    Discovery
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    Growth Audit
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    90-Day Plan
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    Execution & Iteration
                  </span>
                </div>
                <p className="text-lg text-foreground/80">
                  We start with understanding where you are, design a clear plan, and execute with
                  full transparency and regular optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Ready to get started?
            </h2>
            <p className="text-xl text-foreground/80">
              Book a  growth audit and we'll show you exactly which services will move the
              needle for your business.
            </p>
            <Button size="lg" className="pulse-glow" asChild>
              <Link href="/book-demo">
                Book a  Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
