import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Growain",
  description: "Terms and conditions for using Growain's AI-powered marketing platform.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Terms of Service
            </h1>
            <p className="text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <Card className="border-primary/20 bg-black/40 backdrop-blur">
            <CardContent className="p-8 md:p-12 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">1. Acceptance of Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  By accessing or using Growain's platform and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">2. Description of Services</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Growain provides an AI-powered marketing platform that helps businesses manage their local SEO, content marketing, social media, reviews, and lead capture. Our Services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/80">
                  <li>Local presence and Maps optimization</li>
                  <li>SEO and content growth tools</li>
                  <li>Social media management</li>
                  <li>Review and reputation management</li>
                  <li>Lead capture and funnel optimization</li>
                  <li>Analytics and reporting</li>
                  <li>AI-powered insights and recommendations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">3. Account Registration</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>To use our Services, you must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be at least 18 years old or have parental consent</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">4. Subscription and Payment</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="font-semibold text-foreground">Fees:</p>
                  <p>You agree to pay all fees associated with your chosen subscription plan. Fees are billed in advance on a recurring basis (monthly or annually).</p>

                  <p className="font-semibold text-foreground mt-4">Billing:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Automatic renewal unless canceled before the renewal date</li>
                    <li>Payment must be made via authorized payment methods</li>
                    <li>All fees are non-refundable except as required by law</li>
                  </ul>

                  <p className="font-semibold text-foreground mt-4">Price Changes:</p>
                  <p>We reserve the right to modify pricing with 30 days' notice. Continued use after price changes constitutes acceptance.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">5. Acceptable Use</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful code, viruses, or malware</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the Services for fraudulent or deceptive purposes</li>
                    <li>Interfere with other users' access to the Services</li>
                    <li>Scrape, copy, or reverse engineer our platform</li>
                  </ul>
                  <p className="mt-3">
                    For detailed guidelines, see our{" "}
                    <Link href="/acceptable-use" className="text-primary hover:underline">
                      Acceptable Use Policy
                    </Link>.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">6. Intellectual Property</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="font-semibold text-foreground">Our Rights:</p>
                  <p>All content, features, and functionality of the Services are owned by Growain/Cloudain and protected by intellectual property laws.</p>

                  <p className="font-semibold text-foreground mt-4">Your Content:</p>
                  <p>You retain ownership of content you provide to the Services. By using our Services, you grant us a worldwide, non-exclusive license to use, store, and process your content to provide and improve our Services.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">7. Third-Party Integrations</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our Services integrate with third-party platforms (e.g., Google, Facebook, LinkedIn). Your use of these integrations is subject to their respective terms and policies. We are not responsible for third-party services or their actions.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">8. Data and Privacy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our collection and use of personal information is governed by our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>. By using our Services, you consent to our data practices as described therein.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">9. Disclaimers and Limitations</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="font-semibold text-foreground">Service Availability:</p>
                  <p>Services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted, error-free, or secure access.</p>

                  <p className="font-semibold text-foreground mt-4">No Guarantees:</p>
                  <p>We do not guarantee specific results, rankings, or business outcomes from using our Services. Marketing performance depends on many factors beyond our control.</p>

                  <p className="font-semibold text-foreground mt-4">Limitation of Liability:</p>
                  <p>To the maximum extent permitted by law, Growain and Cloudain shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">10. Termination</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>We may suspend or terminate your access to the Services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>For violation of these Terms</li>
                    <li>For non-payment of fees</li>
                    <li>For fraudulent or illegal activity</li>
                    <li>At our discretion with or without cause</li>
                  </ul>
                  <p className="mt-3">You may cancel your subscription at any time through your account settings.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">11. Indemnification</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You agree to indemnify and hold harmless Growain, Cloudain, and their affiliates from any claims, damages, or expenses arising from your use of the Services, violation of these Terms, or infringement of any rights of another party.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">12. Governing Law</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles. Any disputes shall be resolved in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">13. Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes via email or platform notification. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">14. Contact Information</h2>
                <div className="text-foreground/80 space-y-2">
                  <p>For questions about these Terms, contact:</p>
                  <div className="space-y-1 mt-3">
                    <p>Email: <a href="mailto:legal@growain.com" className="text-primary hover:underline">legal@growain.com</a></p>
                    <p>Address: Growain by Cloudain, [Your Business Address]</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
