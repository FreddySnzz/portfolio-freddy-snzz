import Image from "next/image";

interface PictureFrameProps {
  src: string
  size?: number
  width?: number
  height?: number
}

export default function PictureFrame({ src, size, width, height }: PictureFrameProps) {
  const picSize = width && height ? `w-${width} h-${height}` : `w-${size} h-${size}`;
  
  return (
    <Image 
      src={src} 
      alt="Picture" width={500} height={500}
      className={`rounded-lg object-cover ${picSize}`}
    />
    // <div className={`p-4 bg-white rounded-xl ${divSize}`}>
    // </div>
  )
}