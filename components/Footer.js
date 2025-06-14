export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Peta Finansial
            </h3>
            <p className="text-gray-600 text-sm">
              Kompas Andal untuk Setiap Rupiahmu.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Kategori
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/budgeting"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Budgeting
                </a>
              </li>
              <li>
                <a
                  href="/saving"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Saving
                </a>
              </li>
              <li>
                <a
                  href="/mindset"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Mindset
                </a>
              </li>
              <li>
                <a
                  href="/lifestyle-money"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Lifestyle & Money
                </a>
              </li>
              <li>
                <a
                  href="/financial-basics"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Financial Basics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                Email: info@petafinansial.com
              </li>
              <li className="text-gray-600 text-sm">
                Instagram: @petafinansial
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Peta Finansial. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
