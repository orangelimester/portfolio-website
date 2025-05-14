import './index.css'
interface IDAIProps {
    onSetModalOff: () => void
}
export const SE = ({ onSetModalOff }: IDAIProps) => {
    return (
        <div className="contentData">
            <div className='titleContent'>
                <h4>Software Engineer</h4>
                <h1 className=' cursor-pointer' onClick={() => onSetModalOff()}>X</h1>
            </div>
            <p>
                - Led the development of the SQL Collector tool, capturing SQL queries from Oracle and SQL Server client databases to
                highlight top worst performers on a dashboard for easy troubleshooting.</p>
            <p> - Developed a UI for app database troubleshooting, saving DBAs time by efficiently retrieving metric data like blocked
                sessions, physical/logical I/O, and long-running queries, using PHP and JavaScript.</p>
        </div>
    )
}
