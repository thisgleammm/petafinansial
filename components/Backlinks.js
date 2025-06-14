import Link from "next/link";

const backlinks = [
  {
    name: "Gleam Web",
    url: "http://gleam.web.id",
    description: "Personal website and portfolio",
  },
  {
    name: "Peta Finansial",
    url: "http://gleam.web.id",
    description: "Financial news and insights",
  },
];

export default function Backlinks() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Backlinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {backlinks.map((backlink, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <Link
                    href={backlink.url}
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {backlink.name}
                  </Link>
                </h3>
                <p className="text-gray-600">{backlink.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
