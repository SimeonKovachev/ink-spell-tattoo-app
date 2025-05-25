// components/Flash/FlashPromosClient.tsx
"use client";
import SectionTitle from "../Common/SectionTitle";
import { FlashPromo } from "@/types/flashPromo";
import FlashCard from "./FLashCard";

export default function FlashPromosClient({
  promos,
}: {
  promos: FlashPromo[];
}) {
  if (!promos?.length) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white px-4">
        <p className="text-center text-lg text-gray-400">
          Няма активни Flash промоции в момента – следете ни за нови оферти!
        </p>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <SectionTitle
            subtitle="FLASH ПРОМОЦИИ"
            title="Готови авторски дизайни"
            paragraph="Уникални татуировки за жени и мъже – само в Ink Spell Studio, Плевен."
            width="840px"
            center
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <FlashCard key={promo._id} promo={promo} />
          ))}
        </div>

        <p className="mt-12 max-w-3xl mx-auto text-center text-sm text-gray-400">
          Открийте вашата следваща татуировка сред нашите Flash промоции в Ink
          Spell – Плевен. Уникални женски и мъжки дизайни, лесен избор без
          лутане, гарантирано качество и стил. Подходящи за първа татуировка или
          бърз tattoo с характер. Запишете час още днес!
        </p>
      </div>
    </section>
  );
}
