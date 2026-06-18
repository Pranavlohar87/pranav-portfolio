import chatmate1 from '../assets/chatmate1.png'
import dashboard1 from '../assets/dashboard1.png'

const projects = [
  {
    title: "ChatMate Real-Time Messenger",

    image: chatmate1,

    description:
      "Real-time messaging web app using Flask, Socket.IO, HTML, CSS, and JavaScript.",

    tech: [
      "Python",
      "Flask",
      "Socket.IO",
      "HTML",
      "CSS",
      "JavaScript",
      "Render"
    ],

    live: "https://chatmate-realtime-messenger.onrender.com/",
    github: "#"
  },

  {
    title: "Sales Data Analysis Dashboard",

    image: dashboard1,

    description:
      "Interactive Power BI dashboard for sales analysis with KPIs, charts, filters, and cleaned datasets.",

    tech: [
      "Power BI",
      "Excel",
      "Data Cleaning",
      "Visualization"
    ],

    live: "#",
    github: "#"
  }
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-950 text-white"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-contain rounded-2xl mb-6 border border-gray-800 bg-white p-2"
            />

            <h3 className="text-3xl font-bold mb-4 text-cyan-400">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">

              {project.tech.map((item, i) => (

                <span
                  key={i}
                  className="border border-gray-700 px-4 py-2 rounded-xl text-sm"
                >
                  {item}
                </span>

              ))}

            </div>

            <div className="flex gap-5">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition"
              >
                GitHub
              </a>

            </div>

          </div>

        ))}

      </div>
    </section>
  )
}