import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Anchor, Fish, HandCoins, ShieldCheck } from "lucide-react";
import liveaboard from "@/assets/liveaboard.jpg";

export const Route = createFileRoute("/registrasi-lob")({
  head: () => ({
    meta: [
      { title: "Registrasi Live on Board (LOB) — Pulau Hatta" },
      { name: "description", content: "Tata tertib sandar, perlindungan terumbu karang, dan retribusi desa wisata untuk kapal live on board di Pulau Hatta." },
      { property: "og:image", content: liveaboard },
    ],
  }),
  component: Page,
});

const WA_MSG =
  "Halo, saya ingin melaporkan registrasi kedatangan kapal LOB ke Pulau Hatta. Berikut detail kapal saya:";

const rules = [
  {
    icon: <Anchor className="w-5 h-5" />,
    title: "Tata tertib sandar",
    body: "Kapal wajib berlabuh pada area yang telah ditentukan. Dilarang menaruh jangkar di atas terumbu karang.",
  },
  {
    icon: <Fish className="w-5 h-5" />,
    title: "Perlindungan terumbu karang",
    body: "Tidak diperkenankan membuang limbah, oli, atau air kotor ke perairan. Snorkeling dan diving harus didampingi pemandu lokal.",
  },
  {
    icon: <HandCoins className="w-5 h-5" />,
    title: "Retribusi desa wisata",
    body: "Setiap kapal LOB dikenakan kontribusi yang seluruhnya digunakan untuk perawatan lingkungan dan kebutuhan desa.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Wajib lapor kedatangan",
    body: "Lapor kepada pengelola desa untuk koordinasi sandar dan kegiatan tamu.",
  },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden text-background">
        <img src={liveaboard} alt="Kapal live on board berlabuh di Banda" width={1280} height={896} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/65" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <span className="text-xs uppercase tracking-[0.2em] opacity-80">Live on Board</span>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl max-w-3xl">Registrasi & Informasi LOB</h1>
          <p className="mt-5 max-w-2xl text-background/90">
            Setiap kapal live on board yang singgah ke Pulau Hatta wajib mengikuti
            tata tertib desa untuk menjaga kelestarian terumbu karang dan
            keberlangsungan wisata bagi generasi berikutnya.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((r) => (
            <div key={r.title} className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-soft)]">
              <div className="w-11 h-11 rounded-full bg-accent/20 text-primary grid place-items-center">
                {r.icon}
              </div>
              <h3 className="mt-4 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-ocean text-primary-foreground p-10 lg:p-14 shadow-[var(--shadow-glow)]">
          <div className="grid lg:grid-cols-[1.5fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl">Daftarkan kedatangan kapal Anda</h2>
              <p className="mt-3 text-primary-foreground/85 max-w-2xl">
                Hubungi admin / Syahbandar desa melalui WhatsApp dengan
                menyertakan nama kapal, jumlah tamu & kru, tanggal kedatangan,
                dan rencana aktivitas selama di Pulau Hatta.
              </p>
            </div>
            <WhatsAppButton
              phoneNumber="6281240881479"
              message={WA_MSG}
              label="Registrasi Kapal via WhatsApp"
            />
          </div>
        </div>
      </section>

      <WhatsAppButton
        phoneNumber="6281240881479"
        variant="floating"
        message={WA_MSG}
        label="WhatsApp"
      />
    </>
  );
}
