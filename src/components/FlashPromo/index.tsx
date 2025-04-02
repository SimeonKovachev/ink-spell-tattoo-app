"use client";

import Image from "next/image";
import Button from "../Common/Button";
import { Calendar } from "lucide-react";
import { urlFor, getSizes } from "@/lib/image";
import { FlashPromo } from "@/types/flashPromo";

interface FlashPromosClientProps {
  promos: FlashPromo[];
}

export default function FlashPromosClient({ promos }: FlashPromosClientProps) {
  if (!promos || promos.length === 0) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Няма активни Flash промоции в момента
          </h2>
          <p className="text-gray-400">
            Следете ни, за да не пропуснете бъдещи оферти!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900/95 to-gray-900 text-white py-20 lg:py-28 px-4 md:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">
            Flash татуировки Плевен – Промо оферти и уникални дизайни
          </h1>
          <p className="text-gray-300 mt-2">
            Готови авторски tattoo дизайни с ограничена наличност. Подходящи за
            жени и мъже – само в Ink Spell Studio Плевен.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {promos.map((promo) => (
            <div
              key={promo._id}
              className="bg-gray-800/50 rounded-xl p-6 shadow-xl border border-accent-purple transition-transform duration-300 hover:-translate-y-2"
            >
              {promo.image?.asset?.url && (
                <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={urlFor(promo.image, { preset: "promo" })}
                    alt={promo.title}
                    fill
                    sizes={getSizes("promo")}
                    className="object-cover"
                  />
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2 text-white">
                {promo.title}
              </h2>

              {promo.description && (
                <p className="text-gray-300 mb-4">{promo.description}</p>
              )}

              <div className="text-sm text-gray-400 mb-2">
                {promo.validFrom && (
                  <p>
                    Валидна от:{" "}
                    {new Date(promo.validFrom).toLocaleDateString("bg")}
                  </p>
                )}
                {promo.validUntil && (
                  <p>
                    Валидна до:{" "}
                    {new Date(promo.validUntil).toLocaleDateString("bg")}
                  </p>
                )}
              </div>

              <Button
                text="Запишете час"
                type="filled"
                icon={<Calendar size={20} />}
                size="md"
                navigateTo="/contact"
                className="mt-2"
              />
            </div>
          ))}
        </div>

        <div className="text-sm text-gray-400 mt-12 max-w-3xl mx-auto text-center">
          Открийте вашата следваща татуировка сред нашите Flash промоции в Ink
          Spell – Плевен. Уникални женски и мъжки дизайни, лесен избор без
          лутане, гарантирано качество и стил. Подходящи за първа татуировка или
          бърз tattoo с характер. Запишете час още днес!
        </div>
      </div>
    </section>
  );
}
