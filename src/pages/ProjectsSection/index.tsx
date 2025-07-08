import ProjectCard from "../../components/ProjectCard"
import prj1 from "../../assets/images/prj1.png"
import prj2 from "../../assets/images/prj2.png"
import prj4 from "../../assets/images/prj4.png"
import prj5 from "../../assets/images/prj5.png"
import prj6 from "../../assets/images/prj6.png"


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
    websiteUrl: "https://crime-map-one.vercel.app/",
    toolsUsed: ["React", "Reactflow", "Node.js", "Tailwind CSS", "Python", "JavaScript"],
  },
  {
    title: "LEWS: Landslide Early Warning System",
    image: "https://github.com/sansidsac/LEWS-Landslide_Early_Warning_System/blob/main/frontend/src/assets/sample.png?raw=true",
    description: "A system designed to monitor and predict landslides using real-time data and machine learning algorithms.",
    githubUrl: "https://github.com/sansidsac/LEWS-Landslide_Early_Warning_System",
    // websiteUrl: "",
    toolsUsed: ["JupyterNotebook", "Google Colab", "Google Earth Engine", "React", "JavaScript"],
  },
  {
    title: "The Tongue Twisters",
    image: prj4,
    description: "Interactive platform that helps users improve pronunciation and speech clarity through AI-graded tongue twister practice, community contributions, and a user-friendly experience.",
    githubUrl: "https://github.com/sansidsac/the-tongue-twisters",
    // websiteUrl: "",
    toolsUsed: ["React", "Node.js", "Express", "MongoDB", "OpenAI", "Axios", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Tracewise: Test Case Management",
    image: prj5,
    description: "AI-powered test case traceability and management system that automates test evolution, prioritization, and visualization to ensure efficient, accurate, and collaborative software testing.",
    githubUrl: "https://github.com/sansidsac/Tracewise-Test_Case_Management",
    // websiteUrl: "",
    toolsUsed: ["Flask", "TypeScript", "React", "Python", "GPT-4", "Tailwind CSS"]
  },
  {
    title: "Metroflow: Metro Origin-Destination Prediction",
    image: prj6,
    description: "Origin-destination prediction system that leverages AFC data and machine learning to simulate passenger flow across expanding metro networks, enabling accurate forecasting and efficient urban transit planning.",
    githubUrl: "https://github.com/sansidsac/metro_dashboard",
    // websiteUrl: " ",
    toolsUsed: ["XGBoost","Multinomial Logit Model","Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
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