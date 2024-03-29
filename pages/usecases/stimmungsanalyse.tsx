import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import CallToAction from "../../components/shared/CallToAction";
import { classNames } from "../../lib/utils";
const CsvToHtmlTable: any = dynamic(
  () =>
    // @ts-ignore
    import("react-csv-to-table").then((module) => module.CsvToHtmlTable),
  {
    ssr: false,
  }
);

const meta = {
  title: "Stimmungsanalyse",
  description:
    "Was denken meine Kunden über mich? Wie kann ich das Stimmungsbild automatisiert erfassen oder verärgerte Kunden speziell betreuen?",
  image:
    "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80&sat=-100",
};

const sampleData = `// @ts-ignore
Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb
Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4
Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4
Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1
Hornet 4 Drive,21.4,6,258,110,3.08,3.215,19.44,1,0,3,1
Hornet Sportabout,18.7,8,360,175,3.15,3.44,17.02,0,0,3,2
Valiant,18.1,6,225,105,2.76,3.46,20.22,1,0,3,1
Duster 360,14.3,8,360,245,3.21,3.57,15.84,0,0,3,4
Merc 240D,24.4,4,146.7,62,3.69,3.19,20,1,0,4,2
Merc 230,22.8,4,140.8,95,3.92,3.15,22.9,1,0,4,2
Merc 280,19.2,6,167.6,123,3.92,3.44,18.3,1,0,4,4
Merc 280C,17.8,6,167.6,123,3.92,3.44,18.9,1,0,4,4
Merc 450SE,16.4,8,275.8,180,3.07,4.07,17.4,0,0,3,3
Merc 450SL,17.3,8,275.8,180,3.07,3.73,17.6,0,0,3,3
Merc 450SLC,15.2,8,275.8,180,3.07,3.78,18,0,0,3,3
Cadillac Fleetwood,10.4,8,472,205,2.93,5.25,17.98,0,0,3,4
Lincoln Continental,10.4,8,460,215,3,5.424,17.82,0,0,3,4
Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`;

const views = [{ id: "demo", name: "Interaktive Demo" }];

