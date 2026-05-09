import publicationsData from "@/data/publications.json";
import { Publication } from "@/lib/types";

const publications = (publicationsData as Publication[]).sort(
  (a, b) => b.year - a.year
);

const byYear = publications.reduce<Record<number, Publication[]>>((acc, pub) => {
  if (!acc[pub.year]) acc[pub.year] = [];
  acc[pub.year].push(pub);
  return acc;
}, {});

const years = Object.keys(byYear)
  .map(Number)
  .sort((a, b) => b - a);

export default function PublicationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <h1 className="text-3xl font-bold text-[#011F5B] border-b-2 border-[#011F5B] pb-2 w-full">
          Publications
        </h1>
        <a
          href="https://scholar.google.com/citations?user=BJXpPqAAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-700 hover:underline flex items-center gap-1"
        >
          View on Google Scholar ↗
        </a>
      </div>

      {years.map((year) => (
        <section key={year} className="mb-8">
          <h2 className="text-xl font-bold text-[#011F5B] mb-3">{year}</h2>
          <ol className="space-y-4">
            {byYear[year].map((pub) => (
              <li
                key={pub.id}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-4"
              >
                <p className="font-medium text-gray-900 leading-snug">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#011F5B] hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </p>
                <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  <em>{pub.journal}</em>
                  {pub.volume && `, ${pub.volume}`}
                  {pub.pages && `, ${pub.pages}`}
                  {` (${pub.year})`}
                </p>
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline mt-1 block"
                  >
                    DOI: {pub.doi}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
