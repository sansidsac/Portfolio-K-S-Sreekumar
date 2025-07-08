import GradientText from "../../components/GradientText";

const technicalSkills = [
  {
    group: "Frontend",
    skills: ["React.js", "Redux", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    group: "Backend",
    skills: ["Node.js", "Express.js", "Fastify", "REST APIs", "MongoDB", "SQL"]
  },
  {
    group: "Mobile & Cross-Platform",
    skills: ["React Native"]
  },
  {
    group: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "VS Code"]
  },
  {
    group: "AI & Data Science",
    skills: ["Python", "Machine Learning", "Pandas", "NumPy", "OpenAI API"]
  },
];

const interpersonalSkills = [
  "Teamwork",
  "Leadership",
  "Problem Solving",
  "Communication",
  "Adaptability",
  "Time Management",
  "Creativity",
  "Collaboration",
];

const languageProficiency = [
  { language: "English", level: "Professional" },
  { language: "Malayalam", level: "Native" },
  { language: "Hindi", level: "Professional" },
];

const SkillsSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-900 px-4 py-12 gap-12">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-wide text-center">SKILLS</h2>
      <div className="w-full max-w-5xl flex flex-col gap-16">
        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((group) => (
              <div key={group.group} className="flex flex-col items-start">
                <h4 className="text-lg font-bold text-gray-200 mb-2">{group.group}</h4>
                <div className="flex flex-wrap gap-2 justify-start">
                  {group.skills.map((skill, idx) => (
                    <GradientText key={skill} className="text-xs px-3 py-1 rounded-full font-medium shadow-sm border border-gray-700 bg-gray-800">
                      {skill}
                    </GradientText>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpersonal Skills */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-semibold mb-6 text-white">Interpersonal Skills</h3>
          <div className="flex flex-wrap gap-2 justify-start">
            {interpersonalSkills.map((skill) => (
              <GradientText key={skill} className="text-xs px-3 py-1 rounded-full font-medium shadow-sm border border-gray-700 bg-gray-800" colors={["#40c9ff", "#e81cff", "#40c9ff"]}>
                {skill}
              </GradientText>
            ))}
          </div>
        </div>

        {/* Language Proficiency */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Language Proficiency</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {languageProficiency.map((lang) => (
              <div
                key={lang.language}
                className="bg-gray-800 text-gray-200 text-xs px-4 py-2 rounded-lg font-medium shadow-sm border border-gray-700 flex flex-col items-center min-w-[120px]"
              >
                <GradientText className="font-bold text-base mb-1" colors={["#ffb347", "#ffcc33", "#ffb347"]}>{lang.language}</GradientText>
                <span className="text-xs text-gray-400">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
