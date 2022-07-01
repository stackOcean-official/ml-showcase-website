import { MailIcon } from "@heroicons/react/solid";

export default function CallToAction({}) {
  return (
    <div className="bg-white">
      <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-3xl">
          <span className="block">
            Sind Sie bereit, KI in Ihrem Unternehmen einzusetzen?
          </span>
          <span className="block pb-1 -mb-1 text-transparent bg-gradient-to-r from-cyan-600 to-ocean-600 bg-clip-text">
            Nehmen Sie Kontakt zu uns auf
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a
            href="mailto:hello@stackocean.com"
            className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-gradient-to-r from-ocean-600 to-cyan-600 bg-origin-border hover:from-ocean-700 hover:to-cyan-700"
          >
            <MailIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </div>
  );
}
