import './index.css'
interface IDAIProps {
    onSetModalOff: () => void
}
export const OI = ({ onSetModalOff }: IDAIProps) => {
    return (
        <div className="contentData">
            <div className='titleContent'>
                <h4>Operations Intern</h4>
                <h1 className=' cursor-pointer' onClick={() => onSetModalOff()}>X</h1>
            </div>
            <p>
                - Assisted in managing item inventory and field support operations for software and hardware.</p>
            <p> - Hands-on experience with networking equipment such as switches and servers. Proficient in setting up IP/port
                configurations and conducting live video stream testing.</p>
        </div>
    )
}
