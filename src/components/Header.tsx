import Button from "@/components/Button";

export default function Header() {
  return (
    <header
      className="relative h-screen flex items-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-background.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content aligned to the left */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-6xl tracking-wider leading-tight font-bold">
          Ink Your Story, <br />
          <span className="text-yellow-400">Cast Your Spell</span>
        </h1>

        <p className="text-lg md:text-xl mt-4 mb-8 text-gray-300 max-w-lg">
          Hey! I'm Iva – a seasoned artist who’s traded canvas for skin. With a
          decade in illustration and fresh tattoo skills from Tattooing 101, I'm
          here to blend passion with ink. Whether you're ready to rock some
          custom ink or curious about astrology and Tarot, let’s turn your story
          into an unforgettable piece of art! ✨
        </p>

        <div className="flex gap-6">
          <Button text="Book Now" type="filled" />
          <Button text="View Gallery" type="outlined" />
        </div>
      </div>
    </header>
  );
}