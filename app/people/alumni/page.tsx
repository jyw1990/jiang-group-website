import alumniData from "@/data/alumni.json";
import { AlumniMember } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const alumni = (alumniData as AlumniMember[]).sort(
  (a, b) => b.exitYear - a.exitYear
);

export default function AlumniPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/people"
          className="text-sm text-[#011F5B] hover:underline"
        >
          ← People
        </Link>
        <span className="text-gray-400">/</span>
        <h1 className="text-3xl font-bold text-[#011F5B]">Alumni</h1>
      </div>

      {alumni.length === 0 ? (
        <p className="text-gray-500">No alumni listed yet.</p>
      ) : (
        <div className="space-y-4">
          {alumni.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex items-center gap-4"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                {person.currentPosition && (
                  <p className="text-sm text-gray-500 mt-0.5">
                    {person.currentPosition}
                  </p>
                )}
              </div>
              <div className="text-right text-sm text-gray-400 flex-shrink-0">
                {person.beginYear}–{person.exitYear}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
