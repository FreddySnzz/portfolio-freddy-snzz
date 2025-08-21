export default function ContactContainer() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="p-2 border border-gray-300 rounded h-32"
        ></textarea>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
          Send Message
        </button>
      </form>
    </div>
  )
}