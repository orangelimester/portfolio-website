import './index.css'
interface IDAIProps {
    onSetModalOff: () => void
}
export const SSE = ({ onSetModalOff }: IDAIProps) => {
    return (
        <div className="contentData">
            <div className='titleContent'>
                <h4>Senior Software Engineer</h4>
                <h1 className=' cursor-pointer' onClick={() => onSetModalOff()}>X</h1>
            </div>
            <p>
                - Single-handedly created the ‘Code Deployment Utility’ web application as primary full-stack developer, saving 5-6
                man-hours per request for clients with a 5-minute automated workflow initiated from the UI.</p>
            <p> - Created a web application for deploying AWS images across various regions, providing management visibility into ADP
                provisioned AWS images. Simplified the process for developers globally to start development with deployed source image
                copies.</p>
            <p> - Used Elasticsearch, Logstash, and ECK clusters to collect and aggregate performance data from application databases,
                enhancing monitoring and analysis with Kibana Dashboards.</p>
        </div>
    )
}
