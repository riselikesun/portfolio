import Image, { ImageProps } from "next/image";
import config from "@/app/config";

export function BlobImage({ src, alt, title, ...props }: ImageProps) {
  const path = src.toString();
  const imageTitle = title || (typeof alt === "string" ? alt : undefined);

  // Don't prefix if it's already an absolute URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return <Image src={path} alt={alt} title={imageTitle} {...props} />;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const cleanBase = config.blobBaseUrl.endsWith("/") 
    ? config.blobBaseUrl.slice(0, -1) 
    : config.blobBaseUrl;
    
  return <Image src={`${cleanBase}${cleanPath}`} alt={alt} title={imageTitle} {...props} />;
}
