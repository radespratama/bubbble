import Image from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  size: string;
  optional?: string;
}

export default function Images({
  src,
  alt,
  className,
  size,
  optional,
}: ImageProps) {
  return (
    <div className={`relative ${size} ${optional}`}>
      <Image
        src={src}
        alt={alt}
        className={`${className} z-[2] unblur`}
        objectFit="cover"
        layout="fill"
      />
    </div>
  );
}
