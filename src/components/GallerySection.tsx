import Image from "next/image";

const GallerySection = () => {
  const galleryItems = [
    {
      src: "/images/fasadrestaurering.png",
      alt: "Exempel på traditionellt måleri",
      title: "Fasadrestaurering",
      description: "Detaljerad fasadmålning av sekelskifteshus.",
    },
    {
      src: "/images/marmorimmitation.png",
      alt: "Ådringsmålning på möbel",
      title: "Ådring på möbel",
      description: "Imitation av marmor på en antik byrå.",
    },
    {
      src: "/images/interiormålning.png",
      alt: "Interiörmålning med linoljefärg",
      title: "Interiörmålning",
      description:
        "Klassisk interiörmålning med linoljefärg i ett gammalt hus.",
    },
  ];

  return (
    <section id="galleri" className="py-16 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">
          Vårt Galleri
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={250}
                className="w-full h-92 object-cover mx-auto"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-stone-800">
                  {item.title}
                </h3>
                <p className="text-stone-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
