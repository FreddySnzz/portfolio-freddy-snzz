interface CustomBadgeProps {
  url: string
  alt?: string
  className?: string
}

export default function CustomBadge({ url, alt = "Badge", className }: CustomBadgeProps) {
  return (
    <img
      src={url}
      alt={alt}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      className={`h-4 w-auto object-contain ${className}`}
    />
  );
};
