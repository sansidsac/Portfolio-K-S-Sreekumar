import ProjectCard from "../../components/ProjectCard"
import prj1 from "../../assets/images/prj1.png"
import prj2 from "../../assets/images/prj2.png"

const projects = [
  {
    title: "LoggedIt",
    image: prj1,
    description: "AI-powered log management platform that transforms unstructured operational data into actionable insights to streamline decision-making, identify recurring issues, and enhance organizational efficiency.",
    githubUrl: "https://github.com/sansidsac/LoggedIt",
    // websiteUrl: "",
    toolsUsed: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "Axios", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "BOARD",
    image: prj2,
    description: "Interactive case-mapping platform that enables real-time collaboration, secure evidence handling, and structured investigation flow to reduce delays and enhance clarity in criminal case resolution.",
    githubUrl: "https://github.com/rolansy/CrimeMap",
    // websiteUrl: "",
    toolsUsed: ["React", "Reactflow", "Node.js", "Tailwind CSS", "Python", "JavaScript"],
  },
  {
    title: "Task Manager",
    image: "/assets/images/project3.jpg",
    description: "A productivity tool to manage daily tasks, built with Fastify, MongoDB, and a responsive React frontend.",
    githubUrl: "https://github.com/user/taskmanager",
    websiteUrl: "https://taskmanager.com",
  },
  {
    title: "E-commerce Platform",
    image: "/assets/images/project4.jpg",
    description: "A scalable e-commerce platform with secure payments, product search, and user authentication.",
    githubUrl: "https://github.com/user/ecommerce",
    websiteUrl: "https://ecommerce.com",
  },
  {
    title: "Blog Engine",
    image: "/assets/images/project5.jpg",
    description: "A markdown-based blog engine with live preview, built using Express.js and React.",
    githubUrl: "https://github.com/user/blogengine",
    websiteUrl: "https://blogengine.com",
  },
  {
    title: "Weather Dashboard",
    image: "/assets/images/project6.jpg",
    description: "A weather dashboard that fetches real-time data from public APIs and displays it with beautiful charts.",
    githubUrl: "https://github.com/user/weatherdashboard",
    websiteUrl: "https://weatherdashboard.com",
  },
];

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-900 px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-wide text-center">PROJECTS</h2>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;