"use client";

import Image, { ImageProps } from "next/image";

export default function ClientImage(props: ImageProps) {
  return (
    <Image
      {...props}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
      }}
    />
  );
}
