import { partitionNews } from "@/lib/news";
import { NewsItem, ResearchProject } from "@/lib/types";
import newsData from "@/data/news.json";
import researchData from "@/data/research.json";
import NewsCard from "@/components/NewsCard";
import ResearchCarousel from "@/components/ResearchCarousel";
import Link from "next/link";

export default function HomePage() {
  const { active: activeNews, archived: archivedNews } = partitionNews(
    newsData as NewsItem[]
  );
  const research = researchData as ResearchProject[];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#011F5B] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Jiang Group</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Bioelectronics &amp; Bioelectronic Materials
            <br />
            <span className="text-gray-300 text-base">
              Department of Materials Science and Engineering, University of Pennsylvania
            </span>
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href="/research"
              className="bg-white text-[#011F5B] px-5 py-2 rounded font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Our Research
            </Link>
            <Link
              href="/people"
              className="border border-white text-white px-5 py-2 rounded font-semibold hover:bg-white/10 transition-colors text-sm"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* News section */}
        <section className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#011F5B] border-b-2 border-[#011F5B] pb-2 mb-4">
            News
          </h2>
          {activeNews.length === 0 ? (
            <p className="text-gray-500 text-sm">No recent news.</p>
          ) : (
            <div>
              {activeNews.map((item) => (
                <NewsCard
                  key={item.id}
                  date={item.date}
                  text={item.text}
                  image={item.image}
                />
              ))}
            </div>
          )}

          {archivedNews.length > 0 && (
            <details className="mt-6">
              <summary className="cursor-pointer text-sm text-[#011F5B] font-medium hover:underline">
                Show archived news ({archivedNews.length} items)
              </summary>
              <div className="mt-3 pl-2 border-l-2 border-gray-200">
                {archivedNews.map((item) => (
                  <NewsCard
                    key={item.id}
                    date={item.date}
                    text={item.text}
                    image={item.image}
                  />
                ))}
              </div>
            </details>
          )}
        </section>

        {/* Quick links sidebar */}
        <aside>
          <h2 className="text-2xl font-bold text-[#011F5B] border-b-2 border-[#011F5B] pb-2 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/research", label: "Our Research" },
              { href: "/people", label: "Lab Members" },
              { href: "/publications", label: "Publications" },
              { href: "/photos", label: "Photo Gallery" },
              { href: "/contact", label: "Contact Us" },
              {
                href: "https://scholar.google.com/citations?user=BJXpPqAAAAAJ&hl=en",
                label: "Google Scholar",
                external: true,
              },
            ].map(({ href, label, external }) => (
              <li key={href}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-blue-700 hover:underline"
                >
                  {label}
                  {external && (
                    <span className="ml-1 text-gray-400 text-xs">↗</span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-[#011F5B] mb-1">Contact</h3>
            <p className="text-sm text-gray-600">
              LRSM 205
              <br />
              3231 Walnut St
              <br />
              Philadelphia, PA 19104
            </p>
            <a
              href="mailto:ywjiang@seas.upenn.edu"
              className="text-sm text-blue-600 hover:underline mt-1 block"
            >
              ywjiang@seas.upenn.edu
            </a>
          </div>
        </aside>
      </div>

      {/* Research carousel */}
      <section className="bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white border-b-2 border-white pb-2 mb-6">
            Research Highlights
          </h2>
          <ResearchCarousel projects={research} />
        </div>
      </section>
    </div>
  );
}
