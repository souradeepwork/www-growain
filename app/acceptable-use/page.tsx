import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Acceptable Use Policy | Growain",
  description: "Guidelines for acceptable use of Growain's platform and services.",
};

export default function AcceptableUsePage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Acceptable Use Policy
            </h1>
            <p className="text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <Card className="border-primary/20 bg-black/40 backdrop-blur">
            <CardContent className="p-8 md:p-12 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">1. Purpose</h2>
                <p className="text-foreground/80 leading-relaxed">
                  This Acceptable Use Policy ("Policy") governs your use of Growain's platform and services. This Policy is designed to ensure our Services are used responsibly, legally, and ethically by all users.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">2. Prohibited Activities</h2>
                <p className="text-foreground/80 mb-3">
                  You may not use our Services to:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Illegal Activities</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground/80">
                      <li>Violate any applicable laws, regulations, or ordinances</li>
                      <li>Engage in fraudulent, deceptive, or misleading practices</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Facilitate money laundering or terrorist financing</li>
                      <li>Distribute illegal content or materials</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Harmful Content</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground/80">
                      <li>Publish or distribute hateful, discriminatory, or offensive content</li>
                      <li>Harass, threaten, or intimidate others</li>
                      <li>Promote violence or self-harm</li>
                      <li>Share sexually explicit or inappropriate material</li>
                      <li>Spread misinformation or disinformation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Security Violations</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground/80">
                      <li>Attempt to gain unauthorized access to our systems or networks</li>
                      <li>Introduce viruses, malware, or other malicious code</li>
                      <li>Conduct denial-of-service attacks or similar disruptions</li>
                      <li>Probe, scan, or test vulnerabilities of our infrastructure</li>
                      <li>Bypass security measures or authentication mechanisms</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Abusive Behavior</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground/80">
                      <li>Send spam, unsolicited messages, or automated communications</li>
                      <li>Create fake reviews or manipulate reputation systems</li>
                      <li>Scrape or harvest data without permission</li>
                      <li>Use bots or automated tools to access Services</li>
                      <li>Impersonate another person or entity</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Resource Abuse</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-foreground/80">
                      <li>Consume excessive bandwidth or server resources</li>
                      <li>Interfere with other users' access to Services</li>
                      <li>Overload or stress-test our infrastructure</li>
                      <li>Resell or redistribute Services without authorization</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">3. Marketing and Content Guidelines</h2>
                <div className="space-y-3 text-foreground/80">
                  <p>When using Growain for marketing activities, you must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Comply with all applicable advertising and marketing laws</li>
                    <li>Respect intellectual property and trademark rights</li>
                    <li>Provide accurate and truthful information about products/services</li>
                    <li>Honor consumer privacy and consent preferences</li>
                    <li>Follow platform-specific rules (Google, Facebook, LinkedIn, etc.)</li>
                    <li>Avoid deceptive, manipulative, or coercive tactics</li>
                    <li>Respect competitors and avoid disparagement</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">4. Review and Reputation Management</h2>
                <div className="space-y-3 text-foreground/80">
                  <p>When managing reviews and reputation:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Only solicit reviews from genuine customers</li>
                    <li>Do not offer incentives for positive reviews</li>
                    <li>Do not create, post, or manipulate fake reviews</li>
                    <li>Do not suppress or hide legitimate negative feedback</li>
                    <li>Respond professionally to all reviews</li>
                    <li>Comply with review platform policies</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">5. Data and Privacy</h2>
                <div className="space-y-3 text-foreground/80">
                  <p>You must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Comply with all applicable data protection laws (GDPR, CCPA, etc.)</li>
                    <li>Obtain proper consent before collecting personal data</li>
                    <li>Securely store and protect customer information</li>
                    <li>Respect individual privacy rights and preferences</li>
                    <li>Provide transparent privacy notices</li>
                    <li>Report data breaches promptly</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">6. Account Responsibility</h2>
                <div className="space-y-2 text-foreground/80">
                  <p>As an account holder, you are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>All activities conducted under your account</li>
                    <li>Maintaining confidentiality of login credentials</li>
                    <li>Promptly reporting unauthorized access</li>
                    <li>Ensuring team members comply with this Policy</li>
                    <li>Monitoring and controlling third-party access</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">7. Reporting Violations</h2>
                <div className="text-foreground/80 space-y-2">
                  <p>
                    If you become aware of any violation of this Policy, please report it immediately to:
                  </p>
                  <div className="space-y-1 mt-3">
                    <p>Email: <a href="mailto:abuse@growain.com" className="text-primary hover:underline">abuse@growain.com</a></p>
                    <p>
                      Include detailed information about the violation, including screenshots or evidence if available.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">8. Enforcement</h2>
                <div className="space-y-3 text-foreground/80">
                  <p>Violations of this Policy may result in:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Warning and request for corrective action</li>
                    <li>Temporary suspension of Services</li>
                    <li>Permanent termination of account</li>
                    <li>Removal of content or data</li>
                    <li>Legal action and cooperation with law enforcement</li>
                    <li>Forfeiture of fees paid</li>
                  </ul>
                  <p className="mt-3">
                    We reserve the right to take action at our discretion without prior notice if we believe there is imminent harm or risk.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">9. Cooperation with Authorities</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may cooperate with law enforcement, regulatory agencies, and legal authorities in investigating violations of this Policy or applicable laws, including disclosing user information when legally required.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">10. Changes to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Policy from time to time. Continued use of our Services after changes constitutes acceptance of the updated Policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">11. Contact Us</h2>
                <div className="text-foreground/80 space-y-2">
                  <p>For questions about this Acceptable Use Policy:</p>
                  <div className="space-y-1 mt-3">
                    <p>Email: <a href="mailto:legal@growain.com" className="text-primary hover:underline">legal@growain.com</a></p>
                    <p>Terms of Service: <Link href="/terms" className="text-primary hover:underline">View Terms</Link></p>
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
