import Image, { type StaticImageData } from "next/image";

type ProfileImageProps = {
  alt: string;
  loading: boolean;
  src: StaticImageData;
};

export default function ProfileImage({ alt, loading, src }: ProfileImageProps) {
  return (
    <div
      className="relative h-64 max-w-full shrink-0 overflow-hidden rounded-lg shadow-2xl"
      style={{ aspectRatio: `${src.width} / ${src.height}` }}
    >
      <Image
        src={src}
        alt={loading ? "" : alt}
        fill
        priority
        placeholder="blur"
        sizes="256px"
        className={`object-cover ${loading ? "invisible" : ""}`}
      />
      {loading && (
        <div
          aria-hidden="true"
          className="skeleton absolute inset-0 rounded-lg"
        />
      )}
    </div>
  );
}
