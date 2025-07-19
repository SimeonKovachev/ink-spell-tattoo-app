"use client";
import Image from "next/image";
import { Calendar } from "lucide-react";
import Button from "../Common/Button";
import { urlFor, getSizes } from "@/lib/image";
import { FlashPromo } from "@/types/flashPromo";

export default function FlashCard({ promo }: { promo: FlashPromo }) {
  return (
    <div
      key={promo._id}
      className="bg-gray-800/50 rounded-xl p-6 shadow-xl border border-accent-purple transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col"
    >
      {promo.image?.asset?.url && (
        <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg flex-shrink-0">
          <Image
            src={urlFor(promo.image, { preset: "promo" })}
            alt={promo.title}
            fill
            sizes={getSizes("promo")}
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2 text-white line-clamp-2">
          {promo.title}
        </h2>

        {promo.description && (
          <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
            {promo.description}
          </p>
        )}

        {/* <div className="text-sm text-gray-400 mb-4 mt-auto">
          {promo.validFrom && (
            <p className="mb-1">
              Валидна от: {new Date(promo.validFrom).toLocaleDateString("bg")}
            </p>
          )}
          {promo.validUntil && (
            <p>
              Валидна до: {new Date(promo.validUntil).toLocaleDateString("bg")}
            </p>
          )}
        </div> */}

        <Button
          text="Запишете час"
          type="filled"
          icon={<Calendar size={20} />}
          size="md"
          navigateTo="/contact"
          className="mt-auto"
        />
      </div>
    </div>
  );
}
