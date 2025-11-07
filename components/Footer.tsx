import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  Solutions: [
    { name: "Get More Local Customers", href: "/solutions/local-customers" },
    { name: "Get More Leads & Bookings", href: "/solutions/leads-and-bookings" },
    { name: "Build Reviews & Reputation", href: "/solutions/reputation" },
    { name: "Stay Active on Social & Search", href: "/solutions/always-on-marketing" },
    { name: "Know What's Working", href: "/solutions/insights" },
  ],
  Services: [
    { name: "Local Presence & Maps", href: "/services/local-presence" },
    { name: "SEO & Content Growth", href: "/services/seo-content" },
    { name: "Social Media Management", href: "/services/social-media" },
    { name: "Reviews & Feedback", href: "/services/reviews" },
    { name: "Lead Capture & Forms", href: "/services/lead-capture" },
  ],
  Resources: [
    { name: "Blog", href: "/resources/blog" },
  ],
  Company: [
    { name: "About Growain", href: "/about" },
  ],
};

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Sitemap", href: "/sitemap.xml" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/growain",
    icon: Linkedin
  },
  {
    name: "Twitter",
    href: "https://twitter.com/growain",
    icon: Twitter
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-secondary/5 to-black border-t border-primary/20">
      <div className="absolute inset-0 dot-noise opacity-5" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/growain.png"
                  alt="Growain Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-primary text-glow leading-none">
                  Growain
                </span>
                <span className="text-xs font-medium text-cyan-400 tracking-wide mt-1">
                  A Cloudain Company
                </span>
              </div>
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-sm">
              AI-powered marketing system built by Cloudain. Turn Google Search, Maps, reviews, and social into real visits, calls, bookings, and sales.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 flex items-center justify-center transition-all group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-glow transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-display font-semibold text-primary mb-4 uppercase tracking-wider">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm text-foreground/40">
              © {new Date().getFullYear()} Growain by Cloudain. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-xs text-foreground/50 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="mx-2 text-foreground/30">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Powered by Badge */}
          <div className="flex items-center space-x-2 text-xs text-foreground/40">
            <span>Powered by</span>
            <span className="font-semibold text-primary">Cloudain AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
