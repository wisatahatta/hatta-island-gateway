import { MessageCircle } from "lucide-react";

// TODO: ganti dengan nomor WhatsApp resmi pengelola desa (format internasional tanpa +)
const WA_NUMBER = "6281234567890";

export function buildWaLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

interface Props {
  message: string;
  label: string;
  variant?: "solid" | "floating" | "outline";
  className?: string;
}

export function WhatsAppButton({ message, label, variant = "solid", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const styles =
    variant === "floating"
      ? "fixed bottom-6 right-6 z-50 px-5 py-4 rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-glow)] hover:scale-105"
      : variant === "outline"
        ? "px-6 py-3 rounded-full border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground"
        : "px-7 py-4 rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5 text-base";

  return (
    <a
      href={buildWaLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}
