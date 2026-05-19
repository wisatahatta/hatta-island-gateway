import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BedDouble, Utensils, Wind, Bath } from "lucide-react";
import homestay from "@/assets/homestay.jpg";
import heroImg from "@/assets/hero-hatta.jpg";
import tiara from "@/assets/tiara.jpg";
import bakarei from "@/assets/bakarei.jpg";
import terapung from "@/assets/terapung.jpg";

export const Route = createFileRoute("/penginapan")({
  head: () => ({
    meta: [
      { title: "Penginapan & Homestay — Pulau Hatta" },
      { name: "description", content: "Pilihan homestay kayu yang dikelola warga Desa Rozengain, lengkap dengan makan 3x dan suasana khas Banda." },
      { property: "og:image", content: homestay },
    ],
  }),
  component: Page,
});

const WA_MSG =
  "Halo, saya ingin menanyakan informasi dan ketersediaan penginapan di Pulau Hatta (Desa Rozengain). Mohon dibantu, terima kasih.";

const homestays = [
  {
    name: "Penginapan Tiara",
    desc: "Homestay nyaman di pinggir pantai pasir putih dengan pemandangan langsung ke perairan laut lepas yang biru.",
    img: tiara,
    fasilitas: ["Kipas angin", "Kamar mandi dalam", "Termasuk makan 3x", "View laut"],
  },
  {
    name: "Penginapan Bakarei",
    desc: "Akomodasi sejuk dan asri di tengah perkebunan pala bersejarah Desa Rozengain, menghadirkan kedamaian alami.",
    img: bakarei,
    fasilitas: ["AC", "Kamar mandi dalam", "Termasuk makan 3x", "Wi-Fi terbatas"],
  },
  {
    name: "Penginapan Terapung",
    desc: "Pengalaman unik menginap langsung di atas permukaan air laut kristal Pulau Hatta dengan akses snorkeling langsung dari teras kamar.",
    img: terapung,
    fasilitas: ["Termasuk makan 3x", "Kamar mandi dalam", "Antar-jemput dermaga", "Akses langsung laut"],
  },
];

const facilityIcon = (f: string) => {
  if (f.toLowerCase().includes("ac") || f.toLowerCase().includes("kipas")) return <Wind className="w-3.5 h-3.5" />;
  if (f.toLowerCase().includes("makan")) return <Utensils className="w-3.5 h-3.5" />;
  if (f.toLowerCase().includes("mandi")) return <Bath className="w-3.5 h-3.5" />;
  return <BedDouble className="w-3.5 h-3.5" />;
};

function Page() {
  return (
    <>
      <section className="relative text-primary-foreground overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Pemandangan Pulau Hatta"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/45" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Akomodasi</span>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl max-w-3xl font-bold leading-tight">Penginapan & Homestay</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-base md:text-lg leading-relaxed">
            Semua penginapan dikelola langsung oleh keluarga di Desa Rozengain.
            Ketersediaan kamar dapat berubah — silakan konfirmasi melalui
            WhatsApp untuk informasi terkini.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homestays.map((h) => (
            <article key={h.name} className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={h.img} alt={h.name} loading="lazy" width={1280} height={896} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="font-display text-2xl">{h.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{h.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {/* {h.fasilitas.map((f) => (
                    <li key={f} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-xs text-secondary-foreground">
                      {facilityIcon(f)} {f}
                    </li>
                  ))} */}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-ocean text-primary-foreground p-10 lg:p-14 text-center shadow-[var(--shadow-glow)]">
          <h2 className="font-display text-3xl lg:text-4xl">Siap memesan penginapan?</h2>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/85">
            Hubungi pengelola Desa Rozengain langsung melalui WhatsApp untuk
            konfirmasi tanggal, jumlah tamu, dan harga.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              phoneNumber="6285243909392"
              message={WA_MSG}
              label="Pesan Penginapan via WhatsApp"
            />
          </div>
        </div>
      </section>

      <WhatsAppButton
        phoneNumber="6285243909392"
        variant="floating"
        message={WA_MSG}
        label="WhatsApp"
      />
    </>
  );
}
