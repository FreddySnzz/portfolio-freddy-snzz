import ButtonFooterContact from "../buttons/ButtonFooterContact";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={`p-2 text-center mt-auto bg-black ${className}`}>
      <div className="flex justify-center items-center">
        <div className="grow justify-center items-center">
          <span className="text-center text-sm font-semibold text-gray-800 mr-1">
            &copy; 2025 |
          </span>
          <span className="text-center text-sm font-semibold text-white">
            Fredson Luiz
          </span>
        </div>
        <ButtonFooterContact />
      </div>
    </footer>
  );
};