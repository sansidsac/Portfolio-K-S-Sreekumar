import GradientText from "../../components/GradientText";

const achievements = [
  {
    title: "Make-A-Ton CUSAT 7.0 – 3rd Prize (Conductor Track)",
    subtitle: "A flagship MLH hackathon at Cochin University of Science and Technology, fostering innovation and collaboration among student developers.",
  },
  {
    title: "Arcane Hackathon – 2nd Prize",
    subtitle: "Kerala’s first tri-venue hackathon by IEEE CEC SBC, bringing together creative minds to solve real-world challenges.",
  },
  {
    title: "Hackify 2.0 – Best Innovator Award",
    subtitle: "Organized by IEDC MACE in collaboration with Kalkitech, this event celebrates breakthrough ideas and technical ingenuity.",
  },
  {
    title: "Breakthrough Hackathon – Winner",
    subtitle: "A premier hackathon by ASME MACE, encouraging students to build impactful engineering solutions.",
  },
  {
    title: "2× On-Campus Hult Prize Runner-Up",
    subtitle: "Recognized for entrepreneurial innovation at the world’s largest student social entrepreneurship competition.",
  },
  {
    title: "InnovateX Winner",
    subtitle: "A leading innovation challenge by ASME MACE, rewarding creative engineering and problem-solving.",
  },
];

const AchievementSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-900 px-4 py-12 gap-12">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-wide text-center">ACHIEVEMENTS</h2>
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center bg-gradient-to-br from-[#18181b] to-black rounded-2xl shadow-xl border border-gray-800 px-6 py-4 gap-6 hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="flex flex-col flex-1">
              <GradientText className="text-lg md:text-xl font-bold mb-1">
                {ach.title}
              </GradientText>
              <span className="text-gray-400 text-sm md:text-base">
                {ach.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
