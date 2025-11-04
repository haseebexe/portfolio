import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ProjectCard } from "../components/ProjectCard";
import { Code, Palette, Zap, Layers, Github, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import alamBibi from '/public/images/alamBibiHome.png';
import demoStore from '/public/images/demo_home.png';
import kipsHome from '/public/images/publicationsHome.png';

export function HomePage() {
  const skills = [
    { icon: Code, name: "React.js", color: "#38bdf8" },
    { icon: Palette, name: "HTML/CSS", color: "#38bdf8" },
    { icon: Zap, name: "JavaScript", color: "#38bdf8" },
    { icon: Layers, name: "WordPress", color: "#38bdf8" },
  ];

  const featuredProjects = [
    {
      title: "Alam Bibi Foundtation",
      description:
        "Non-profit foundation website showcasing social development and community empowerment efforts.",
      techStack: ["Next.js", "Javascript"],
      liveUrl: "https://aalambibi.org/",
      image: alamBibi,
    },
    {
      title: "Demo Store",
      description:
        "A modern demo e-commerce storefront showcasing UI, responsiveness and front-end work.",
      techStack: ["React.js", "JavaScript" ],
      liveUrl: "https://haseebcode.online/",
      image: demoStore,
    },
    {
      title: "Kips Publications",
      description:
        "A major education-publisher in Pakistan providing study notes, exam prep books, and academic materials.",
      techStack: ["React.js", "JavaScript"],
      liveUrl: "https://kipspublications.com/",
      image: kipsHome ,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#38bdf8]/20 to-[#3b82f6]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3b82f6]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full">
                <span className="w-2 h-2 bg-[#38bdf8] rounded-full animate-pulse"></span>
                <span className="text-[#38bdf8] text-sm">
                  Available for freelance work
                </span>
              </div>
              <h1 className="text-[#f8fafc] mb-6">
                Frontend Developer
                <br />
                <span className="bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] bg-clip-text text-transparent">
                  Bridging design and functionality
                </span>
              </h1>
              <p className="text-xl text-[#f8fafc]/70 mb-8">
                Hi, I'm <span className="text-[#38bdf8]">Muhammad Haseeb</span>.
              I craft exceptional digital experiences by transforming ideas into reality with modern frontend technologies.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects">
                  <Button className="bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] text-white hover:opacity-90 transition-opacity cursor-pointer">
                    View Projects
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] cursor-pointer"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/haseebexe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f8fafc]/60 hover:text-[#38bdf8] transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-haseeb-364062283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f8fafc]/60 hover:text-[#38bdf8] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
                <div className="text-[#38bdf8] mb-2">2+</div>
                <p className="text-[#f8fafc]/70 text-sm">Years Experience</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
                <div className="text-[#38bdf8] mb-2">
                15+</div>
                <p className="text-[#f8fafc]/70 text-sm">Projects Completed</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
                <div className="text-[#38bdf8] mb-2">15+</div>
                <p className="text-[#f8fafc]/70 text-sm">Happy Clients</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
                <div className="text-[#38bdf8] mb-2">100%</div>
                <p className="text-[#f8fafc]/70 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section - Card Stack Layout */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-[#38bdf8]/10 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] mx-auto rounded-full mb-4"></div>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Passionate about creating seamless digital experiences
            </p>
          </div>

          {/* Centered Card Layout with Overlapping Elements */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#38bdf8]/50 transition-all group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                {/* Profile Section - Centered */}
                <div className="text-center mb-8">
                  <div className="relative inline-block mb-6">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    {/* Avatar */}
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE4NDU3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Muhammad Haseeb"
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-[#38bdf8]/30 shadow-2xl ring-4 ring-white/10"
                    />
                    {/* Status Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-[#38bdf8] text-white text-xs px-3 py-1 rounded-full border-4 border-[#0f172a] shadow-lg">
                      Available
                    </div>
                  </div>

                  <h3 className="text-[#f8fafc] mb-2">Muhammad Haseeb</h3>
                  <p className="text-[#38bdf8] mb-6">Frontend Developer</p>

                  <p className="text-[#f8fafc]/70 max-w-2xl mx-auto mb-4 leading-relaxed">
                    Frontend Engineer skilled in React.js, JavaScript (ES6+),
                    HTML5, and CSS3, with hands-on experience building
                    responsive, SPA-based web applications. Adept at translating
                    UI/UX designs into scalable, highperformance interfaces and
                    ensuring cross-browser consistency. Passionate about modern
                    frontend workflows, clean code, and continuous learning.
                  </p>
                </div>

                {/* Stats Row */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#38bdf8]/50 transition-all">
                    <div className="text-[#38bdf8] mb-1">4+</div>
                    <p className="text-[#f8fafc]/60 text-xs">Years</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#38bdf8]/50 transition-all">
                    <div className="text-[#38bdf8] mb-1">30+</div>
                    <p className="text-[#f8fafc]/60 text-xs">Projects</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#38bdf8]/50 transition-all">
                    <div className="text-[#38bdf8] mb-1">15+</div>
                    <p className="text-[#f8fafc]/60 text-xs">Clients</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#38bdf8]/50 transition-all">
                    <div className="text-[#38bdf8] mb-1">100%</div>
                    <p className="text-[#f8fafc]/60 text-xs">Satisfaction</p>
                  </div>
                </div> */}

                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#38bdf8]/50 transition-all">
                    <Code size={16} className="text-[#38bdf8]" />
                    <span className="text-[#f8fafc] text-sm">Clean Code</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#38bdf8]/50 transition-all">
                    <Zap size={16} className="text-[#38bdf8]" />
                    <span className="text-[#f8fafc] text-sm">
                      Fast Performance
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#38bdf8]/50 transition-all">
                    <Palette size={16} className="text-[#38bdf8]" />
                    <span className="text-[#f8fafc] text-sm">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-[#38bdf8]/50 transition-all">
                    <Layers size={16} className="text-[#38bdf8]" />
                    <span className="text-[#f8fafc] text-sm">
                      Responsive Design
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center relative z-50">
                  <Link to="/about">
                    <Button className="bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] text-white hover:opacity-90 transition-opacity px-8 cursor-pointer">
                      Discover My Journey →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Featured Projects</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              A selection of my recent work showcasing expertise in React, Next,
              WordPress, and modern web development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects">
              <Button
                variant="outline"
                className="border-[#38bdf8] text-[#38bdf8] hover:bg-[#38bdf8]/10 hover:text-[#38bdf8] cursor-pointer"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Core Skills</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20 group"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-[#38bdf8]/10 rounded-full group-hover:scale-110 transition-transform">
                    <skill.icon size={32} style={{ color: skill.color }} />
                  </div>
                  <span className="text-[#f8fafc]">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
