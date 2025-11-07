# Development Guide

## Quick Start

The development server is currently running at **http://localhost:3000**

## Available Routes

### Main Pages
- `/` - Home page with hero, features, and CTAs
- `/solutions` - Solutions overview
- `/services` - Services listing
- `/platform` - Platform features and modules
- `/about` - About Growain and Cloudain
- `/resources` - Resources hub
- `/book-demo` - Contact and demo booking form

### Solution Detail Pages
- `/solutions/local-customers` - Local SEO and Maps optimization

### To Be Implemented
Additional solution detail pages can be created following the same pattern:
- `/solutions/leads-and-bookings`
- `/solutions/reputation`
- `/solutions/always-on-marketing`
- `/solutions/insights`

## Adding New Pages

### 1. Create a new page directory
```bash
mkdir -p app/your-page-name
```

### 2. Create page.tsx
```tsx
"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function YourPage() {
  return (
    <div className="relative min-h-screen">
      {/* Your content here */}
    </div>
  );
}
```

### 3. Add navigation link
Update `components/Header.tsx` to include your new page in the navigation array.

## Creating New Components

### UI Components
Place reusable UI components in `components/ui/`:
```tsx
// components/ui/YourComponent.tsx
import { cn } from "@/lib/utils";

export function YourComponent({ className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* Component content */}
    </div>
  );
}
```

### Page Components
Place page-specific components in `components/`:
```tsx
// components/FeatureSection.tsx
export function FeatureSection() {
  return (
    <section className="py-20">
      {/* Section content */}
    </section>
  );
}
```

## Styling Guide

### Using Tailwind Classes
```tsx
<div className="bg-black text-primary border border-primary/20 rounded-lg p-6">
  Content
</div>
```

### Custom CSS Classes (in globals.css)
- `.dot-grid-bg` - Black background with dot grid pattern
- `.glow-primary` - Subtle green glow effect
- `.glow-primary-strong` - Strong green glow effect
- `.text-glow` - Text shadow glow effect
- `.hover-scale` - Scale on hover animation
- `.fade-in-up` - Fade in from bottom animation
- `.pulse-glow` - Pulsing glow for CTAs

### Color Usage
```tsx
// Text colors
className="text-primary"        // #00FF00 (neon green)
className="text-foreground"     // Main text color
className="text-foreground/80"  // 80% opacity

// Background colors
className="bg-secondary"         // #083121 (deep green)
className="bg-muted"            // #0A3323 (dark green-gray)
className="bg-primary/10"       // 10% opacity green
```

## Component Patterns

### Card with Hover Effect
```tsx
<Card className="hover-scale group">
  <CardHeader>
    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 transition-colors">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>
```

### Button Variants
```tsx
// Primary (default)
<Button>Click Me</Button>

// Outline
<Button variant="outline">Click Me</Button>

// Secondary
<Button variant="secondary">Click Me</Button>

// With icon
<Button>
  Text
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>
```

### Section Layout
```tsx
<section className="py-20 md:py-32 relative">
  <div className="container px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
        Section Title
      </h2>
      <p className="text-xl text-foreground/80">
        Section description
      </p>
    </div>
    {/* Section content */}
  </div>
</section>
```

## Three.js Backgrounds

The `ThreeBackground` component creates an animated particle field. Use it in any page:

```tsx
import { ThreeBackground } from "@/components/ThreeBackground";

export default function Page() {
  return (
    <section className="relative min-h-screen">
      <ThreeBackground />
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

## Responsive Design

Use Tailwind's responsive prefixes:
```tsx
className="
  text-base      /* Mobile */
  md:text-lg     /* Tablet */
  lg:text-xl     /* Desktop */
"
```

Common breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

## Animation Guidelines

### Hover Effects
- Use `transition-all` or `transition-colors` for smooth transitions
- Add `hover:` prefix for hover states
- Use `group` and `group-hover:` for parent-child hover effects

### Entrance Animations
- Add `fade-in-up` class for fade-in from bottom
- Use Framer Motion for complex animations
- Stagger animations with `style={{ animationDelay: \`\${index * 0.1}s\` }}`

### Performance
- Avoid animating expensive properties like `width` or `height`
- Prefer `transform` and `opacity`
- Use `will-change` sparingly

## Best Practices

1. **Always use TypeScript** - Type your props and state
2. **Use "use client"** - Add to components with interactivity
3. **Optimize images** - Use Next.js Image component (when needed)
4. **Semantic HTML** - Use proper HTML5 elements
5. **Accessibility** - Include ARIA labels and keyboard navigation
6. **Mobile-first** - Design for mobile, enhance for desktop
7. **Performance** - Lazy load heavy components
8. **Consistency** - Follow existing patterns and styles

## Debugging

### View in Browser
- Local: http://localhost:3000
- Network: http://192.168.31.2:3000

### Check Console
Open browser DevTools (F12) to check for:
- React errors
- Console logs
- Network requests
- Performance metrics

### Hot Reload
The dev server supports hot module replacement. Save files to see changes instantly.

## Building for Production

```bash
# Build
npm run build

# Test production build locally
npm start
```

## Deployment

The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting

Follow the hosting provider's Next.js deployment guide.

---

Happy coding!
