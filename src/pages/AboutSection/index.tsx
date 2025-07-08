import ProfileCard from "../../components/ProfileCard"
import ProfileImage from "../../assets/images/profile.png"
const AboutSection = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-900 px-4 py-8 gap-8">
            <div className="flex items-center justify-center w-full md:w-auto">
                <ProfileCard avatarUrl={ProfileImage} name="K S Sreekumar" title="4x Hackathon Winner | 3x Ideathon Winner" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center mt-8 md:mt-0 md:ml-8">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">ABOUT ME</h2>
                <div className="text-lg text-gray-200 leading-relaxed space-y-2">
                    <p>
                        I am K S Sreekumar, a final-year B.Tech student in Computer Science and Engineering (Data Science) at Mar Athanasius College of Engineering.
                    </p>
                    <p>
                        I previously worked as a Software Engineer Intern at Navicater, where I contributed to the development of a B2C application focused on maritime technologies. The platform served as a community-driven tool for troubleshooting and collaboration within the marine sector — essentially a social app tailored for maritime engagement.
                    </p>
                    <p>
                        I am skilled in full stack development and experienced in working with a wide range of technologies including React.js, Node.js, React Native, Fastify, Express.js, Redux, MongoDB, SQL, Docker, Git and REST APIs. I am also familiar with machine learning algorithms and AI tools, having applied them in real-world projects and collaborative environments.
                    </p>
                    <p>
                        I have participated in numerous hackathons and ideathons, winning four hackathons and three ideathons to date. These experiences have honed my ability to solve problems quickly, work collaboratively, and build scalable prototypes under tight deadlines.
                    </p>
                    <p>
                        As an aspiring developer, I am driven by a passion for building impactful systems that blend software engineering with intelligent automation. I’m particularly interested in real-time applications, scalable architectures, and AI-enhanced tools.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AboutSection