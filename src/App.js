import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, BookOpen, Code, Briefcase, Award, ChevronDown, GraduationCap } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const publications = [
    {
      title: "Classifying Crop Leaf Diseases using Different Deep Learning Models with Transfer Learning ",
      journal: "IJISRT 2024",
      description: "Research on AI-based classification models for agricultural disease detection",
      link: "https://www.ijisrt.com/classifying-crop-leaf-diseases-using-different-deep-learning-models-with-transfer-learning" // Add your publication link here
    },
    {
      title: "Deep Learning-Based 5G Network Slice Allocation Framework for Telesurgery Systems",
      journal: "IEEE MetroLivEnv",
      description: "This paper proposes a deep learning-based network slicing framework to optimize 5G telesurgery systems, enhancing latency, reliability, and resource utilization.      ",
      link: "https://ieeexplore.ieee.org/document/11107080"
    },
    {
      title: "A Transfer Learning-Based Intelligent Judiciary System for Public Safety",
      journal: "IEEE CCCI 2024",
      description: "This research utilizes transfer learning techniques to develop an intelligent judiciary framework aimed at enhancing public safety and decision-making accuracy.      ",
      link: "https://ieeexplore.ieee.org/document/10736468"
    },
    {
      title: "AI-Based Message Spam Classification Framework for Secure Autonomous Vehicles Communication",
      journal: "IEEE IKT 2024",
      description: "This paper proposes an AI-based system to detect and classify spam messages, ensuring secure communication among autonomous vehicles.      ",
      link: "https://ieeexplore.ieee.org/document/10892722"
    },
    {
      title: "Message Priority Classification Framework for Autonomous Vehicles in Supply Chain Management",
      journal: "CICTN 2025",
      description: "The work introduces a framework for prioritizing vehicle-to-vehicle messages in autonomous supply chain systems to improve communication reliability.      ",
      link: "https://ieeexplore.ieee.org/document/10932527"
    },
    {
      title: "Explainable AI-based Framework for efficient energy exchange between Smart Grid and Smart Homes",
      journal: "IEEE WCONF 2025",
      description: "This paper introduces an Explainable AI framework using SHAP and LIME to improve transparency in energy consumption predictions for Smart Homes and Smart Grids. The system leverages IoT data to optimize costs, reduce pollution, and enhance grid efficiency through interpretable, data-driven insights.      ",
      link: "https://ieeexplore.ieee.org/document/11233710"
    }
  ];

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Developer Infotech",
      location: "Surat, India",
      period: "Jan 2025 – June 2025",
      achievements: [
        "Developed and shipped a full-stack Online Photo Studio using the MERN stack, increasing usability and reducing manual workflow time by 30%",
        "Built 8+ data-driven dashboards and optimized Firebase + MongoDB integrations, improving data visibility and backend performance by 20–25%",
        "Implemented unit tests, automated scripts, and CI/CD-aligned workflows, lowering release bugs by 15% and enhancing deployment reliability"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Growder Technovations Private Limited",
      location: "Surat, India",
      period: "May 2024 – June 2024",
      achievements: [
        "Developed a doctor appointment web application using the MERN stack to provide a seamless and user-friendly experience for patients and healthcare providers",
        "Improved backend API performance using Node.js and MongoDB, reducing query latency by up to 25% through optimized schema design and indexing",
        "Collaborated with the development team to enhance application functionality, gaining valuable hands-on experience in backend development and improving technical skills"
      ]
    }
  ];

  const projects = [
    {
      title: "Online Photo Studio",
      tech: "MERN Stack, AI Integration",
      period: "January 2025 – June 2025",
      description: "Full-stack web application with AI-based image editing, face recognition search, and duplicate photo removal. Integrated Firebase and MongoDB for scalable storage.",
      highlights: ["AI Image Editing", "Face Recognition", "Admin Dashboard", "Firebase Integration"],
      github: "#", // Add your GitHub link
      demo: "#" // Add your demo link
    },
    {
      title: "Doctor Appointment System",
      tech: "MERN Stack",
      period: "May 2024 – June 2024",
      description: "Seamless appointment booking system for patients and healthcare providers with 25% improved backend performance through optimized MongoDB queries.",
      highlights: ["25% Faster Queries", "User-Friendly UI", "Real-time Booking", "Performance Optimized"]
    },
    {
      title: "Covid Registration System",
      tech: "Java, OOP",
      period: "September 2022",
      description: "Console-based vaccination management system with registration, slot booking, and certificate generation functionalities.",
      highlights: ["OOP Design", "Certificate Generation", "Slot Management", "User Registration"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "California State University, Long Beach",
      location: "Long Beach, CA, USA",
      period: "August 2025 – August 2027"
    },
    {
      degree: "B.Tech in Computer Engineering",
      school: "Nirma University",
      location: "Ahmedabad, India",
      period: "October 2021 - May 2025"
    }
  ];

  const skills = {
    "Languages": ["C++", "Java", "Python", "JavaScript"],
    "Frontend": ["React", "HTML", "CSS", "Bootstrap", "jQuery"],
    "Backend": ["Node.js", "Express.js", "MongoDB", "MySQL"],
    "Tools": ["Git", "GitHub", "Docker", "Kubernetes", "VS Code"]
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mili Virani
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'education', 'experience', 'projects', 'publications', 'skills', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors text-sm ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="text-center z-10 max-w-4xl">
          <div className="mb-6 inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold">
            Full Stack Developer & AI Researcher
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Mili Virani
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building scalable web applications and contributing to cutting-edge AI research
          </p>
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <a href="mailto:milivirani1911@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all transform hover:scale-105">
              <Mail size={20} />
              Contact Me
            </a>
            <a href="https://github.com/mili-virani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105">
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="flex gap-6 justify-center text-gray-400 flex-wrap">
            <a href="tel:+15626379851" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Phone size={18} />
              +1 (562) 637-9851
            </a>
            <a href="https://www.linkedin.com/in/mili-virani-a31780256" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Highly motivated Computer Science graduate with experience in Full Stack development, AI/Deep Learning research, and data-driven web applications. Proven ability to deliver scalable solutions, optimize backend performance, and contribute to international publications and conferences.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-purple-900/30 to-slate-700/50 rounded-xl p-6 text-center border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">8+</div>
                <div className="text-gray-400">Dashboards Built</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-slate-700/50 rounded-xl p-6 text-center border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">30%</div>
                <div className="text-gray-400">Workflow Improvement</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-slate-700/50 rounded-xl p-6 text-center border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-gray-400">Research Publications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-purple-400" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-300">{edu.school}</p>
                    <p className="text-gray-400">{edu.location}</p>
                  </div>
                  <span className="text-gray-400 font-semibold">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-purple-400" />
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <span className="text-gray-400 font-semibold">{exp.period}</span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-gray-300">
                      <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Code className="text-purple-400" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                <h3 className="text-xl font-bold text-purple-400 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-1">{project.tech}</p>
                <p className="text-xs text-gray-500 mb-4">{project.period}</p>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="flex gap-3">
                    {project.github && (
                      <a href="https://github.com/mili-virani/photo-studio-frontend" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a href="https://photostudiobymili.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <BookOpen className="text-purple-400" />
            Research Publications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{pub.title}</h3>
                    <p className="text-sm text-purple-400 font-semibold mb-3">{pub.journal}</p>
                    {/* <p className="text-sm text-gray-400 mb-4">{pub.description}</p> */}
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Publication
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold text-purple-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="mailto:milivirani1911@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105 text-lg">
              <Mail size={24} />
              Email Me
            </a>
            <a href="https://github.com/mili-virani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105 text-lg">
              <Github size={24} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mili-virani-a31780256" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105 text-lg">
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900/80 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Mili Virani</p>
        </div>
      </footer>
    </div>
  );
}