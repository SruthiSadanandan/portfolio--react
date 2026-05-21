function Skills() {

  const skills = [
    'Flutter',
    'React',
    'Firebase',
    'JavaScript',
    'HTML',
    'CSS',
    'GetX',
    'REST API',
  ]

  return (
    <section id="skills" className="section">

      <h2>Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (

          <button key={index}>
            {skill}
          </button>

        ))}

      </div>
    </section>
  )
}

export default Skills