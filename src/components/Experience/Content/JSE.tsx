import './index.css'
interface IDAIProps {
    onSetModalOff: () => void
}
export const JSE = ({ onSetModalOff }: IDAIProps) => {
    return (
        <div className="contentData min-w-lg">
            <div className='titleContent'>
                <h4>Junior Software Engineer</h4>
                <h1 className=' cursor-pointer' onClick={() => onSetModalOff()}>X</h1>
            </div>
            <p> - Developed scripts to automate database tasks, including collecting metric data and performing administrative operations.
            </p>
            <p> -  Created a unified script to extract long-running queries from any remote Oracle database and produce HTML output.</p>
            <p> - Engineered automation for generating email reports of Oracle ASH/AWR data for application databases, distributed to user
                email lists.</p>
        </div>
    )
}
