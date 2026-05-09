import membersData from "@/data/members.json";
import { MembersData } from "@/lib/types";
import MemberCard from "@/components/MemberCard";
import Link from "next/link";

const members = membersData as MembersData;

const sections = [
  {
    key: "faculty" as const,
    label: "Principal Investigator",
    members: members.faculty,
  },
  {
    key: "postdocs" as const,
    label: "Postdoctoral Scholars",
    members: members.postdocs,
  },
  {
    key: "phd_students" as const,
    label: "Ph.D. Students",
    members: members.phd_students,
  },
  {
    key: "masters_students" as const,
    label: "Master's Students",
    members: members.masters_students,
  },
  {
    key: "undergrad_students" as const,
    label: "Undergraduate Students",
    members: members.undergrad_students,
  },
  {
    key: "high_school_students" as const,
    label: "High School Students",
    members: members.high_school_students,
  },
];

export default function PeoplePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#011F5B]">People</h1>
        <Link
          href="/people/alumni"
          className="text-sm text-[#011F5B] border border-[#011F5B] px-3 py-1.5 rounded hover:bg-[#011F5B] hover:text-white transition-colors"
        >
          View Alumni →
        </Link>
      </div>

      {sections.map(({ key, label, members: sectionMembers }) => {
        if (sectionMembers.length === 0) return null;
        return (
          <section key={key} className="mb-10">
            <h2 className="text-xl font-semibold text-[#011F5B] border-b border-gray-200 pb-2 mb-5">
              {label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {sectionMembers.map((member) => {
                if (key === "faculty") {
                  const m = member as (typeof members.faculty)[0];
                  return (
                    <MemberCard
                      key={m.id}
                      name={m.name}
                      photo={m.photo}
                      role={m.title}
                      email={m.email}
                      bio={m.bio}
                    />
                  );
                }
                if (key === "postdocs" || key === "phd_students") {
                  const m = member as
                    | (typeof members.postdocs)[0]
                    | (typeof members.phd_students)[0];
                  return (
                    <MemberCard
                      key={m.id}
                      name={m.name}
                      photo={m.photo}
                      email={m.email}
                      bio={m.bio}
                    />
                  );
                }
                if (key === "masters_students" || key === "undergrad_students") {
                  const m = member as
                    | (typeof members.masters_students)[0]
                    | (typeof members.undergrad_students)[0];
                  return (
                    <MemberCard
                      key={m.id}
                      name={m.name}
                      photo={m.photo}
                      department={m.department}
                      email={m.email}
                    />
                  );
                }
                if (key === "high_school_students") {
                  const m = member as (typeof members.high_school_students)[0];
                  return (
                    <MemberCard
                      key={m.id}
                      name={m.name}
                      photo={m.photo}
                      school={m.school}
                    />
                  );
                }
                return null;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
