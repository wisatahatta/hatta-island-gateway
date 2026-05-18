import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import nutmeg from "@/assets/nutmeg.jpg";
import fish from "@/assets/fish.jpg";
import crafts from "@/assets/crafts.jpg";

export const Route = createFileRoute("/produk-lokal")({
  head: () => ({
    meta: [
      { title: "Produk Lokal & Hasil Bumi — Pulau Hatta" },
      { name: "description", content: "Biji pala, fuli, ikan asap, dan kerajinan tangan asli Desa Rozengain — langsung dari produsen ke pembeli." },
      { property: "og:image", content: nutmeg },
    ],
  }),
  component: Page,
});

const WA_MSG =
  "Halo, saya tertarik untuk membeli produk lokal dari Pulau Hatta (Desa Rozengain). Mohon informasi ketersediaan dan harga.";

const products = [
  { name: "Biji Pala Pilihan", desc: "Pala kering kualitas ekspor dari kebun warisan keluarga di Rozengain.", img: nutmeg, tag: "Rempah" },
  { name: "Fuli / Bunga Pala", desc: "Selubung merah pala yang langka, harum, dan kaya cita rasa.", img: nutmeg, tag: "Rempah" },
  { name: "Ikan Asap Tradisional", desc: "Ikan tongkol dan cakalang yang diasapi dengan cara tradisional Banda.", img: fish, tag: "Hasil Laut" },
  { name: "Kerajinan Anyaman", desc: "Tas dan tikar serat alam buatan ibu-ibu desa.", img: crafts, tag: "Kerajinan" },
];

function Page() {
  return (
    <>
      <section className="bg-spice text-spice-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
          <span className="text-xs uppercase tracking-[0.2em] opacity-80">Hasil Bumi</span>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl max-w-3xl">Produk Lokal & Hasil Bumi</h1>
          <p className="mt-5 max-w-2xl text-spice-foreground/90">
            Pala dan fuli Banda telah mengubah jalan sejarah dunia. Kini, hasil
            bumi Rozengain dapat Anda bawa pulang langsung dari produsennya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-[var(--shadow-glow)] transition-all duration-500">
              <div className="aspect-square overflow-hidden">
                <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-spice font-semibold">{p.tag}</span>
                <h2 className="mt-1.5 font-display text-xl">{p.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-spice text-spice-foreground p-10 lg:p-14 text-center">
          <h2 className="font-display text-3xl lg:text-4xl">Tertarik dengan produk kami?</h2>
          <p className="mt-3 max-w-xl mx-auto text-spice-foreground/90">
            Kirim pesan WhatsApp ke pengelola desa untuk detail harga, berat,
            dan pengiriman ke kota Anda.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton message={WA_MSG} label="Pesan Produk via WhatsApp" />
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" message={WA_MSG} label="WhatsApp" />
    </>
  );
}
