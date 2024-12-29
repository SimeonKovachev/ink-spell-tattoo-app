"use client";

import { faqData } from "@/config/faqData.config";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-b from-black to-dark py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          paragraph="Here are some answers to common questions about Ink Spell Tattoo Studio and my services. If you have more questions, feel free to contact me."
          width="640px"
          center
        />

        <div className="mt-[60px] grid gap-6 px-4 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {faqData.map((faq, index) => (
            <SingleFaq
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
