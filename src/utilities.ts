import { ImageLoaderProps } from "next/image";

export const imageLoader = ({ src }: ImageLoaderProps) => {
  return `https://images.unsplash.com/${src}`;
};
