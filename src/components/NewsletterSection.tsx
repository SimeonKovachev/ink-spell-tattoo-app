import { useEffect, useState } from "react";
import { sanityClient } from "../sanity/lib/client";

type PromotionItem = {
  _id: string;
  title: string;
  description: string;
};

export default function Promotion() {
  const [promotion, setPromotion] = useState<PromotionItem | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "promotion" && isActive == true][0]`)
      .then((data) => setPromotion(data));
  }, []);

  if (!promotion) return null;

  return (
    <section>
      <h2>Special Promotion</h2>
      <p>{promotion.title}</p>
      <p>{promotion.description}</p>
    </section>
  );
}
