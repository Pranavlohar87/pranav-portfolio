export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-10 text-center">

        <p className="text-gray-400 text-lg mb-10 leading-8">
          I'm currently looking for internship and fresher opportunities
          in Python Development and Data Analytics.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-10">

          <div className="bg-black border border-gray-800 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-xl font-bold mb-2">
              Email
            </h3>

            <p className="text-gray-400">
              lpranav87@gmail.com
            </p>
          </div>

          <div className="bg-black border border-gray-800 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-xl font-bold mb-2">
              Phone
            </h3>

            <p className="text-gray-400">
              8446245055
            </p>
          </div>

          <div className="bg-black border border-gray-800 rounded-2xl p-6">
            <h3 className="text-cyan-400 text-xl font-bold mb-2">
              Location
            </h3>

            <p className="text-gray-400">
              Kagal, Kolhapur, Maharashtra
            </p>
          </div>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="https://github.com/Pranavlohar87"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 px-8 py-4 rounded-2xl hover:bg-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/p-ra-na-v-lo-ha-r-a21751388"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400 hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 px-8 py-4 rounded-2xl hover:bg-green-500 hover:text-black transition"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download="Pranav_Lohar_Resume.pdf"
            className="border border-yellow-500 px-8 py-4 rounded-2xl hover:bg-yellow-500 hover:text-black transition"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  )
}