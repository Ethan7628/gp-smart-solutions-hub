import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/it-services", label: "IT Services" },
  { to: "/beauty", label: "Beauty & Salon" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !toggleRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-app">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 md:px-6 transition-all duration-300",
            scrolled ? "glass shadow-soft" : "bg-transparent",
          )}
          aria-label="Primary"
        >
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="GP Smart Solutions home"
          >
            <img src={logo} alt="GP Smart Solutions logo" className="h-10 w-18" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-accent transition-colors"
                  activeProps={{ className: "text-foreground bg-accent" }}
                  aria-current={isActive(n.to) ? "page" : undefined}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button asChild size="sm" className="bg-gradient-brand hover:opacity-95 shadow-elegant">
              <Link to="/beauty">Book Appointment</Link>
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div
            ref={menuRef}
            id="mobile-menu"
            className="lg:hidden mt-2 rounded-2xl glass shadow-soft p-4 animate-in fade-in slide-in-from-top-2"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent"
                    aria-current={isActive(n.to) ? "page" : undefined}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 flex flex-col gap-2">
                <Button asChild variant="outline" onClick={() => setOpen(false)}>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
                <Button asChild className="bg-gradient-brand" onClick={() => setOpen(false)}>
                  <Link to="/beauty">Book Appointment</Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
