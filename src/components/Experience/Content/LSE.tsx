import './index.css'
interface IDAIProps {
    onSetModalOff: () => void
}
export const LSE = ({ onSetModalOff }: IDAIProps) => {
    return (
        <div className="contentData">
            <div className='titleContent'>
                <h4>Lead Software Engineer</h4>
                <h1 className=' cursor-pointer' onClick={() => onSetModalOff()}>X</h1>
            </div>
            <p>
                - Spearheaded the development of key web applications and tools, collaborating closely with product managers and web
                producers in an Agile environment to deliver high-quality solutions.</p>
            <p> -  Utilized JavaScript frameworks (React, Redux, React-Router) for front-end development, and developed back-end services
                with RESTful APIs in Node.js, Express, and Python, integrated with RDBMS databases.</p>
            <p> - Collaborated with cross-functional teams across regions to develop a central, pixel-perfect UI, serving as a global
                enterprise solution for consistency and quality across initiatives.</p>
            <p> - Developed a self-service web portal for application database management, cutting weeks/months processes to 1-3 hours
                through streamlined workflows.</p>
            <p> - Integrated Jenkins for continuous integration and deployment (CI/CD) pipelines along with Docker and Kubernetes for
                containerization and orchestration of application services.</p>
            <p> - Mentored team members,promoting best practices in UI and application development. Provided guidance and support to
                enhance team capabilities and project outcomes.</p>
        </div>
    )
}
