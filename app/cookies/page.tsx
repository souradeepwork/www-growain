import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Growain",
  description: "Learn how Growain uses cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-dark flex items-center justify-center mx-auto">
              <Cookie className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
              Cookie Policy
            </h1>
            <p className="text-foreground/60">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <Card className="border-primary/20 bg-black/40 backdrop-blur">
            <CardContent className="p-8 md:p-12 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">1. What Are Cookies</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience, remember your preferences, and analyze how you use our Services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">2. Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Essential Cookies</h3>
                    <p className="text-foreground/80">
                      Required for the website to function properly. These cookies enable core functionality such as security, network management, and accessibility.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-foreground/70">
                      <li>Session management</li>
                      <li>Authentication and security</li>
                      <li>Load balancing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Performance Cookies</h3>
                    <p className="text-foreground/80">
                      Collect information about how visitors use our website, such as which pages are visited most often and if users receive error messages.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-foreground/70">
                      <li>Google Analytics</li>
                      <li>Page load times</li>
                      <li>Error tracking</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Functional Cookies</h3>
                    <p className="text-foreground/80">
                      Allow the website to remember choices you make and provide enhanced, personalized features.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-foreground/70">
                      <li>Language preferences</li>
                      <li>User interface customization</li>
                      <li>Remember login details</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Targeting/Advertising Cookies</h3>
                    <p className="text-foreground/80">
                      Used to deliver relevant advertisements and track ad campaign effectiveness.
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-foreground/70">
                      <li>Google Ads</li>
                      <li>LinkedIn Ads</li>
                      <li>Retargeting pixels</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">3. Third-Party Cookies</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We use services from third-party providers that may set cookies on your device:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-foreground/80">
                  <li><strong>Google Analytics:</strong> Website traffic and usage analysis</li>
                  <li><strong>Google Ads:</strong> Advertising and conversion tracking</li>
                  <li><strong>LinkedIn:</strong> Professional networking and B2B marketing</li>
                  <li><strong>Twitter:</strong> Social media integration and analytics</li>
                  <li><strong>Cloudflare:</strong> Security and performance optimization</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">4. How to Manage Cookies</h2>
                <div className="space-y-3 text-foreground/80">
                  <p className="font-semibold text-foreground">Browser Settings:</p>
                  <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Block all cookies</li>
                    <li>Accept only first-party cookies</li>
                    <li>Delete cookies after browsing</li>
                    <li>Set preferences for specific websites</li>
                  </ul>

                  <p className="font-semibold text-foreground mt-4">Browser-Specific Instructions:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Edge</a></li>
                  </ul>

                  <p className="mt-4">
                    Note: Blocking certain cookies may affect website functionality and your user experience.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">5. Do Not Track Signals</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Some browsers include a "Do Not Track" feature. Our website does not currently respond to Do Not Track signals, but we respect your privacy choices as outlined in this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">6. Cookie Duration</h2>
                <div className="space-y-2 text-foreground/80">
                  <p><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser</p>
                  <p><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until manually deleted</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">7. Updates to This Policy</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We may update this Cookie Policy to reflect changes in technology, legislation, or our practices. We will notify you of significant changes through our website or email.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-display font-bold text-primary">8. Contact Us</h2>
                <div className="text-foreground/80 space-y-2">
                  <p>For questions about our use of cookies:</p>
                  <div className="space-y-1 mt-3">
                    <p>Email: <a href="mailto:privacy@growain.com" className="text-primary hover:underline">privacy@growain.com</a></p>
                    <p>Privacy Policy: <Link href="/privacy" className="text-primary hover:underline">View Privacy Policy</Link></p>
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
