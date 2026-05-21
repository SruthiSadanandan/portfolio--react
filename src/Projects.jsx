function Projects() {

  const projects = [
    {
      title: 'Inventory Management App',
      description: 'Warehouse and stock management system.',
      tech: 'Flutter + Firebase',
    },
    {
      title: 'Restaurant POS System',
      description: 'Restaurant billing and order management.',
      tech: 'Flutter + GetX',
    },
    {
      title: 'School Management App',
      description: 'Attendance and student management.',
      tech: 'Flutter + Firebase',
    },
  ]

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((project, index) => (

          <div className="card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>

          </div>

        ))}

      </div>
    </section>
  )
}

export default Projects;