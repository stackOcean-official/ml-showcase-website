import { MailIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Usecases from "../components/home/Usecases";
import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";
import CallToAction from "../components/shared/CallToAction";

const HomePage: NextPage = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <main>
        {/* Hero section */}
        <div className="relative mt-5">
          <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-ocean-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                  <span className="block text-white">
                    Künstliche Intelligenz für Unternehmen
                  </span>
                  <span className="block text-ocean-200">Showcase</span>
                </h1>
                <p className="max-w-lg mx-auto mt-6 text-xl text-center text-ocean-200 sm:max-w-3xl">
                  DSGVO &amp; Open-Source: Sehen Sie verschiedene Machine
                  Learning Modelle in Aktion und finden Sie den perfekten
                  Anwendungsfall für Ihr Unternehmen.
                </p>
                <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#usecases"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium bg-white border border-transparent rounded-md shadow-sm text-ocean-700 hover:bg-ocean-50 sm:px-8"
                    >
                      Mehr erfahren
                    </a>
                    <a
                      href="#usecases"
                      className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-ocean-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Zu den Usecases
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
              Vertraut und unterstützt von
            </p>
            <div className="inline-flex space-x-12 justify-center w-full mt-6">
              <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img
                  className="h-16"
                  src="/img/sh-logo.png"
                  alt="Schleswig-Holstein"
                />
              </div>
              <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img
                  className="h-8"
                  src="/img/kiel-ai-logo.png"
                  alt="Kiel.AI"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="usecases">
          <Usecases />
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
