import photosData from "@/data/photos.json";
import { PhotoItem } from "@/lib/types";
import { sortPhotosDesc, formatMonthYear } from "@/lib/photos";
import ClientImage from "@/components/ClientImage";

const photos = sortPhotosDesc(photosData as PhotoItem[]);

export default function PhotosPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-[#011F5B] border-b-2 border-[#011F5B] pb-2 mb-8">
        Photos
      </h1>

      {photos.length === 0 ? (
        <p className="text-gray-500">No photos yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative h-52 bg-gray-200">
                <ClientImage
                  src={photo.image}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="font-medium text-gray-900 text-sm">{photo.caption}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {formatMonthYear(photo.monthYear)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
