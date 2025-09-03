interface ConsoleProps {
  comment?: string;
  variableName?: string;
  data: Record<string, string | string[]>;
  className?: string;
}

export default function TextConsole({
  comment = "",
  variableName = "data",
  data,
  className
}: ConsoleProps) {
  return (
    <div className={`flex flex-col h-full w-full font-mono ${className}`}>
      <p className="flex text-md text-gray-700">{comment}</p>
      <p className="flex text-md mt-2 gap-2 text-pink-600">
        const <span className="text-white">{variableName}</span> ={" "}
        <span className="text-yellow-400">{"{"}</span>
      </p>
      <div className="text-md ml-8 text-orange-500">
        {Object.entries(data).map(([key, value], i) => (
          <p key={i} className="text-md">
            {key}
            <span className="text-pink-600">: </span>
            {Array.isArray(value) ? (
              <span className="text-blue-400">
                [{value.map((v, idx) => (
                  <span key={idx} className="text-gray-400">
                    '{v}'
                    {idx < value.length - 1 && <span className="text-white">, </span>}
                  </span>
                ))}]
              </span>
            ) : (
              <>
                <span className="text-pink-600">'</span>
                <span className="text-gray-400">{value}</span>
                <span className="text-pink-600">'</span>
              </>
            )}
            {i < Object.keys(data).length - 1 && <span className="text-pink-600">,</span>}
          </p>
        ))}
      </div>
      <p className="text-md ml-2">
        <span className="text-yellow-400">{"}"}</span>
        <span className="text-pink-600">;</span>
      </p>
    </div>
  );
}