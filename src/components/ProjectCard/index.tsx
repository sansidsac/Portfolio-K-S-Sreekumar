import React from "react";
import type { ProjectCardProps } from "./types";


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  githubUrl,
  websiteUrl,
  toolsUsed = [],
}) => {
  return (
    <div
      className="group bg-gradient-to-br from-[#18181b] to-black rounded-2xl shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-800 max-w-sm w-full mx-auto"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-gray-300 text-base leading-relaxed flex-1">
          {description}
        </p>
        {toolsUsed.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {toolsUsed.map((tool, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full font-medium shadow-sm border border-gray-700"
              >
                {tool}
              </span>
            ))}
          </div>
        )}
        <div className="flex gap-4 mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              title="View on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </a>
          )}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              title="View Website"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M14 3v2h3.59L7.05 15.54l1.41 1.41L19 6.41V10h2V3z" />
                <path d="M5 5v14h14v-7h-2v5H7V7h5V5z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;