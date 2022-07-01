/* This example requires Tailwind CSS v2.0+ */
const posts = [
  {
    title: "Strandkorb-Buchungsvorhersage",
    href: "/usecases/beachchairs",
    category: { name: "Interaktives Beispiel" },
    description:
      "Ein simples Maschine-Learning Modell, das mit Hilfe von Linearer Regression und historischen Daten die Nutzung von Strandkörben an einem bestimmten Tag vorhersagt.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1621540462628-a86e62126e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80&sat=-100",
  },
];

export default function Usecases() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Usecases
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Einsatzgebiete von KI mit Beispielen
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="relative flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-teal-600 mix-blend-multiply" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
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
