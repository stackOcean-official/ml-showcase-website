import Footer from "../components/layout/Footer";
import Navigation from "../components/layout/Navigation";

export default function Impressum({}) {
  return (
    <div className="bg-white">
      <Navigation />
      <main className="max-w-7xl py-10 mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Impressum
        </h1>
        <div className="mt-6 space-y-6 text-gray-500">
          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Inhaltlicher Verantwortlicher gem&auml;&szlig; &sect; 5 TMG
          </h2>
          <p className="py-4">
            stackOcean GmbH
            <br />
            Kuhnkestr. 6 24118 Kiel, Germany
            <br />
            Commercial register: HRB 21270
            <br />
            KI Register court: County court Kiel
            <br />
            <br />
            <strong>Represented by:</strong>
            <br />
            Matthias Nannt
            <br />
            Jonas Mielck
            <br />
            Henrik Petter
            <br />
            Christopher Ernst
          </p>

          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact
          </h3>
          <p className="py-4">
            Phone: +49 431 55682903
            <br />
            E-Mail: hello@stackocean.com
          </p>

          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Umsatzsteuer-ID
          </h2>
          <p className="text-base leading-7">
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz: DE327580678
          </p>

          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            EU-Streitschlichtung
          </h2>
          <p className="text-base leading-7">
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p className="text-base leading-7">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
