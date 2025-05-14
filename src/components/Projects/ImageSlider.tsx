import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import './index.css'
import { useState } from 'react'
export const ImageSlider = () => {
    const [currentIndex, setcurrentIndex] = useState(0)

    return (
        <section className='mainContainer'>
            <div className='contentContainer'>
                <div className="contentItem" style={{ translate: `${-100 * currentIndex}%` }}>
                    <div className='contentText'>
                        <h4>Global Smart Inventory System (GSIS)</h4>
                        <p className='text-left text-base mt-2'> Led the design and development of a global inventory management platform spanning AMER, EMEA, and APAC regions, centralizing critical infrastructure and system data across business units.
                        </p>
                        <p className='text-left text-base mt-2'> Collaborated with cross-functional teams worldwide to deliver a unified portal for ADP’s enterprise client and management teams. The application consolidated diverse inventory systems into a single interface, featuring robust reporting and real-time monitoring capabilities. These enhancements significantly streamlined operations and reduced maintenance overhead by approximately 70%. </p>
                    </div>
                </div>
                <div className="contentItem" style={{ translate: `${-100 * currentIndex}%` }}>
                    <div className='contentText'>
                        <h4>Code Deployment Utility (CDU)</h4>
                        <p className='text-left text-base mt-2'> Solely designed, developed, and deployed a critical internal web application to automate and streamline ADP’s code deployment processes. Prior to this, deployment requests involved manual steps across multiple teams, leading to inefficiencies and frequent outages. The CDU initiative, launched in 2017, addressed these challenges by introducing a fully automated system for handling change requests, remote deployment scheduling, and an integrated approval workflow. </p> <p className='text-left text-base mt-2'> The application featured a front-end built with React and TypeScript, a backend powered by Express.js, and a SQL Server database—all containerized using Docker and deployed to Kubernetes clusters via Jenkins. Today, CDU handles over 300–400 automated deployment requests monthly, significantly reducing manual overhead and improving reliability across environments. </p>
                    </div>
                </div>
                <div className="contentItem" style={{ translate: `${-100 * currentIndex}%` }}>
                    <div className='contentText'>
                        <h4>Kloud9 Portal</h4>
                        <p className=' text-left text-base mt-2'>
                            Developed key features for an enterprise-wide self-service web portal enabling clients to manage infrastructure tasks such as Oracle/SQL Server/MongoDB database operations, disk storage provisioning, DNS creation, and firewall requests. The project involved close collaboration across six engineering teams.
                        </p>
                        <p className=' text-left text-base mt-2'>
                            Contributed primarily to the database management and disk storage modules, designing an intuitive user interface that adhered to centralized visual design standards for consistency across teams. The portal was architected using Micro-Frontend components built with React and TypeScript, backed by a Python FastAPI microservices architecture with a PostgreSQL database.                        </p>
                    </div>
                </div>
                <div className="contentItem" style={{ translate: `${-100 * currentIndex}%` }}>
                    <div className='contentText'>
                        <h4>SQL Troubleshooter</h4>
                        <p className=' text-left text-base mt-2'>
                            Designed and developed an internal dashboard to visualize SQL query performance across Oracle and SQL Server databases. The tool featured graphical analysis and tabular views of the top 10 worst-performing queries segmented by product.
                        </p>
                        <p className=' text-left text-base mt-2'>
                        Implemented backend logic using Python to perform baselining and predict potential performance issues. The frontend was built with React and Webpack, delivering a responsive and insightful interface for database performance monitoring.                        </p>
                    </div>
                </div>
                <div className="contentItem" style={{ translate: `${-100 * currentIndex}%` }}>
                    <div className='contentText'>
                        <h4> Portfolio Website </h4>
                        <p className=' text-left text-base mt-10'>
                            This portfolio website was made to show-case some of my skills as a web developer.
                            I've made some deliberate decisions to create specific components, like the Modal & this Carousel, from scratch, without any libraries.
                            This website was built with React/Typescript, Webpack, CSS, & Tailwind CSS in a docker container.
                        </p>
                    </div>
                </div>
            </div>
            <div className='absolute inset-0 flex items-end justify-between mb-1 p-1'>
                <div onClick={() => setcurrentIndex((curr) => curr === 0 ? 3 : currentIndex - 1)} className='leftToggler'> <BiSolidLeftArrow /> </div>
                <div onClick={() => setcurrentIndex((curr) => curr === 3 ? 0 : currentIndex + 1)} className='rightToggler'> <BiSolidRightArrow /> </div>
            </div>
        </section>
    )
}
