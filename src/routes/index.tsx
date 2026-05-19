import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Leaf, Ship, Anchor } from "lucide-react";
import heroImg from "@/assets/hero-hatta.jpg";
import underwater from "@/assets/underwater.jpg";
import nutmeg from "@/assets/nutmeg.jpg";
import homestay from "@/assets/homestay.jpg";
import liveaboard from "@/assets/liveaboard.jpg";
import fuli from "@/assets/fuli.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pulau Hatta — Desa Wisata Rozengain, Banda Neira" },
      {
        name: "description",
        content:
          "Selamat datang di Pulau Hatta. Jelajahi sejarah pengasingan Bung Hatta, surga bawah laut Banda, dan rumah rempah pala di Desa Rozengain.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Pemandangan udara Pulau Hatta dengan air laut jernih dan terumbu karang"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24 text-background">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/15 backdrop-blur text-xs uppercase tracking-[0.2em]">
            <Anchor className="w-3.5 h-3.5" /> Banda Neira · Maluku Tengah
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold max-w-4xl leading-[1.05]">
            Selamat datang di Pulau Hatta — Desa Rozengain.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-background/85">
            Jelajahi jejak sejarah pengasingan Bung Hatta, pesona bawah laut
            Banda, dan surga rempah pala di salah satu sudut paling tenang di
            Indonesia timur.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/penginapan"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-background text-foreground font-medium hover:bg-accent transition-colors"
            >
              Pesan penginapan <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/registrasi-lob"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-background/40 text-background hover:bg-background/10 transition-colors"
            >
              Registrasi LOB
            </Link>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Sejarah · Rozengain
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">
              Pulau kecil dengan nama besar dalam sejarah bangsa.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Dahulu dikenal sebagai <em>Rosengain</em> di peta-peta Belanda
              abad ke-17, pulau ini diabadikan dengan nama Mohammad Hatta —
              proklamator Republik Indonesia — yang menjalani masa
              pengasingannya di Kepulauan Banda. Hari ini, Desa Rozengain
              memelihara warisan itu lewat keramahan warganya, kebun pala
              turun-temurun, dan laut yang menjaga sejarah di setiap karangnya.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4 text-sm">
              <Stat n="1936" l="Tahun pengasingan" />
              <Stat n="40+" l="Titik selam" />
              <Stat n="100%" l="Dikelola warga" />
            </div>
          </div>
          <div className="relative">
            <img
              src={underwater}
              alt="Terumbu karang dan ikan tropis di perairan Banda"
              loading="lazy"
              width={1280}
              height={896}
              className="rounded-2xl shadow-[var(--shadow-glow)] aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:block w-40 h-40 rounded-2xl overflow-hidden border-4 border-background shadow-[var(--shadow-soft)]">
              <img src={nutmeg} alt="Buah pala dengan fuli merah" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Sorotan</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">Tiga pintu untuk mengenal Pulau Hatta.</h2>
            <p className="mt-4 text-muted-foreground">
              Semua layanan dikelola langsung oleh warga desa, dan pemesanan
              dilakukan melalui satu kanal WhatsApp resmi.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <HighlightCard
              to="/penginapan"
              img={homestay}
              icon={<Compass className="w-5 h-5" />}
              eyebrow="Penginapan"
              title="Tinggal di rumah warga"
              desc="Homestay nyaman yang menghadap laut dan keramahan khas penduduk Pulau Hatta."
            />
            <HighlightCard
              to="/produk-lokal"
              img={fuli}
              icon={<Leaf className="w-5 h-5" />}
              eyebrow="Produk Lokal"
              title="Pala, fuli, dan manisan pala"
              desc="Rempah unggulan dan manisan pala khas langsung dari Desa Rozengain."
            />
            <HighlightCard
              to="/registrasi-lob"
              img={liveaboard}
              icon={<Ship className="w-5 h-5" />}
              eyebrow="Live on Board"
              title="Registrasi sandar LOB"
              desc="Tata tertib berlabuh, perlindungan karang, dan informasi retribusi desa wisata."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function HighlightCard({
  to,
  img,
  icon,
  eyebrow,
  title,
  desc,
}: {
  to: "/penginapan" | "/produk-lokal" | "/registrasi-lob";
  img: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-glow)] transition-all duration-500"
    >
      <div className="aspect-[5/4] overflow-hidden">
        <img
          src={img}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent font-semibold">
          {icon} {eyebrow}
        </div>
        <h3 className="mt-3 font-display text-2xl">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-medium">
          Lihat detail <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
