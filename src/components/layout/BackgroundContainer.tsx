import BackgroundGradient from "../BackgroundGradient";
import RBGAnimatedBackground from "../BackgroundRGB";
import useAppData from "@/data/hook/useAppData";

interface BackgroundProps {
  children?: React.ReactNode;
}

export default function BackgroundContainer({ children }: BackgroundProps) {
  const { background } = useAppData();

  const backgroundsMap: Record<string, React.ReactNode> = {
    gradient: <BackgroundGradient>{children}</BackgroundGradient>,
    rgb: <RBGAnimatedBackground>{children}</RBGAnimatedBackground>,
  };

  return <>{backgroundsMap[background || ''] ?? children}</>;
}
