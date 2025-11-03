import { Briefcase, GraduationCap, Award, Code2, Target, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CertificationCard } from '../components/CertificationCard';

export function AboutPage() {
  const experience = [
    {
      year: '2023 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading frontend development for enterprise web applications using React and modern JavaScript. Architecting scalable solutions and mentoring junior developers.',
      skills: ['React.js', 'TypeScript', 'Team Leadership'],
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed custom WordPress themes and React applications for various clients. Collaborated with designers and backend teams to deliver pixel-perfect implementations.',
      skills: ['WordPress', 'React', 'Client Management'],
    },
  ];

  const education = [
    {
      year: '2017 - 2021',
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      description: 'Focused on web technologies, software engineering, and user experience design. Graduated with honors.',
      achievements: ['Dean\'s List', 'Web Development Award', 'Capstone Project Excellence'],
    },
  ];

  const tools = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript (ES6+)', category: 'Language' },
    { name: 'HTML5', category: 'Frontend' },
    { name: 'CSS3/SASS', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Git/GitHub', category: 'Tools' },
    { name: 'Figma', category: 'Design' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'Responsive Design', category: 'Design' },
  ];

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '30+' },
    { icon: Target, label: 'Client Satisfaction', value: '100%' },
    { icon: Users, label: 'Developers Mentored', value: '5+' },
  ];

  const certifications = [
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: 'Jan 2024',
      credentialId: 'ABC123XYZ789',
      verificationUrl: 'https://coursera.org/verify/professional-cert/ABC123XYZ789',
      skills: ['React', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Advanced React',
      issuer: 'Meta via Coursera',
      date: 'Dec 2023',
      credentialId: 'DEF456UVW012',
      verificationUrl: 'https://coursera.org/verify/DEF456UVW012',
      skills: ['React Hooks', 'Context API', 'Performance'],
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'Oct 2023',
      credentialId: 'fcc-js-2023',
      verificationUrl: 'https://freecodecamp.org/certification/username/javascript-algorithms-and-data-structures',
      skills: ['JavaScript', 'Algorithms', 'ES6+'],
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Sep 2023',
      credentialId: 'fcc-rwd-2023',
      verificationUrl: 'https://freecodecamp.org/certification/username/responsive-web-design',
      skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    },
    {
      title: 'WordPress Theme Development',
      issuer: 'Udemy',
      date: 'Aug 2023',
      credentialId: 'UC-WP-THEME-2023',
      verificationUrl: 'https://udemy.com/certificate/UC-WP-THEME-2023',
      skills: ['WordPress', 'PHP', 'Custom Themes'],
    },
    {
      title: 'Modern JavaScript: ES6+',
      issuer: 'Udemy',
      date: 'Jul 2023',
      credentialId: 'UC-JS-ES6-2023',
      verificationUrl: 'https://udemy.com/certificate/UC-JS-ES6-2023',
      skills: ['ES6', 'Async/Await', 'Modules'],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[#f8fafc] mb-4">About Me</h1>
            <p className="text-[#f8fafc]/70 max-w-2xl mx-auto">
              Passionate Frontend Developer crafting exceptional digital experiences
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
                  I'm a Frontend Developer with over 4 years of experience in creating beautiful, functional web experiences. 
                  My journey in web development started with a curiosity about how websites work and evolved into a career I truly love.
                </p>
                <p className="text-[#f8fafc]/70 mb-4">
                  I specialize in React.js development and custom WordPress theme creation. My approach combines technical 
                  expertise with creative problem-solving to deliver solutions that not only meet requirements but exceed expectations.
                </p>
                <p className="text-[#f8fafc]/70">
                  When I'm not coding, you'll find me exploring new web technologies, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
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
                    <div className="text-[#f8fafc]/60 mb-4">{edu.institution}</div>
                    <p className="text-[#f8fafc]/70 mb-4">{edu.description}</p>
                    <div>
                      <p className="text-[#f8fafc]/70 text-sm mb-2">Key Achievements:</p>
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
              <p className="text-[#f8fafc]/70">Built 30+ production-ready websites</p>
            </div>
            <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#38bdf8]/50 transition-all">
              <div className="mt-1 p-2 bg-gradient-to-r from-[#38bdf8] to-[#3b82f6] rounded-full flex-shrink-0">
                <Award size={20} className="text-white" />
              </div>
              <p className="text-[#f8fafc]/70">Contributed to open-source React libraries</p>
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
              <p className="text-[#f8fafc]/70">Improved page load times by 40% through optimization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
