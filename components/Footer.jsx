export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 text-center">
      <h3 className="text-cyan-400 text-xl font-bold">
        Pranav Lohar
      </h3>

      <p className="text-gray-400 mt-2">
        Python Developer | Data Analyst
      </p>

      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/Pranavlohar87"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400"
        >
          GitHub
        </a>

        <a
          href="mailto:your-email@example.com"
          className="text-gray-400 hover:text-cyan-400"
        >
          Email
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-6">
        © 2026 Pranav Lohar. All Rights Reserved.
      </p>
    </footer>
  )
}