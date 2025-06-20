"use client";

import Image from "next/image";

export default function DiagonalSection({
  src,
  type = "image", // "image" or "video"
  clipPolygon, // e.g. "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)"
  height = "80vh", // custom height like "100vh", "80vh", etc.
  children,
}) {
  return (
    <section className="w-full overflow-hidden">
      <div
        className="relative w-full"
        style={{
          height,
          clipPath: clipPolygon,
        }}
      >
        {type === "video" ? (
          <video
            src={src}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={src}
            alt=""
            height={height}
            width="100%"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {children && (
        <div className="relative" style={{ marginTop: `-${height}`, height }}>
          <div className="w-full h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </section>
  );
}
