import { Skills } from './Skills'
import './index.css'
export const AboutPage = () => {
    return (
        <>
            <div className=' aboutTitle'>
                <h1 className=' text-center'>About Me</h1>
            </div>
            <div className="aboutFlex">
                <Skills />
               

            </div>
        </>
    )
}
