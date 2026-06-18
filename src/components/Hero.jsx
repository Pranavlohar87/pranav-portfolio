export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-7xl font-bold">
        Hi, I'm <span className="text-cyan-400">Pranav</span>
      </h1>

      <p className="mt-6 text-gray-400 text-xl max-w-2xl">
        Python Developer & Data Analyst creating modern web apps,
        dashboards, and automation tools.
      </p>

      <div className="mt-10 flex gap-6">

        <a
          href="https://github.com/Pranavlohar87"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-400 transition"
        >
          GitHub
        </a>

        <a
          href="#projects"
          className="border border-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
        >
          View Projects
        </a>

      </div>

    </section>
  )
}