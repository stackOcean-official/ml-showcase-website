import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { AiFillGithub } from "react-icons/ai";
import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import CallToAction from "../../components/shared/CallToAction";
import { classNames } from "../../lib/utils";

const views = [
  { id: "demo", name: "Interaktive Demo" },
  { id: "dataset", name: "Datensatz Auszug" },
];

export default function BeachchairsPage({}) {
  const [activeView, setActiveView] = useState(views[0].id);
  return (
    <div>
      <Navigation />
      <div className="relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl tracking-tight text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-ocean-700 to-cyan-600 xl:inline sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl">
              Strandkorb-Buchungsvorhersage
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Ein simples Maschine-Learning Modell, das mit Hilfe von Linearer
              Regression und historischen Daten die Nutzung von Strandkörben an
              einem bestimmten Tag vorhersagt.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#demo"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-ocean-600 hover:bg-ocean-700 md:py-4 md:text-lg md:px-10"
                >
                  Live-Demo
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="https://github.com/stackOcean-official/python-streamlit-docker-sample">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-ocean-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
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
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1621540462628-a86e62126e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 to-teal-600 mix-blend-multiply" />
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-gray-50 py-12">
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          {/* views */}
          <div className="mx-auto max-w-7xl w-full py-10">
            <div className="sm:hidden">
              <label htmlFor="views" className="sr-only">
                Select a view
              </label>
              {/* Use an "onChange" listener to redirect the user to the selected view URL. */}
              <select
                id="views"
                name="views"
                className="block w-full focus:ring-ocean-500 focus:border-ocean-500 border-gray-300 rounded-md"
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
                className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
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
              className="relative rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-20"
              id="demo"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
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
              <div className="relative w-full overflow-hidden h-256">
                <iframe
                  scrolling="no"
                  frameBorder="0"
                  className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg"
                  src="https://ml-demo.stackocean.com/python-streamlit-docker-sample/"
                ></iframe>
              </div>
            </div>
          ) : activeView === "dataset" ? (
            <div className="relative rounded-2xl px-6 py-10 bg-white overflow-hidden shadow-xl sm:px-12 sm:py-20"></div>
          ) : null}
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
