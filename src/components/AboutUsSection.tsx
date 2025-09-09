import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="omoss" className="py-16 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/traditionelltmaleri.png"
              alt="Målare arbetar på gammal byggnad"
              width={500}
              height={350}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-4xl font-bold mb-6 text-stone-600 section-divider">
              Om Oss
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-stone-600">
              Gammel Byggnadsmåleri drivs av Ericson & Söner AB, erfarna och
              passionerade målare med djupgående kunskap om traditionella
              måleritekniker och material. Med en kärlek till gamla byggnaders
              själ och karaktär, specialiserar vi oss på att bevara och
              återställa deras skönhet med högsta hantverksmässiga standard. Vi
              är baserade i Vadstena och verkar i Östergötland, där vi med
              stolthet bidrar till att skydda vårt kulturarv.
            </p>
            <p className="text-lg leading-relaxed text-stone-600">
              Vårt fokus ligger på att använda tidstrogna metoder och material
              som linoljefärg och traditionella pigment för att säkerställa en
              autentisk och hållbar finish, särskilt viktigt för K-märkta hus
              och annan äldre bebyggelse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
