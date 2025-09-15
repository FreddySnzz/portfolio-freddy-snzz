import { FaExternalLinkAlt } from "react-icons/fa";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  repositoryUrl: string;
};

export default function ButtonRepositoryUrl({ repositoryUrl }: ButtonProps) {
  return (
    <div className="flex items-center">
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button 
          className={`cursor-pointer 
            text-gray-400 hover:text-gray-600 dark:text-gray-700 dark:hover:text-gray-400`}
        >
          <FaExternalLinkAlt className="text-2xl" />
        </button>
      </a>
    </div>
  );
};