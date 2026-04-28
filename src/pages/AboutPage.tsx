import {
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Target,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CertificationCard } from "../components/CertificationCard";
const metaLogo = "/images/meta.png";
const educativeLogo = "/images/educative.jpeg";
const udemyLogo = "/images/udemyLogo.png";
const educativeCertificate = "/images/educativeCertificate.png";
const reactBasic = "/images/reactBasic.jpeg";
const reactAdvanced = "/images/reactAdvanced.jpeg";
const completeNode = "/images/CompleteNodeJSDeveloper.jpg";

export function AboutPage() {
  const certifications = [
       {
      title: "Complete NodeJS Developer (GraphQL, MongoDB, + more)",
      issuer: "Udemy",
      date: "Apr 2026",
      credentialId: "UC-dd697cfb-0ead-40f0-b190-8084215f764d",
      verificationUrl:
        "https://e2.udemymail.com/ls/click?upn=u001.TtzRjPf63yUg9yrAxgqE7735MMJ3LdrdgxmaXqQZmIfH2fm5FO408Q-2BrKd0K0qJIb1IBsLI7flQ1xK-2BLPvA7b5BJjG1oLqtnbjeZSHlbT5dxCdlfZNDLN1CrxH8khy9q6oqGUjFtgNZuFnpnEC4uKEzeyOIMSYgQ0ahyGthRk26vgxYJtSZ9dGznlNidYLBMP71O_6urTgv0RBCDMRu2j0v4YW83mtpomtPXCJZawqLa7ieRmKENcMqBjPUZVBTnIYroHlxTLSMW9kt1H9GJMkzNH611PncL8k3eCNHwWqEKXVsOF8zUKrphR5UnQzLODybPNhma1Tdd34dHvcLStcEhBlTbJqwYokt8r-2F3vKiFiOVFii3aM5Yn86nIItb1CUh2bBZCYTG9NCYdRouyQRRHjFgwmYW3gqcup9sBAYFhXdUjFH-2F9UMTv-2FCeWVasVhDbyghXIvlOhTSs8rMHT6ljOpS4THnaKXyVjQDEcDNIblVqUqRtes0ESR-2FQmadaZwpgtGI5DqTUEEccKC2rRbRN9077A-3D-3D",
      logo: udemyLogo,
      certificateImage: completeNode,
      skills: ["HTML5", "CCS3", "Javascript"],
    },
    {
      title: "Learn HTML, CSS, and JavaScript",
      issuer: "Educative",
      date: "Mar 2025",
      credentialId: "Bg5WvwFAMr61kXjYGFvw7v8g5kj5hy",
      verificationUrl:
        "https://www.educative.io/verify-certificate/Bg5WvwFAMr61kXjYGFvw7v8g5kj5hy",
      logo: educativeLogo,
      certificateImage: educativeCertificate,
      skills: ["HTML5", "CCS3", "Javascript"],
    },
    {
      title: "React Basics",
      issuer: "Meta",
      date: "Apr 2025",
      credentialId: "ZFKJ7VG60ICB",
      verificationUrl:
        "https://www.coursera.org/account/accomplishments/verify/ZFKJ7VG60ICB?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      logo: metaLogo,
      certificateImage: reactBasic,
      skills: ["React", "JavaScript", "State Management"],
    },
    {
      title: "Advanced React",
      issuer: "Meta",
      date: "May 2025",
      credentialId: "8WGVKKL6Z6BU",
      verificationUrl:
        "https://www.coursera.org/account/accomplishments/verify/8WGVKKL6Z6BU",
      logo: metaLogo,
      certificateImage: reactAdvanced,
      skills: [
        "React",
        "JavaScript",
        "Hooks",
        "Context API",
        "Routing",
        "Rest API",
      ],
    },
  ];
  const experience = [
    {
      year: "Nov 2023 - Present",
      title: "Frontend Developer",
      company: "Crunch Craft",
      points: [
        "Engineered and deployed responsive Single-Page Applications (SPAs) using React.js, JavaScript (ES6+), HTML5, and CSS3.",
        "Developed and maintained server-rendered applications with Next.js, improving performance and SEO.",
        "Architected reusable and scalable React components using Context API and Hooks.",
        "Collaborated with UI/UX designers to build pixel-perfect interfaces from Figma designs.",
        "Optimized performance and ensured cross-browser compatibility and accessibility.",
        "Worked on WordPress custom themes and Advanced Custom Fields (ACF) for client projects.",
      ],
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "WordPress",
      ],
    },
  ];

  const education = [
    {
      year: "Present",
      degree: "Bachelor of Business & Information Technology (BBIT)",
      institution: "Virtual University of Pakistan",
      description: `Currently pursuing my BBIT degree with a strong focus on web technologies, software engineering, and user experience design. 
  This program is helping me strengthen both my technical and analytical skills, bridging the gap between business and technology.`,
      achievements: [
        "Frontend Project Distinction",
        "Top Grades in Web Development",
        "E-Commerce Website Capstone",
      ],
    },
  ];

  const tools = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },

  { name: "JavaScript (ES6+)", category: "Language" },

  { name: "HTML5", category: "Frontend" },
  { name: "CSS3/SASS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Bootstrap", category: "Styling" },

  { name: "REST APIs", category: "Backend" },
  { name: "JWT Authentication", category: "Security" },

  { name: "Git/GitHub", category: "Tools" },
  { name: "Postman", category: "API Testing" },

  { name: "WordPress", category: "CMS" },
];
  const stats = [
    { icon: Code2, label: "Projects Completed", value: "15+" },
    { icon: Target, label: "Client Satisfaction", value: "100%" },
    { icon: Users, label: "Developers Mentored", value: "5+" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[#f8fafc] mb-4">About Me</h1>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Full Stack (MERN) Developer building scalable and modern web
              applications
            </p>
          </div>

          {/* Intro Card */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-2xl blur-xl opacity-30"></div>
                  <ImageWithFallback
                    src="/images/MuhammadHaseeb.png"
                    alt="Muhammad Haseeb"
                    className="relative w-full h-full rounded-2xl object-cover border-2 border-[#38bdf8]/30"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-[#f8fafc] mb-4">Muhammad Haseeb</h2>

                <p className="text-[#f8fafc]/70 mb-4">
                  I'm a Full Stack (MERN) Developer who enjoys building clean,
                  scalable, and user-friendly web applications. What started as
                  curiosity about how websites work has grown into a passion for
                  creating complete solutions from frontend to backend.
                </p>

                <p className="text-[#f8fafc]/70 mb-4">
                  I work with <span className="text-[#38bdf8]">React.js</span>{" "}
                  and <span className="text-[#38bdf8]">Next.js</span> for modern
                  interfaces, along with{" "}
                  <span className="text-[#38bdf8]">Node.js</span>,{" "}
                  <span className="text-[#38bdf8]">Express.js</span>, and{" "}
                  <span className="text-[#38bdf8]">MongoDB</span> to build
                  robust backend systems and REST APIs. I also have experience
                  working with WordPress for custom themes when needed.
                </p>

                <p className="text-[#f8fafc]/70">
                  Outside of work, I enjoy exploring new technologies, improving
                  my development skills, and experimenting with new ideas.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-lg mb-3">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-[#38bdf8] mb-1">{stat.value}</div>
                  <p className="text-[#f8fafc]/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Professional Experience</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              My career journey and professional growth in web development
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-6 md:p-8 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20 relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#38bdf8]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon and Year */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-4 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-xl shadow-lg shadow-[#38bdf8]/30 mb-4">
                      <Briefcase size={28} className="text-white" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full">
                      <span className="text-[#38bdf8] text-xs">{job.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[#f8fafc] mb-2">{job.title}</h3>
                    <div className="text-[#f8fafc]/60 mb-4">{job.company}</div>
                    <ul className="text-[#f8fafc]/70 mb-4 space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#38bdf8]">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#38bdf8] text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Education</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Academic background and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-lg p-6 md:p-8 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20 relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#38bdf8]/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon and Year */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex p-4 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-xl shadow-lg shadow-[#38bdf8]/30 mb-4">
                      <GraduationCap size={28} className="text-white" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-[#38bdf8]/10 border border-[#38bdf8]/30 rounded-full">
                      <span className="text-[#38bdf8] text-xs">{edu.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-[#f8fafc] mb-2">{edu.degree}</h3>
                    <div className="text-[#f8fafc]/60 mb-4">
                      {edu.institution}
                    </div>
                    <p className="text-[#f8fafc]/70 mb-4">{edu.description}</p>
                    <div>
                      <p className="text-[#f8fafc]/70 text-sm mb-2">
                        Key Achievements:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#38bdf8] text-xs"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Certifications</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Professional certifications and verified credentials
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <CertificationCard key={cert.credentialId} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Tools & Technologies</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Technical skills and tools I work with daily
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-[#38bdf8]/50 transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20"
              >
                <div className="text-[#f8fafc] text-sm mb-1">{tool.name}</div>
                <div className="text-[#38bdf8] text-xs">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#f8fafc] mb-4">Key Achievements</h2>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Milestones and accomplishments throughout my career
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
              <div className="mt-1 p-2 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <p className="text-[#f8fafc]/70">
                Built 15+ production-ready websites
              </p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
              <div className="mt-1 p-2 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <p className="text-[#f8fafc]/70">
                Contributed to open-source React libraries
              </p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
              <div className="mt-1 p-2 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <p className="text-[#f8fafc]/70">Mentored 5+ junior developers</p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
              <div className="mt-1 p-2 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <p className="text-[#f8fafc]/70">
                Improved page load times by 40% through optimization
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
