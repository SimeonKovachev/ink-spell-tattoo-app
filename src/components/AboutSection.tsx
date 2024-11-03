import Image from "next/image";
import styles from "../../public/styles/AboutMe.module.css";

export default function AboutMe() {
  return (
    <section id="about" className="relative py-16 text-black bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/images/about/about-background1.jpg')",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 relative">
        <div className="flex flex-col items-center justify-center mt-10 mb-20">
          <h2 className="heading text-gray-800 text-center text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gray-800"></div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative space-y-6">
            <div
              className={`${styles["-rotate-2"]} flex justify-center items-center`}
            >
              <div className="relative p-2 bg-gray-100 rounded-md shadow-2xl">
                <Image
                  src="/images/about/portrait.png"
                  alt="Portrait of Iva"
                  width={200}
                  height={200}
                  className="object-cover rounded shadow-md"
                />
                <Image
                  src="/images/about/paperclip.png"
                  alt="Paperclip"
                  width={50}
                  height={50}
                  className={`${styles.paperclip} absolute rotate-45 -top-4 left-4 drop-shadow`}
                />
              </div>
            </div>

            <div className="relative">
              <div className={`${styles["rotate-3"]} relative z-10`}>
                <Image
                  src="/images/about/tattoo-sample1.jpg"
                  alt="Tattoo Sample 1"
                  width={300}
                  height={300}
                  className={`rounded shadow-lg ${styles["mask-torn-edge"]}`}
                />
                <Image
                  src="/images/about/tape.png"
                  alt="Tape"
                  width={80}
                  height={80}
                  className="absolute top-4 -left-4 -rotate-12 w-24 drop-shadow-xl"
                />
              </div>

              <div
                className={`${styles["-rotate-2"]} absolute top-10 right-8 z-0`}
              >
                <Image
                  src="/images/about/tattoo-sample2.jpg"
                  alt="Tattoo Sample 2"
                  width={300}
                  height={300}
                  className={`rounded shadow-lg ${styles["mask-torn-edge"]}`}
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-start text-left px-6 md:px-16 py-20 rotate-3">
            <div className={styles.oldPaper}></div>

            <div className="relative z-10 space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Perfection That is Forever
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                I’m Iva, a concept artist turned tattoo artist. I’ve spent over
                10 years bringing characters and worlds to life through
                illustration, honing my skills in anatomy, textures, and
                realism. After earning certifications in Character and
                Environment Concept Art, I've embraced the world of tattooing –
                blending my passion for art with the ancient craft of ink.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                Each tattoo I create is infused with the storytelling and
                attention to detail I’ve developed over my career. Whether
                you’re seeking a mystical touch with astrology and
                Tarot-inspired art, or a custom design that speaks to your
                unique journey, I'm here to make it happen.
              </p>
              <p className="text-lg font-bold italic text-right text-yellow-500">
                - Ink Spell
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
