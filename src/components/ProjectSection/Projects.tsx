import { projects } from './projectsData';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionDivider } from '../ui/SectionDivider';

function Projects() {
  return (
    <section id="projects" className="bg-background">
      <SectionDivider thickness="thick" />

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 md:mb-20">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Selected Works
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="editorial-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                link={project.link}
                projectType={project.projectType}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
