import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Growain",
  description: "Learn how Growain collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Privacy Policy
            </h1>
            <p className="text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <Card className="border-primary/20 bg-black/40 backdrop-blur">
            <CardContent className="p-8 md:p-12 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">1. Introduction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Growain by Cloudain ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered marketing platform and services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">2. Information We Collect</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="font-semibold text-foreground">Personal Information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, phone number, and company information</li>
                    <li>Billing and payment information</li>
                    <li>Account credentials and preferences</li>
                  </ul>

                  <p className="font-semibold text-foreground mt-4">Business Information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Google Business Profile data</li>
                    <li>Website analytics and performance metrics</li>
                    <li>Social media account information</li>
                    <li>Customer reviews and feedback</li>
                    <li>Marketing campaign data</li>
                  </ul>

                  <p className="font-semibold text-foreground mt-4">Automatically Collected Information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address, browser type, and device information</li>
                    <li>Usage data and interaction with our platform</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">3. How We Use Your Information</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>We use the collected information to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our marketing services</li>
                    <li>Generate AI-powered insights and recommendations</li>
                    <li>Manage your account and process payments</li>
                    <li>Send service updates, newsletters, and marketing communications</li>
                    <li>Analyze platform usage and optimize performance</li>
                    <li>Detect, prevent, and address technical issues or fraud</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">4. AI and Data Processing</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our AI engine (powered by Cloudain) processes your business data to provide intelligent marketing insights, content recommendations, and automated optimization. We use industry-standard encryption and security measures to protect data during processing and storage.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">5. Data Sharing and Disclosure</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Service providers who assist in operating our platform (e.g., cloud hosting, analytics)</li>
                    <li>Third-party integrations you authorize (e.g., Google, social media platforms)</li>
                    <li>Legal authorities when required by law or to protect our rights</li>
                    <li>Business partners with your explicit consent</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell your personal information to third parties.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">6. Data Security</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">7. Your Rights</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, contact us at{" "}
                    <a href="mailto:privacy@growain.com" className="text-primary hover:underline">
                      privacy@growain.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">8. Cookies and Tracking</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings. For more information, see our{" "}
                  <Link href="/cookies" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">9. Data Retention</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">10. International Data Transfers</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">11. Children's Privacy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">12. Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">13. Contact Us</h2>
                <div className="text-foreground/80 space-y-2">
                  <p>If you have questions about this Privacy Policy, please contact us:</p>
                  <div className="space-y-1 mt-3">
                    <p>Email: <a href="mailto:privacy@growain.com" className="text-primary hover:underline">privacy@growain.com</a></p>
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
