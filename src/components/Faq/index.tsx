import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden pb-8 pt-20 bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          paragraph="Here are some answers to common questions about Ink Spell Tattoo Studio and my services. If you have more questions, feel free to contact me."
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How do I book a tattoo appointment?"
              answer="You can easily book an appointment through my online booking system on the website or by calling me directly. Visit the 'Book Now' section for more details."
            />
            <SingleFaq
              question="What should I do to prepare for my tattoo session?"
              answer="Make sure to eat a good meal, stay hydrated, and get enough rest before your session. Avoid alcohol or blood-thinning substances 24 hours prior to your appointment."
            />
            <SingleFaq
              question="Do tattoos hurt?"
              answer="Pain levels vary from person to person and depend on the tattoo's placement. I strive to make your experience as comfortable as possible."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How do I care for my new tattoo?"
              answer="After your session, I will provide you with detailed aftercare instructions. Following these guidelines is crucial to ensure proper healing and vibrant results."
            />
            <SingleFaq
              question="Can I bring my own design?"
              answer="Absolutely! I encourage clients to bring their ideas or designs. I can also work with you to create a custom design that matches your vision."
            />
            <SingleFaq
              question="What is the cost of a tattoo?"
              answer="Tattoo prices depend on the size, complexity, and placement of the design. Contact me for a consultation to get an accurate estimate."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
