import ExperienceSection from "../ExperienceSection"
import ProjectsSection from "../ProjectsSection"
import SkillsSection from "../SkillsSection"

const ContentSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-gray-900 px-4 py-8">
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
    </div>
  )
}
export default ContentSection