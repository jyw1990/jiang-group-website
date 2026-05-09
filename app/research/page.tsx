import researchData from "@/data/research.json";
import { ResearchProject } from "@/lib/types";
import ClientImage from "@/components/ClientImage";

const research = researchData as ResearchProject[];

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#011F5B] border-b-2 border-[#011F5B] pb-2 mb-8">
        Research
      </h1>

      <div className="space-y-12">
        {research.map((project, index) => (
          <section
            key={project.id}
            id={project.id}
            className="scroll-mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <h2 className="text-2xl font-bold text-[#011F5B] mb-3">
                {project.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
            <div
              className={`relative h-64 rounded-lg overflow-hidden bg-gray-200 ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <ClientImage
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
