import { FaExternalLinkAlt } from "react-icons/fa";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  repositoryUrl: string;
};

export default function ButtonRepositoryUrl({ repositoryUrl }: ButtonProps) {
  return (
    <div>
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button 
          className={`p-2 cursor-pointer 
            text-gray-400 hover:text-gray-600 dark:text-gray-700 dark:hover:text-gray-400`}
        >
          <FaExternalLinkAlt className="text-2xl" />
        </button>
      </a>
    </div>
  );
};