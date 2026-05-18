import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BedDouble, Utensils, Wind, Bath } from "lucide-react";
import homestay from "@/assets/homestay.jpg";
import heroImg from "@/assets/hero-hatta.jpg";

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
    name: "Homestay Rozengain Bahari",
    desc: "Bangunan kayu dua kamar tepat di pinggir pantai pasir putih. Cocok untuk pasangan atau keluarga kecil.",
    img: homestay,
    fasilitas: ["Kipas angin", "Kamar mandi dalam", "Termasuk makan 3x", "View laut"],
  },
  {
    name: "Homestay Pala Banda",
    desc: "Rumah warga di tengah kebun pala. Sarapan dengan kopi rempah dan ikan segar setiap pagi.",
    img: heroImg,
    fasilitas: ["AC", "Kamar mandi dalam", "Termasuk makan 3x", "Wi-Fi terbatas"],
  },
  {
    name: "Homestay Mata Air",
    desc: "Akomodasi sederhana dengan teras luas, dekat dengan dermaga utama dan titik snorkeling.",
    img: homestay,
    fasilitas: ["Kipas angin", "Kamar mandi dalam", "Termasuk makan 3x", "Antar-jemput dermaga"],
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
      <section className="bg-[var(--gradient-ocean)] text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
          <span className="text-xs uppercase tracking-[0.2em] opacity-80">Akomodasi</span>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl max-w-3xl">Penginapan & Homestay</h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/85">
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
                  {h.fasilitas.map((f) => (
                    <li key={f} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary text-xs text-secondary-foreground">
                      {facilityIcon(f)} {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-[var(--gradient-ocean)] text-primary-foreground p-10 lg:p-14 text-center">
          <h2 className="font-display text-3xl lg:text-4xl">Siap memesan penginapan?</h2>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/85">
            Hubungi pengelola Desa Rozengain langsung melalui WhatsApp untuk
            konfirmasi tanggal, jumlah tamu, dan harga.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton message={WA_MSG} label="Pesan Penginapan via WhatsApp" />
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" message={WA_MSG} label="WhatsApp" />
    </>
  );
}
