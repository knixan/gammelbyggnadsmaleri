import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/images/restaurera.png')" }}
    >
      <div className="text-center text-stone-50 bg-stone-800/50  p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">
          Bevara Hantverket. Restaurera med Omsorg.
        </h1>
        <p className="text-xl mb-8">
          Experter på traditionellt måleri för gamla byggnader i Vadstena med
          omnejd.
        </p>
        <Link
          href="#kontakt"
          className="bg-yellow-600 hover:bg-yellow-500 text-stone-50 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
        >
          Begär offert
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
