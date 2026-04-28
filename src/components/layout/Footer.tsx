import { SocialLinks } from '@/components/ui/SocialLinks';
import { navItems } from '@/data/social';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/70">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
              Matt Gilbert
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              SDET/Principal Test Engineer I with 13+ years of experience in software testing,
              test automation, and quality engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Connect</h4>
            <SocialLinks iconSize="md" />
            <p className="mt-4 text-sm text-muted-foreground">
              Let's connect and discuss how I can help improve your testing practices.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {currentYear} Matt Gilbert. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
