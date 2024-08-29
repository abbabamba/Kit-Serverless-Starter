import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kit de Démarrage FullStack Serverless',
  description: 'Un kit de démarrage moderne et évolutif pour les applications full-stack serverless',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className={`flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 ${inter.className}`}>
        <div className="flex-grow flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-6 sm:p-8">
                {children}
              </div>
            </div>
          </main>
          <Footer />
        </div>

        {/* Éléments décoratifs */}
        <div className="fixed bottom-0 right-0 -z-10">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
              <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>
        <div className="fixed top-0 left-0 -z-10 opacity-30">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
            <defs>
              <pattern id="top-left-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" className="text-blue-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#top-left-pattern)" />
          </svg>
        </div>
      </body>
    </html>
  );
}
