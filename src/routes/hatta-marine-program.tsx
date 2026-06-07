import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  GraduationCap,
  Waves,
  HeartHandshake,
  BookOpen,
  Anchor,
  Users,
  Compass,
  ExternalLink,
  Mail,
  Instagram,
  Info,
} from "lucide-react";
import underwater from "@/assets/underwater.jpg";
import fish from "@/assets/fish.jpg";
import marineLogo from "@/assets/hatta-marine-logo.jpg";

export const Route = createFileRoute("/hatta-marine-program")({
  head: () => ({
    meta: [
      { title: "Hatta Marine Program — Konservasi & Edukasi Laut Pulau Hatta" },
      {
        name: "description",
        content:
          "Hatta Marine Program (Pusat Edukasi & Informasi Laut). Kenali Lautnya. Ceritakan Kisahnya. Jaga Masa Depannya. Sedikit harapan untuk menyelamatkan laut Pulau Hatta.",
      },
      { property: "og:image", content: underwater },
    ],
  }),
  component: Page,
});

const WA_MSG =
  "Halo, saya ingin bertanya lebih lanjut mengenai kegiatan dan program di Hatta Marine Program (konservasi/internship/eco-diving). Mohon informasinya, terima kasih.";

const partners = [
  {
    name: "BandaSEA e.V.",
    desc: "Organisasi non-profit Jerman yang berdedikasi menjaga ekosistem laut Kepulauan Banda melalui program pengelolaan sampah berkelanjutan, daur ulang, dan edukasi bagi anak-anak.",
    link: "https://en.bandasea.org",
  },
  {
    name: "Luminocean",
    desc: "Yayasan Cahaya Samudera Indonesia yang bergerak di bidang konservasi laut Banda. Mereka mengoordinasikan pelatihan ilmiah, riset ekologi terumbu karang, dan magang biologi laut.",
    link: "https://www.luminocean.com",
  },
  {
    name: "Naira Dive Operator",
    desc: "Operator selam lokal berbasis di Banda Neira yang menjadi mitra logistik utama, memfasilitasi pelatihan selam ilmiah, serta mengelola akomodasi ramah lingkungan di Pulau Hatta.",
    link: "https://www.instagram.com/nairadiveoperator",
  },
  {
    name: "Universitas Banda Naira (UBN)",
    desc: "Mitra akademis lokal dalam program beasiswa penelitian skripsi kelautan untuk memberdayakan mahasiswa daerah dalam pengelolaan terumbu karang.",
    link: null,
  },
];

const coreActivities = [
  {
    icon: <FishIcon className="w-5 h-5" />,
    title: "Belajar tentang Kehidupan Laut",
    desc: "Mengenal keanekaragaman hayati laut yang luar biasa di sekitar perairan Pulau Hatta secara ilmiah namun mudah dipahami.",
  },
  {
    icon: <Waves className="w-5 h-5" />,
    title: "Ekosistem Pesisir & Karang",
    desc: "Mempelajari kondisi nyata terumbu karang dan ekosistem pesisir serta tantangan ekologis yang sedang dihadapi.",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Berbagi Informasi Kelautan",
    desc: "Menyediakan dan menyebarkan edukasi kelautan yang ramah dan dapat diakses oleh semua lapisan masyarakat.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Mendukung Riset & Kolaborasi",
    desc: "Memfasilitasi riset kelautan dan membuka pintu kolaborasi bagi akademisi lokal maupun internasional.",
  },
  {
    icon: <Anchor className="w-5 h-5" />,
    title: "Perikanan Berkelanjutan",
    desc: "Mendorong penerapan praktik perikanan ramah lingkungan untuk masa depan nelayan dan laut Pulau Hatta.",
  },
];

function FishIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 16s5-7 10-7 10 7 10 7-5 7-10 7-10-7-10-7Z" />
      <path d="M12 9v14" />
      <path d="M18 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    </svg>
  );
}

