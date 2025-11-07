"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, MapPin, TrendingUp, Star, Zap, BarChart3, ArrowRight, Sparkles, Users, BookOpen, FileText, Lightbulb, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const solutionsMenu = [
  {
    icon: MapPin,
    name: "Get More Local Customers",
    href: "/solutions/local-customers",
    description: "Dominate local search and Google Maps",
  },
  {
    icon: TrendingUp,
    name: "Get More Leads & Bookings",
    href: "/solutions/leads-and-bookings",
    description: "Convert visitors into customers",
  },
  {
    icon: Star,
    name: "Build Reviews & Reputation",
    href: "/solutions/reputation",
    description: "Turn happy customers into visible proof",
  },
  {
    icon: Zap,
    name: "Stay Active on Social & Search",
    href: "/solutions/always-on-marketing",
    description: "Consistent content that drives results",
  },
  {
    icon: BarChart3,
    name: "Know What's Working",
    href: "/solutions/insights",
    description: "Clear insights, better decisions",
  },
];

const servicesMenu = [
  {
    icon: MapPin,
    name: "Local Presence & Maps",
    href: "/services/local-presence",
    description: "Dominate local search and Google Maps",
  },
  {
    icon: TrendingUp,
    name: "SEO & Content Growth",
    href: "/services/seo-content",
    description: "Rank higher and attract more traffic",
  },
  {
    icon: Zap,
    name: "Social Media Management",
    href: "/services/social-media",
    description: "Consistent, engaging social presence",
  },
  {
    icon: Star,
    name: "Reviews & Feedback",
    href: "/services/reviews",
    description: "Build trust with authentic reviews",
  },
  {
    icon: Users,
    name: "Lead Capture & Forms",
    href: "/services/lead-capture",
    description: "Convert visitors into customers",
  },
];

const platformMenu: typeof solutionsMenu = [];

const resourcesMenu = [
  {
    icon: BookOpen,
    name: "Blog",
    href: "/resources/blog",
    description: "Latest insights and updates",
  },
];

const aboutMenu = [
  {
    icon: Building2,
    name: "About Growain",
    href: "/about",
    description: "Our mission and story",
  },
];

const dropdownMenus: Record<string, typeof solutionsMenu> = {
  Solutions: solutionsMenu,
  Services: servicesMenu,
  Platform: platformMenu,
  Resources: resourcesMenu,
  About: aboutMenu,
};

const navigation = [
  { name: "Solutions", href: "/solutions", hasDropdown: true },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Platform", href: "/platform", hasDropdown: false },
  { name: "Resources", href: "/resources", hasDropdown: true },
  { name: "About", href: "/about", hasDropdown: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-black/90 backdrop-blur-lg border-b border-primary/20 shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/growain.png"
                alt="Growain Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-primary text-glow leading-none">
                Growain
              </span>
              <span className="text-xs font-medium text-cyan-400 tracking-wide">
                A Cloudain Company
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <>
                    <button
                      className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5 flex items-center gap-1 group"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                    {activeDropdown === item.name && dropdownMenus[item.name] && (
                      <div
                        className="absolute left-0 top-full mt-2 w-[500px] bg-black/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-2xl shadow-primary/10 overflow-hidden z-50"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-3">
                            {dropdownMenus[item.name].map((menuItem) => (
                              <Link
                                key={menuItem.name}
                                href={menuItem.href}
                                className="group flex items-start gap-4 p-4 rounded-lg hover:bg-primary/10 transition-all duration-200 border border-transparent hover:border-primary/30"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:glow-primary transition-all duration-300 group-hover:scale-110">
                                  <menuItem.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {menuItem.name}
                                    </h3>
                                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                  </div>
                                  <p className="text-xs text-foreground/60 group-hover:text-foreground/80 transition-colors">
                                    {menuItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {item.name === "Solutions" && (
                            <div className="mt-4 pt-4 border-t border-primary/20">
                              <Link
                                href="/solutions"
                                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-primary hover:text-glow transition-all rounded-lg hover:bg-primary/5 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                View All Solutions
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/book-demo">Book a  Audit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-primary/20 bg-black/95 backdrop-blur-lg">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown && dropdownMenus[item.name] ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                        onClick={() => setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown className={cn(
                          "w-5 h-5 transition-transform duration-200",
                          mobileActiveDropdown === item.name && "rotate-180"
                        )} />
                      </button>
                      {mobileActiveDropdown === item.name && (
                        <div className="pl-4 pr-2 py-2 space-y-2">
                          {dropdownMenus[item.name].map((menuItem) => (
                            <Link
                              key={menuItem.name}
                              href={menuItem.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-all border border-transparent hover:border-primary/30"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileActiveDropdown(null);
                              }}
                            >
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                                <menuItem.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-foreground mb-0.5">
                                  {menuItem.name}
                                </h3>
                                <p className="text-xs text-foreground/60">
                                  {menuItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                          {item.name === "Solutions" && (
                            <Link
                              href="/solutions"
                              className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-primary rounded-lg hover:bg-primary/5 mt-2"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileActiveDropdown(null);
                              }}
                            >
                              View All Solutions
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 pb-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/book-demo">Book a  Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
