import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import logoImg from "../assets/logo.jpg";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/penginapan", label: "Penginapan" },
  { to: "/produk-lokal", label: "Produk Lokal" },
  { to: "/registrasi-lob", label: "Registrasi LOB" },
] as const;

export function SiteLayout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImg}
              alt="Logo Desa Rozengain"
              className="w-10 h-10 rounded-full object-cover border border-border/50 shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold">Pulau Hatta</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Desa Rozengain</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${active ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <button
            aria-label="Buka menu"
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-5 py-3 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm ${pathname === n.to ? "text-primary font-semibold" : "text-foreground"
                    }`}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-secondary/40 mt-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Logo Desa Rozengain"
                className="w-12 h-12 rounded-full object-cover border border-border/50 shadow-sm"
              />
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold">Pulau Hatta</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Desa Rozengain</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Desa Rozengain — Banda Neira, Maluku Tengah. Jejak sejarah, surga
              bawah laut, dan rumah sang rempah.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Navigasi</div>
            <ul className="space-y-1.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-muted-foreground hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-semibold mb-1">Kontak</div>
            <a
              href="https://wa.me/6281240881479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              <span>+62 812-4088-1479</span>
            </a>
            <a
              href="https://www.instagram.com/rozengainpulauhatta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
            >
              <Instagram className="w-4 h-4" />
              <span>@rozengainpulauhatta</span>
            </a>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>© {new Date().getFullYear()} Desa Wisata Rozengain — Pulau Hatta. Semua hak dilindungi.</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span>
            Didukung oleh{" "}
            <a
              href="https://www.instagram.com/inspire.ind/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors"
            >
              @inspire.ind
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
