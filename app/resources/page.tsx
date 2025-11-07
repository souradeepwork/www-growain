"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, BookOpen, TrendingUp, ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-emerald-dark/20 to-black" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary text-glow">
              Resources built from real work, not theory.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              Guides, articles, and stories to help you grow in an AI + local-first world.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Blog</CardTitle>
                <CardDescription className="text-base mt-2">
                  Practical breakdowns on local SEO, AI search, reviews, social, analytics, and real
                  patterns we see across industries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/blog">
                    Read Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Guides & Playbooks</CardTitle>
                <CardDescription className="text-base mt-2">
                  Downloadable frameworks for local SEO, review systems, seasonal campaigns, and
                  vertical-specific strategies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/guides">
                    Browse Guides
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale group">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors group-hover:glow-primary">
                  <TrendingUp className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl">Case Studies</CardTitle>
                <CardDescription className="text-base mt-2">
                  Real stories from real clients. Case studies appear only when we have permission
                  and verifiable results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/resources/case-studies">
                    View Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-secondary/20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Ready to put these insights into action?
            </h2>
            <p className="text-xl text-foreground/80">
              Get a personalized growth audit and see how these strategies apply to your specific
              business.
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
