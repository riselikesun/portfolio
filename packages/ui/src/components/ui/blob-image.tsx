import Image, { ImageProps } from "next/image";
import config from "@/app/config";

export function BlobImage({ src, ...props }: ImageProps) {
  const path = src.toString();
  // Don't prefix if it's already an absolute URL
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return <Image src={path} {...props} />;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const cleanBase = config.blobBaseUrl.endsWith("/") 
    ? config.blobBaseUrl.slice(0, -1) 
    : config.blobBaseUrl;
    
  return <Image src={`${cleanBase}${cleanPath}`} {...props} />;
}
