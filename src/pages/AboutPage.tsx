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
import metaLogo from "/public/images/meta.png";
import educativeLogo from "/public/images/educative.jpeg";
import educativeCertificate from "/public/images/educativeCertificate.png";
import reactBasic from "/public/images/reactBasic.jpeg";
import reactAdvanced from "/public/images/reactAdvanced.jpeg";

export function AboutPage() {
  const certifications = [
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
      skills: ["React", "JavaScript", "Hooks", "Context API", "Routing", "Rest API" ],
    },
  ];
  const experience = [
    {
      year: "2023 - Present",
      title: "Frontend Developer",
      company: "Crunch Craft",
      description:
        "Leading frontend development for enterprise web applications using React and modern JavaScript. Architecting scalable solutions and mentoring junior developers.",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Javascript",
        "UI/UX",
        "Wordpress",
      ],
    },
    // {
    //   year: '2021 - 2023',
    //   title: 'Frontend Developer',
    //   company: 'Digital Agency',
    //   description: 'Developed custom WordPress themes and React applications for various clients. Collaborated with designers and backend teams to deliver pixel-perfect implementations.',
    //   skills: ['WordPress', 'React', 'Client Management'],
    // },
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
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript (ES6+)", category: "Language" },
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3/SASS", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Bootstrap", category: "Styling" },
    { name: "WordPress", category: "CMS" },
    { name: "Git/GitHub", category: "Tools" },
    { name: "Figma", category: "Design" },
    { name: "REST APIs", category: "Backend" },
    { name: "Responsive Design", category: "Design" },
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
              Passionate Frontend Developer crafting exceptional digital
              experiences
            </p>
          </div>

          {/* Intro Card */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-2xl blur-xl opacity-30"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE4NDU3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Muhammad Haseeb"
                    className="relative w-full h-full rounded-2xl object-cover border-2 border-[#38bdf8]/30"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="text-[#f8fafc] mb-4">Muhammad Haseeb</h2>
                <p className="text-[#f8fafc]/70 mb-4">
                  I'm a Frontend Developer who loves turning ideas into clean,
                  responsive, and functional web experiences. What started as
                  curiosity about how websites work has now become something I
                  truly enjoy doing every day.
                </p>
                <p className="text-[#f8fafc]/70 mb-4">
                  I work mainly with{" "}
                  <span className="text-[#38bdf8]">React.js</span> and{" "}
                  <span className="text-[#38bdf8]">Next.js</span>, building
                  modern SPAs with a focus on performance and simplicity. I also
                  create custom WordPress themes when projects call for it. I
                  like keeping my code neat and my designs easy to use.
                </p>
                <p className="text-[#f8fafc]/70">
                  Outside of work, I’m usually exploring new frontend tools,
                  experimenting with design ideas, or helping other devs learn
                  something new.
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
                    <p className="text-[#f8fafc]/70 mb-4">{job.description}</p>
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
