/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Strandkorb-Buchungsvorhersage",
    href: "/usecases/strandkorbvermietung",
    category: { name: "Interaktives Beispiel" },
    description:
      "Wie viele Strandkörbe muss eine Strandkorbvermietung für den nächsten Tag bereit halten? Anhand der Wettervorhersage und des Wochentags trifft dieses beispielhafte Modell vorhersagen.",
    imageUrl:
      "https://images.unsplash.com/photo-1621540462628-a86e62126e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80&sat=-100",
  },

  {
    title: "Stimmungsanalyse",
    href: "/usecases/stimmungsanalyse",
    category: { name: "Interaktives Beispiel" },
    description:
      "Was denken meine Kunden über mich? Wie kann ich das Stimmungsbild automatisiert erfassen oder verärgerte Kunden speziell betreuen?",
    imageUrl:
      "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80&sat=-100",
  },
  {
    title: "Retourengründe im Onlineshop",
    href: "/usecases/retourengruende",
    category: { name: "Interaktives Beispiel" },
    description:
      "Womit sind meine Kunden unzufrieden? Können Retourengründe automatisch von einer Maschine verstanden und klassifiziert werden, um ein objektives Bild zu bekommen?",
    imageUrl:
      "https://images.unsplash.com/photo-1615678857339-4e7e51ce22db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80&sat=-100",
  },
  {
    title: "Informationen aus Berichten extrahieren",
    href: "/usecases/qa",
    category: { name: "Interaktives Beispiel" },
    description:
      "Niemand liest gern lange und komplizierte Berichte im Unternehmen. Kann eine KI automatisiert die Informationen extrahieren, die man in dem Moment benötigt?",
    imageUrl:
      "https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80&sat=-100",
  },
];

export default function Usecases() {
  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Usecases
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            Einsatzgebiete von KI mit Beispielen
          </p>
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="relative flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src={post.imageUrl}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-teal-600 mix-blend-multiply" />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-ocean-600">
                    {post.category.name}
                  </p>

                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </div>
              </div>
              <a href={post.href} className="absolute w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
