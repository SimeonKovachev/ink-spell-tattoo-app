"use client";

import { faqData } from "@/config/faqData.config";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import FaqForm from "./FaqForm";

type FaqProps = {
  isFormVisible?: boolean;
};

const Faq = ({ isFormVisible = true }: FaqProps) => {
  return (
    <section
      id="faq"
      className="flex flex-col gap-16 relative z-20 overflow-hidden bg-dark py-12 md:py-24 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          subtitle="ЧЕСТО ЗАДАВАНИ ВЪПРОСИ"
          title="Всичко, което искате да знаете"
          paragraph="Тук ще намерите отговори на най-често задаваните въпроси за Ink Spell и моите услуги. Ако имате допълнителни въпроси, не се колебайте да се свържете с мен."
          width="840px"
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

      {isFormVisible && (
        <div className="flex justify-center">
          <FaqForm />
        </div>
      )}
    </section>
  );
};

export default Faq;
