export type ExperienceCardProps = {
  jobTitle: string;
  company: string;
  period: { from: string; to: string };
  description: string;
  imageUrl: string;
  align?: "left" | "right";
};