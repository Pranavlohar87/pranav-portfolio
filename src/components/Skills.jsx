const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "HTML5", "CSS", "JavaScript"]
  },

  {
    title: "Data Analytics",
    skills: [
      "NumPy",
      "Data Cleaning",
      "Data Visualization",
      "Power BI",
      "Excel",
      "Basic SQL"
    ]
  },

  {
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Render",
      "Vercel"
    ]
  }
]

export default function Skills() {
  return (
   <section id="skills" className="py-24 px-6 bg-black text-white">

      <h2 className="text-5xl font-bold text-center mb-16">
        My Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {skillCategories.map((category, index) => (

          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-2xl font-bold text-cyan-400 mb-8">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-4">

              {category.skills.map((skill, i) => (

                <span
                  key={i}
                  className="bg-black border border-gray-700 px-4 py-2 rounded-xl text-sm hover:border-cyan-400 transition"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}