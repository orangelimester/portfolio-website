import './index.css'
interface IDAIProps {
    onSetModalOff: () => void
}
export const DAI = ({ onSetModalOff }: IDAIProps) => {
    return (
        <div className="contentData">
            <div className='titleContent'>
                <h4>Database Architect Intern</h4>
                <h1 className=' cursor-pointer' onClick={() => onSetModalOff()}>X</h1>
            </div>
            <p>
                -  Developed scorecards to monitor DB vendor performance, security, and database efficiencies.</p>
            <p> - Configured MongoDBinstances and devised recovery scenarios to ensure high availability.</p>
        </div>
    )
}
