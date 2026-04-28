import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/ui/button";
const alamBibi = "/images/alamBibiHome.png";
const demoStore = "/images/demo_home.png";
const kipsHome = "/images/publicationsHome.png";
const qbfnHome = "/images/qbfnHome.png";
const collegeHome = "/images/collegeHome.png";
const sevenCsHome = "/images/7csHome.png";
const learnigoHome = "/images/learnigoHome.png";
const prepHome = "/images/prepHome.png";
const estore = "/images/estore1.png";

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "MERN" , "React", "Next", "WordPress"];

  const projects = [
    {
      title: "Alam Bibi Foundtation",
      description:
        "Non-profit foundation website showcasing social development and community empowerment efforts.",
      techStack: ["Next.js", "Javascript"],
      liveUrl: "https://aalambibi.org/",
      image: alamBibi,
      category: "Next",
    },
       {
      title: "Kips Publications",
      description:
        "A major education-publisher in Pakistan providing study notes, exam prep books, and academic materials.",
      techStack: ["Next.js", "JavaScript"],
      liveUrl: "https://kipspublications.com/",
      image: kipsHome,
      category: "Next",
    },
     {
      title: "E-Store",
      description:
        "MERN e-commerce app with auth, cart, and product management. REST API powered and scalable.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      liveUrl: "https://e-store-psi-swart.vercel.app/",
      image: estore,
      category: "MERN",
    },
    {
      title: "Demo Store",
      description:
        "A modern demo e-commerce storefront showcasing UI, responsiveness and front-end work.",
      techStack: ["React.js", "JavaScript"],
      liveUrl: "https://demo-store-phi-one.vercel.app/",
      image: demoStore,
      category: "React",
    },
 
    {
      title: "Kips Prep",
      description: "lorem impsum dolor sit amet lorem impsum dolor sit amet",
      techStack: ["WordPress Custom theme", "ACF", "CMS", "HTML/CSS"],
      liveUrl: "https://kipsprep.com/",
      image: prepHome,
      category: "WordPress",
    },
       {
      title: "Kips College",
      description: "lorem impsum dolor sit amet lorem impsum dolor sit amet",
      techStack: ["WordPress Custom theme", "ACF", "CMS", "HTML/CSS"],
      liveUrl: "https://kipscolleges.com/",
      image: collegeHome,
      category: "WordPress",
    },
       {
      title: "Learnigo",
      description: "lorem impsum dolor sit amet lorem impsum dolor sit amet",
      techStack: ["WordPress Custom theme", "ACF", "CMS", "HTML/CSS"],
      liveUrl: "https://learnigo.org/",
      image: learnigoHome,
      category: "WordPress",
    },
       {
      title: "7cs School",
      description: "lorem impsum dolor sit amet lorem impsum dolor sit amet",
      techStack: ["WordPress Custom theme", "ACF", "CMS", "HTML/CSS"],
      liveUrl: "https://7csschool.com/",
      image: sevenCsHome,
      category: "WordPress",
    },
       {
      title: "QBFN",
      description: "lorem impsum dolor sit amet lorem impsum dolor sit amet",
       techStack: ["WordPress Custom theme", "ACF", "CMS", "HTML/CSS"],
      liveUrl: "https://qb-franchising.com/",
      image: qbfnHome,
      category: "WordPress",
    },

  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="py-12 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-[#f8fafc] mb-4">My Projects</h1>
          <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
            A collection of web applications and websites I've built using
            modern technologies. Each project demonstrates different skills and
            approaches to problem-solving.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={
                  activeFilter === filter
                    ? "bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] text-white cursor-pointer "
                    : "border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] cursor-pointer "
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#f8fafc]/60">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
