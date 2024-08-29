import Image from 'next/image';
import Link from 'next/link';
import { FaRocket, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Kit de démarrage FullStack Serverless',
  description: 'Un kit de démarrage ultime pour construire des applications fullstack serverless.',
};

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-100 via-white to-indigo-50 min-h-screen">
      <main>
        {/* Section héro */}
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>
          <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-indigo-900 sm:text-7xl">
                FullStack Serverless
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Kit de démarrage</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Lancez votre projet serverless en quelques minutes, pas en quelques mois. Notre configuration pré-configurée combine les meilleurs outils et pratiques de l'industrie.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/posts" className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-indigo-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Commencer
                </Link>
                <Link href="/auth" className="text-sm font-semibold leading-6 text-indigo-900 hover:text-purple-600 transition-colors duration-300">
                  En savoir plus <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section des fonctionnalités */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Déployez plus rapidement</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tout ce dont vous avez besoin pour construire des applications serverless
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {[
                {
                  name: 'Architecture Serverless',
                  description: 'Évoluez sans effort avec notre configuration serverless.',
                  icon: FaRocket,
                },
                {
                  name: 'Intégration Full-Stack',
                  description: 'Intégration fluide entre le frontend et le backend.',
                  icon: FaCode,
                },
                {
                  name: 'Neon Postgres',
                  description: 'Base de données SQL serverless puissante incluse.',
                  icon: FaDatabase,
                },
                {
                  name: 'Sécurité intégrée',
                  description: 'Sécurité de niveau entreprise dès la sortie de la boîte.',
                  icon: FaShieldAlt,
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center group">
                  <dt className="flex flex-col items-center gap-y-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transition-all duration-300 ease-in-out group-hover:scale-110">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{feature.name}</h3>
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Section CTA */}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Augmentez votre productivité.
                  <br />
                  Commencez à utiliser notre kit dès aujourd'hui.
                </h2>
                <p className="mt-6 text-lg leading-8 text-indigo-100">
                  Rejoignez des milliers de développeurs qui construisent des applications serverless incroyables avec notre Kit de démarrage.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="#" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 ease-in-out transform hover:scale-105">
                    Commencer
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-indigo-100 transition-colors duration-300">
                    En savoir plus <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8">
                <Image
                  className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                  src="/images/image.png"
                  alt="Capture d'écran de l'application"
                  width={1824}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
