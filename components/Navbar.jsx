export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800 sticky top-0 bg-black z-50">

      <h1 className="text-3xl font-bold text-cyan-400">
        Pranav.
      </h1>

      <div className="flex gap-8 text-lg">

        <a href="#home" className="hover:text-cyan-400">
          Home
        </a>

        <a href="#skills" className="hover:text-cyan-400">
          Skills
        </a>

        <a href="#projects" className="hover:text-cyan-400">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>

      </div>

    </nav>
  )
}