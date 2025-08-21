export default function ApresentationContainer() {
  return (
    <div className="flex flex-col items-center justify-center h-auto bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8">Explore my projects and skills.</p>
      <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
        View Projects
      </button>
    </div>
  );
}