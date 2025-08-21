interface TittleProps {
  tittle: string;
  subtitle?: string;
  tittleClassName?: string;
  subtitleClassName?: string;
}

export default function Tittle(props: TittleProps) {
  return (
    <div className={``}>
      <h1 className={`font-black text-3xl text-gray-100 dark:text-gray-900 ${props.tittleClassName}`}>
        {props.tittle}
      </h1>
      <h2 className={`font-light text-sm text-gray-400 dark:text-gray-600 ${props.subtitleClassName}`}>
        {props.subtitle}
      </h2>
    </div>
  );
};