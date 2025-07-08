import navicaterLogo from "../../assets/images/navicater.jpeg";
import ExperienceCard from "../../components/ExperienceCard";


const workExperiences = [
  {
    jobTitle: "Software Engineer Intern",
    company: "Navicater",
    period: { from: "March 2025", to: "July 2025" },
    description:
      "Contributed to the development of a B2C maritime application, building community-driven tools for troubleshooting and collaboration in the marine sector. Worked on scalable features, real-time updates, and user engagement flows.",
    imageUrl: navicaterLogo,
  },
];

const voluntaryExperiences = [
  {
    jobTitle: "Tech Head",
    company: "Training and Placement Cell",
    period: { from: "October 2024", to: "Present" },
    description:
      "Leading the technical initiatives and digital transformation for the Training and Placement Cell. Responsible for automating workflows, managing student databases, and supporting placement activities with technology-driven solutions.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4E03AQH8P-fzcsYiiQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639465589339?e=1757548800&v=beta&t=DYyx3IPQuMu2WijSlpOcVdgWIWV3xWHrHXbUl5n7EYA",
  },
  {
    jobTitle: "Events Organisation Team",
    company: "ENCIDE MACE",
    period: { from: "February 2024", to: "December 2024" },
    description:
      "Organized and coordinated technical and non-technical events for ENCIDE, the coding club at MACE. Collaborated with multiple teams to ensure smooth execution and high participation.",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQEllOZyda64pg/company-logo_200_200/company-logo_200_200/0/1708960995115?e=1757548800&v=beta&t=YE6DbzBN4iqdZ2b824dQy3v-ZRVzUp_ZV5NasVfUXb8",
  },
  {
    jobTitle: "Tech Team Lead",
    company: "NetX MACE",
    period: { from: "December 2023", to: "Present" },
    description:
      "Led the technical team for NetX, the student-run FOSS club at MACE. Oversaw club website, mentored junior members, and managed workshops and newsletters.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C560BAQHPVSUuXlUo-Q/company-logo_200_200/company-logo_200_200/0/1630651402743?e=1757548800&v=beta&t=Gz3GHUxHSmcylE5o6f3hsoEiXUcZBDG6UWgD9CHim6o",
  },
  {
    jobTitle: "Joint Secretary",
    company: "IEEE CS SBC MACE",
    period: { from: "February 2023", to: "February 2024" },
    description:
      "Served as Joint Secretary for the IEEE Computer Society Student Branch Chapter at MACE. Coordinated events, managed communications, and contributed to the growth of the student chapter.",
    imageUrl: "https://media.licdn.com/dms/image/v2/C4E07AQH1HgnASFS_9A/group-logo_image-shrink_92x92/group-logo_image-shrink_92x92/0/1630998980184?e=1752559200&v=beta&t=fWDXHmzFO3TuTj9ppajtDyp_QLIlZ1Q0VMB1WCuyUiw",
  },
];

const ExperienceSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-900 px-4 py-12 gap-12">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-wide text-center">EXPERIENCE</h2>
      <div className="w-full max-w-5xl flex flex-col gap-16">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4 mt-2">Work Experience</h3>
        {workExperiences.map((exp, idx) => (
          <ExperienceCard
            key={exp.company + exp.jobTitle}
            {...exp}
            align={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
        <h3 className="text-2xl font-semibold text-gray-200 mb-4 mt-10">Voluntary Experience</h3>
        {voluntaryExperiences.map((exp, idx) => (
          <ExperienceCard
            key={exp.company + exp.jobTitle}
            {...exp}
            align={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
