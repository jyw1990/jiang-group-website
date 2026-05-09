import Image from "next/image";
import { formatNewsDate } from "@/lib/news";

interface NewsCardProps {
  date: string;
  text: string;
  image?: string | null;
}

export default function NewsCard({ date, text, image }: NewsCardProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 last:border-0">
      <div className="flex-shrink-0 w-24 text-sm text-gray-500 font-medium pt-0.5">
        {formatNewsDate(date)}
      </div>
      <div className="flex-1">
        <p className="text-gray-800 text-sm leading-relaxed">{text}</p>
        {image && (
          <div className="mt-2 relative w-full max-w-xs h-40 rounded overflow-hidden">
            <Image src={image} alt="News image" fill className="object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