export default function BeachchairsPage({}) {
  const [activeView, setActiveView] = useState(views[0].id);
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
      </Head>
      <Navigation />
      <div className="relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-ocean-700 to-cyan-600 xl:inline sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              {meta.title}
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {meta.description}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#demo"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-ocean-600 hover:bg-ocean-700 md:py-4 md:text-lg md:px-10"
                >
                  Live-Demo
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="https://github.com/stackOcean-official/sentiment-showcase">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium bg-white border border-transparent rounded-md text-ocean-600 hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    <AiFillGithub className="w-5 h-5 mr-2" />
                    Github
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1679&q=80&sat=-100"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-teal-600 mix-blend-multiply" />
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-4 py-4 bg-white shadow-xl lg:px-8 rounded-2xl sm:px-10 sm:py-10">
            <div className="mx-auto text-lg max-w-prose">
              <h2>
                <span className="block text-base font-semibold tracking-wide text-center uppercase text-ocean-600">
                  Das Problem
                </span>
                <span className="block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                  Markt und Meinungsforschung
                </span>
              </h2>
            </div>
            <div className="mx-auto mt-6 prose prose-lg text-center text-gray-500 prose-ocean ">
              <p>
                Es ist für jedes Unternehmen wichtig sich einen Marktvorteil zu
                erarbeiten. Dies kann zum Beispiel dadurch geschehen, dass ein
                Unternehmen weiß, wie gut die eigenen Produkte oder die Produkte
                der Konkurrenz angenommen werden.
                <br />
                Die öffentliche Meinung zu Produkten ist beispielsweise in
                Textdaten, die auf Social-Media Plattformen wie Twitter,
                Facebook und Reddit veröffentlicht werden, enthalten.
                <br />
                Bei so großen Mengen an Textdaten ist es absolut
                unwirtschaftlich, diese Daten manuell auszuwerten. Allerdings
                können diese Textdaten als Input für eine Stimmungs- oder auf
                Englisch Sentiment-Analyse verwendet werden.
              </p>
            </div>
          </div>
          <div className="relative px-4 py-4 mt-10 bg-white shadow-xl lg:px-8 rounded-2xl sm:px-12 sm:py-10">
            <div className="mx-auto text-lg max-w-prose">
              <h2>
                <span className="block text-base font-semibold tracking-wide text-center uppercase text-ocean-600">
                  Die Lösung
                </span>
                <span className="block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                  Stimmungsanalyse mit KI
                </span>
              </h2>
            </div>
            <div className="mx-auto mt-6 prose prose-lg text-center text-gray-500 prose-ocean">
              <p>
                Mit einer Stimmungsanalyse ist es möglich, enorme Mengen an
                Textdaten von einem KI Modell in kurzer Zeit auswerten zu lassen
                - eine Auswertung für die ein Mensch im Zweifel mehrere Monate
                oder Jahre brauchen würde.
                <br />
                <br />
                Zur Demonstration, haben wir hier ein Modell zur Verfügung
                gestellt, das in der Lage ist die Stimmung in kurzen Texten zu
                erfassen. Das zu Grunde liegende Modell kann auch so verwendet
                werden, dass längere Texte Satz für Satz analysiert werden.
              </p>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="w-full py-10 mx-auto max-w-7xl">
            <div className="sm:hidden">
              <label htmlFor="views" className="sr-only">
                Ansicht wählen
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected view URL. */}
              <select
                id="views"
                name="views"
                className="block w-full border-gray-300 rounded-md focus:ring-ocean-500 focus:border-ocean-500"
                defaultValue={
                  views.find((view) => activeView === view.id)?.name
                }
              >
                {views.map((view) => (
                  <option key={view.name}>{view.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden sm:block">
              <nav
                className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
                aria-label="views"
              >
                {views.map((view, viewIdx) => (
                  <button
                    key={view.name}
                    onClick={() => setActiveView(view.id)}
                    className={classNames(
                      view.id === activeView
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700",
                      viewIdx === 0 ? "rounded-l-lg" : "",
                      viewIdx === views.length - 1 ? "rounded-r-lg" : "",
                      "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                    )}
                    aria-current={view.id === activeView ? "page" : undefined}
                  >
                    <span>{view.name}</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        view.id === activeView
                          ? "bg-ocean-500"
                          : "bg-transparent",
                        "absolute inset-x-0 bottom-0 h-0.5"
                      )}
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>
          {activeView === "demo" ? (
            <div
              className="relative px-6 py-10 overflow-hidden bg-white shadow-xl rounded-2xl sm:px-12 sm:py-20"
              id="demo"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-ocean-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-ocean-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative w-full overflow-hidden h-156">
                <iframe
                  scrolling="no"
                  frameBorder="0"
                  className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg"
                  src="https://ml-demo.stackocean.com/sentiment-showcase/"
                ></iframe>
              </div>
            </div>
          ) : null}
          <div className="relative px-4 py-4 mt-10 bg-white shadow-xl lg:px-8 rounded-2xl sm:px-12 sm:py-10">
            <div className="mx-auto text-lg max-w-prose">
              <h2>
                <span className="block text-base font-semibold tracking-wide text-center uppercase text-ocean-600">
                  Ähnliche Anwendungsfälle
                </span>
                <span className="block mt-2 text-3xl font-bold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl">
                  Stimmungsanalyse mit KI
                </span>
              </h2>
            </div>
            <div className="mx-auto mt-6 prose prose-lg text-center text-gray-500 prose-ocean">
              <p>
                Dieser Anwendungsfall lässt sich einfach auch auf andere
                Problemstellungen übertragen.
              </p>
              <ul className="text-left list-disc">
                <li>
                  Priorisierung und Bildung einer Reihenfolge im Kundensupport
                </li>
                <li>Erfassung von Mitarbeiterzufriedenheit aus Befragungen</li>
                <li>
                  Automatisierte Auswertung von Freitextfeldern in Umfragen
                </li>
                <li>Feststellung von Meinungsentwicklung über Zeit</li>
                <li>...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
