import React from "react";

export type ExperienceCardProps = {
  jobTitle: string;
  company: string;
  period: { from: string; to: string };
  description: string;
  imageUrl: string;
  align?: "left" | "right";
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  jobTitle,
  company,
  period,
  description,
  imageUrl,
  align = "left",
}) => {
  const isLeft = align === "left";
  return (
    <div
      className={`group bg-gradient-to-br from-[#18181b] to-black rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-800 max-w-4xl w-full mx-auto`}
    >
      <div className="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
        <img
          src={imageUrl}
          alt={company}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 gap-3 justify-center">
        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
          {jobTitle}
        </h3>
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          <span className="font-semibold text-gray-200">{company}</span>
          <span className="mx-2">•</span>
          <span>
            {period.from} - {period.to}
          </span>
        </div>
        <p className="text-gray-300 text-base leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