function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={underwater}
            alt="Penyelam mengamati terumbu karang di Pulau Hatta"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/45" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 mb-6">
            <img
              src={marineLogo}
              alt="Hatta Marine Program Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-background shadow-[var(--shadow-glow)] object-cover bg-white"
            />
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Edukasi · Informasi · Komunitas
              </span>
              <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl max-w-4xl font-bold leading-[1.1]">
                Hatta Marine Program
              </h1>
            </div>
          </div>
          <p className="mt-4 text-accent text-lg md:text-xl font-medium tracking-wide">
            "Kenali Lautnya. Ceritakan Kisahnya. Jaga Masa Depannya."
          </p>
          <p className="mt-5 max-w-2xl text-primary-foreground/85 text-base md:text-lg leading-relaxed">
            Hatta Marine Program lahir dari keinginan sederhana: mengenal laut lebih dekat, mendokumentasikannya, dan membagikan pengetahuan itu kepada generasi berikutnya. Karena menjaga laut selalu dimulai dari mengenalnya.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-24">
        {/* Core Vision & Purpose */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Mengapa Kami Ada
            </span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl">
              Mengenal laut, mulai dari rumah sendiri.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Laut di sekitar Pulau Hatta itu luar biasa. Tapi semakin sedikit yang benar-benar mengenalnya. Padahal, kita lebih mungkin menjaga sesuatu yang kita pahami.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed font-medium text-foreground">
              Karena itu, Hatta Marine Program hadir untuk membantu lebih banyak orang belajar, mengenal, dan terhubung dengan laut di sekitar mereka. Di pulau kecil yang dikelilingi laut luas ini, setiap ombak membawa cerita.
            </p>
            <blockquote className="mt-6 border-l-4 border-accent pl-4 italic text-muted-foreground">
              "Sedikit harapan untuk menyelamatkan laut."
            </blockquote>
          </div>
          <div className="relative">
            <img
              src={fish}
              alt="Keanekaragaman ikan karang Pulau Hatta"
              loading="lazy"
              width={1024}
              height={683}
              className="rounded-2xl shadow-[var(--shadow-glow)] aspect-[4/3] object-cover"
            />
          </div>
        </div>

        {/* Activities / What We Do Section */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Aktivitas Kami</span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl">Jadi, Kita Ngapain Aja?</h2>
            <p className="mt-4 text-muted-foreground">
              Program kami berpusat pada edukasi kelautan praktis, pemantauan ekosistem terumbu karang, dan kolaborasi konservasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreActivities.map((act) => (
              <div
                key={act.title}
                className="rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-full bg-accent/20 text-primary grid place-items-center mb-5">
                  {act.icon}
                </div>
                <h3 className="font-display text-xl mb-2.5">{act.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{act.desc}</p>
              </div>
            ))}

            {/* Siapa yang bisa ikut card */}
            <div className="rounded-2xl bg-accent/10 border border-accent/20 p-7 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-full bg-accent/30 text-accent-foreground grid place-items-center mb-5">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl mb-2.5 text-accent-foreground font-semibold">Siapa yang Bisa Ikut?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Siapa saja.</strong> Mulai dari anak-anak, pelajar, nelayan, pemuda desa, guru, peneliti, komunitas, hingga instansi pemerintah dan swasta. Kalau kamu peduli dengan laut, selalu ada ruang untuk terlibat.
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent">
                Semua Terbuka untuk Terlibat
              </div>
            </div>
          </div>
        </div>

        {/* Mimpi Sederhana Banner */}
        <div className="mb-24 rounded-3xl bg-secondary/60 border border-border p-8 lg:p-12 text-center max-w-4xl mx-auto">
          <Info className="w-8 h-8 text-accent mx-auto mb-4" />
          <h3 className="font-display text-2xl mb-3">Mimpi Kami Sederhana</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Kami ingin lebih banyak orang mengenal lautnya sendiri. Karena laut bukan cuma tempat mencari nafkah atau destinasi wisata. Laut adalah rumah bagi ribuan kehidupan yang harus dijaga bersama.
          </p>
        </div>

        {/* Partners & Collaborators - Hidden for now */}
        {/*
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Kolaborasi</span>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl">Mitra Kolaborasi</h2>
            <p className="mt-4 text-muted-foreground">
              Program ini dijalankan bersama oleh jaringan komunitas lokal dan organisasi internasional untuk menjaga perairan Banda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-6 rounded-2xl bg-secondary/30 border border-border flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-xl mb-3 flex items-center gap-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {partner.desc}
                  </p>
                </div>
                {partner.link && (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline w-fit"
                  >
                    Kunjungi Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        */}

        {/* Contact Links & CTA */}
        <div className="rounded-3xl bg-gradient-ocean text-primary-foreground p-10 lg:p-14 shadow-[var(--shadow-glow)]">
          <div className="grid lg:grid-cols-[1.5fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl">Mari Berkontribusi Bersama Kami</h2>
              <p className="mt-3 text-primary-foreground/85 max-w-2xl">
                Hubungi kami untuk kolaborasi riset, program edukasi anak-anak, daur ulang sampah, atau pelatihan selam ilmiah Reef Check di Pulau Hatta.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/90">
                <a
                  href="https://www.instagram.com/hattamarineprogram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@hattamarineprogram</span>
                </a>

              </div>
            </div>
            <div className="flex flex-col gap-3">
              <WhatsAppButton
                phoneNumber="6281343470279"
                message={WA_MSG}
                label="Hubungi Naira Dive via WhatsApp"
              />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton
        phoneNumber="6281343470279"
        variant="floating"
        message={WA_MSG}
        label="Hubungi Kami"
      />
    </>
  );
}
