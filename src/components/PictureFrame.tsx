import Image from "next/image";

interface PictureFrameProps {
  src: string
  size?: number
}

export default function PictureFrame({ src, size }: PictureFrameProps) {
  const picSize = `w-${size} h-${size}`;
  
  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <Image 
        src={src} 
        alt="Picture" width={500} height={500}
        draggable="false"
        className={`rounded-lg object-cover ${picSize}`}
      />
    </div>
  )
}