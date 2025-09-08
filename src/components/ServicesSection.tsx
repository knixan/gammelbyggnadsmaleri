import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Traditionellt Måleri",
      description:
        "Invändigt och utvändigt måleri med fokus på traditionella tekniker. Vi hanterar allt från spackling och förarbete till slutlig ytbehandling.",
    },
    {
      title: "Fasadmålning",
      description:
        "Professionell målning av träfasader, puts och tegel med anpassade färgsystem för optimal hållbarhet och estetik.",
    },
    {
      title: "Tapetsering",
      description:
        "Vi erbjuder traditionell tapetsering med hög precision för att återställa eller försköna dina väggar.",
    },
    {
      title: "Ådring & Imitation",
      description:
        "Specialistkompetens inom ådringsmålning för att skapa illusionen av trä, marmor eller andra exklusiva material på möbler, pelare och paneler.",
    },
    {
      title: "Linolje- & Oljefärgsmåleri",
      description:
        "Expetmålning med linolja och äldre oljefärger, idealiskt för K-märkta hus och fastigheter där autenticitet är avgörande.",
    },
    {
      title: "Restaureringsmåleri",
      description:
        "Fokus på att bevara originalmaterial och historisk karaktär vid restaurering av äldre byggnader.",
    },
  ];

  return (
    <section id="tjanster" className="py-16 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-700 section-divider">
          Våra Tjänster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-50 p-8 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-stone-700">
                {service.title}
              </h3>
              <p className="text-lg leading-relaxed text-stone-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
