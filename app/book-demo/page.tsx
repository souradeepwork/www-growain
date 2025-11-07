"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { CheckCircle2, Calendar } from "lucide-react";

const industries = [
  "Local & Multi-location",
  "Healthcare & Wellness",
  "Ecommerce & Retail",
  "Pet & Baby Care",
  "Coffee & Hospitality",
  "Senior & Home Services",
  "Fitness & Salons",
  "Jewelers & Luxury",
  "Religious Organizations",
  "Marketing Agency",
  "Other",
];

const goals = [
  "Get more local customers",
  "Generate more leads & bookings",
  "Build reviews & reputation",
  "Stay active on social & search",
  "Understand what's working",
  "All of the above",
];

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "",
    goals: [] as string[],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch shortly to schedule your  growth audit.");
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-emerald-dark/20 to-black" />
        <div className="container relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center glow-primary">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary text-glow">
              See where you stand.
              <br />
              See what's possible.
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              Tell us about your business, locations, and goals. We'll review your current footprint
              and walk you through opportunities and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="glow-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Book Your  Growth Audit</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-primary/20 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-primary/20 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-primary/20 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-2 bg-black/50 border border-primary/20 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Industry *
                    </label>
                    <select
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-2 bg-black/50 border border-primary/20 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select your industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      What would you like help with? (Select all that apply)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {goals.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => handleGoalToggle(goal)}
                          className={`p-4 rounded-md border-2 text-left transition-all ${
                            formData.goals.includes(goal)
                              ? "border-primary bg-primary/10"
                              : "border-primary/20 hover:border-primary/40"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2
                              className={`w-5 h-5 shrink-0 mt-0.5 ${
                                formData.goals.includes(goal)
                                  ? "text-primary"
                                  : "text-foreground/30"
                              }`}
                            />
                            <span className="text-sm text-foreground">{goal}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Context (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 bg-black/50 border border-primary/20 rounded-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Tell us more about your goals, challenges, or questions..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full pulse-glow">
                    Book Your  Growth Audit
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* What You Receive */}
            <div className="mt-12 space-y-4">
              <h3 className="text-2xl font-display font-bold text-primary text-center mb-6">
                What You'll Receive
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Clear Audit</h4>
                    <p className="text-sm text-foreground/60">
                      A short, clear audit of your current presence
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">Strategy Walkthrough</h4>
                    <p className="text-sm text-foreground/60">
                      A call or recorded video explaining next steps
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">No Pressure</h4>
                    <p className="text-sm text-foreground/60">
                      Zero obligation to commit or purchase anything
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
