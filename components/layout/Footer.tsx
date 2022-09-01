import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

const footerNavigation = {
  ki: [{ name: "Usecases", href: "/usecases" }],
  company: [
    { name: "Website", href: "https://stackocean.com/" },
    { name: "Blog", href: "https://stackocean.com/blog/" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/stackocean/",
      icon: (props: any) => <BsLinkedin {...props} />,
    },
  ],
};

export default function Footer({}) {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 pt-16 pb-8 mx-auto max-w-7xl sm:px-6 lg:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                Künstliche Intelligenz
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.ki.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  stackOcean GmbH
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Gefördert von
            </h3>
            <img
              className="h-20"
              src="/img/sh-logo.png"
              alt="Schleswig-Holstein"
            />
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-gray-200 md:flex md:items-center md:justify-between lg:mt-16">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  target="_blank"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </a>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2022 stackOcean GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
