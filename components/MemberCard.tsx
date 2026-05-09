"use client";

import Image from "next/image";

interface MemberCardProps {
  name: string;
  photo: string;
  role?: string;
  email?: string;
  bio?: string;
  department?: string;
  school?: string;
}

export default function MemberCard({
  name,
  photo,
  role,
  email,
  bio,
  department,
  school,
}: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col items-center p-5 text-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3 bg-gray-200 flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = "/images/members/placeholder.jpg";
          }}
        />
      </div>
      <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
      {role && <p className="text-sm text-[#011F5B] font-medium mt-0.5">{role}</p>}
      {department && <p className="text-sm text-gray-600 mt-0.5">{department}</p>}
      {school && <p className="text-sm text-gray-600 mt-0.5">{school}</p>}
      {email && (
        <a
          href={`mailto:${email}`}
          className="text-xs text-blue-600 hover:underline mt-1 break-all"
        >
          {email}
        </a>
      )}
      {bio && <p className="text-sm text-gray-600 mt-2 text-left line-clamp-4">{bio}</p>}
    </div>
  );
}
