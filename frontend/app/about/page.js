import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'À propos - Kit de démarrage FullStack Serverless',
  description: 'En savoir plus sur notre Kit de démarrage FullStack Serverless et ses fonctionnalités.',
};

const features = [
  {
    name: 'Architecture Serverless',
    description: 'Notre kit exploite les technologies serverless pour offrir une scalabilité, des coûts opérationnels réduits et une meilleure concentration des développeurs sur la logique métier principale.',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    ),
  },
  {
    name: 'Integration Full-Stack',
    description: 'Nous integrons harmonieusement les technologies frontend et backend, offrant une experience de developpement coherente de la base de donnees a l\'interface utilisateur.',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: 'Experience Developpeur',
    description: 'Avec des flux de travail optimises et des outils soigneusement selectionnes, nous ameliorons la productivite et maintenons une haute qualite de code tout au long de votre projet.',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    name: 'Meilleures Pratiques',
    description: 'Notre kit de demarrage incorpore les meilleures pratiques de l\'industrie en matiere de securite, de performance et de maintenabilite, vous donnant une longueur d\'avance dans la creation d\'applications robustes.',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: 'Personnalisation',
    description: 'Tout en fournissant une base solide, notre kit est concu pour etre facilement personnalisable, vous permettant de l\'adapter a vos besoins specifiques de projet.',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: 'Mises a jour continues',
    description: 'Nous mettons regulierement a jour notre kit de demarrage pour incorporer les dernieres technologies et meilleures pratiques, garantissant que votre projet reste a jour et securise.',
    icon: (
      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  ];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-indigo-100 to-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-900 sm:text-5xl mb-6">À propos de notre Kit de démarrage</h2>
          <p className="text-lg leading-8 text-gray-700 mb-12">
            Le Kit de démarrage FullStack Serverless est conçu pour accélérer votre processus de développement et fournir une base solide pour construire des applications web modernes et évolutives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-indigo-900">{feature.name}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-16 sm:py-24 bg-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Découvrez le futur du développement serverless
              </h2>
              <p className="text-xl text-indigo-200 mb-8">
                Prêt à commencer ? Obtenez votre kit dès aujourd'hui.
              </p>
              <p className="text-lg text-indigo-200 mb-8">
                Rejoignez des milliers de développeurs qui créent des applications serverless incroyables avec notre Kit de démarrage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-lg hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 ease-in-out transform hover:scale-105">
                  Commencer
                </Link>
                <Link href="#" className="inline-block text-sm font-semibold leading-6 text-white hover:text-indigo-100 transition-colors duration-300">
                  En savoir plus <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about1.png"
                  alt="Capture d'écran de l'application"
                  width={1920}
                  height={1080}
                  layout="responsive"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

