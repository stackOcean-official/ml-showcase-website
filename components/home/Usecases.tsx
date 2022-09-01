/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";
import { usecases } from "../../lib/usecases";
import UsecaseTile from "../shared/UsecaseTile";

export default function Usecases() {
  return (
    <div className="relative px-4 pt-16 pb-15 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-20 lg:px-8">
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
          {usecases.slice(0, 3).map((usecase) => (
            <UsecaseTile key={usecase.title} usecase={usecase} />
          ))}
        </div>
        <div className="flex mt-10">
          <Link href="/usecases">
            <a className="font-medium text-md text-ocean-600 hover:text-ocean-500">
              Alle Usecases anschauen
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
