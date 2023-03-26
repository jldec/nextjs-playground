import Image from "next/image";

// TODO: use inline SVG instead of an image
export default function Logo() {
  return (
    <Image alt="Next.js playground" src="/images/next-js-playground.svg" height={24} width={214} />
  );
}
