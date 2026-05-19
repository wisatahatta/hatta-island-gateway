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

      {/* MAP SECTION */}
      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28 border-t border-border/50">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Peta & Lokasi
            </span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl leading-tight">
              Menuju Surga yang Tersembunyi
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Pulau Hatta (Desa Rozengain) terletak di ujung paling timur dari
              Kepulauan Banda, Maluku Tengah. Letaknya yang terisolasi secara indah menjadikannya
              salah satu destinasi selam dan relaksasi terbaik di dunia.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Koordinat Geografis</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    4°35'12"S 130°02'16"E — Kampoeng Rozengain, Pulau Hatta.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Transportasi Laut</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dapat ditempuh menggunakan perahu cepat (speed boat) umum atau sewaan dari pelabuhan Banda Neira dalam waktu sekitar 45-60 menit.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://maps.app.goo.gl/jfEh9t2i21EbFnpS7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-sm shadow-sm"
              >
                Buka di Google Maps
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-glow)] aspect-video lg:aspect-[4/3] w-full bg-muted">
              <iframe
                title="Peta Lokasi Pulau Hatta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15908.162265975714!2d130.0273473!3d-4.5867419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d3e26cc9fe69bcb%3A0xeb7f7474d61744df!2sKampoeng%20Rozengain!5e0!3m2!1sen!2sid!4v1716110000000!5m2!1sen!2sid"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
