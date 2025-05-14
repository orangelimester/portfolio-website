import { useState } from 'react'
import './index.css'
import { SSE } from './Content/SSE'
import { SE } from './Content/SE'
import { LSE } from './Content/LSE'
import { JSE } from './Content/JSE'
import { DAI } from './Content/DAI'
import { OI } from './Content/OI'
export const ExperiencePage = () => {
    const [modalContent, setmodalContent] = useState<React.ReactNode>(null)
    const [modalOn, setmodalOn] = useState(false)
    const SetContentData = (type: string) => {
        switch (type) {
            case 'sse':
                setmodalContent(<SSE onSetModalOff={SetModalContentOff} />)
                break
            case 'se':
                setmodalContent(<SE onSetModalOff={SetModalContentOff} />)
                break
            case 'lse':
                setmodalContent(<LSE onSetModalOff={SetModalContentOff} />)
                break
            case 'jse':
                setmodalContent(<JSE onSetModalOff={SetModalContentOff} />)
                break
            case 'dai':
                setmodalContent(<DAI onSetModalOff={SetModalContentOff} />)
                break
            case 'oi':
                setmodalContent(<OI onSetModalOff={SetModalContentOff} />)
                break
            default: break
        }
        setmodalOn(true)
        document.body.style.overflow = "hidden"

    }
    const SetModalContentOff = async () => {
        setmodalOn(false)
        document.body.style.overflow = ""
        setTimeout(() => {
            setmodalContent(null)
        }, 200);
    }
    return (
        <>
            <div className=' expTitle'>
                <h1 className=' text-center'>Professional Experience</h1>
            </div>
            <div className="expFlex">
                <div className='card' onClick={() => SetContentData('lse')}>
                    Lead Software Engineer
                    <ul>
                        <li>
                            - Development Projects Lead
                        </li>
                        <li>
                            - Cross-Functional Collaboration
                        </li>
                        <li>
                            - Designed Complex Architectures
                        </li>
                    </ul>

                </div>
                <div className='card' onClick={() => SetContentData('sse')}>Senior Software Engineer
                    <ul>
                        <li>
                            - Code Deployment Utility (CDU)
                        </li>
                        <li>
                            - Developed Organization Wide Portal
                        </li>
                        <li>
                            - React Web UI Framework Contributor
                        </li>
                    </ul>
                </div>
                <div className='card' onClick={() => SetContentData('se')}>Software Engineer
                    <ul>
                        <li>
                            - SQL Collector Application
                        </li>
                        <li>
                            - Application DB Troubleshooter Dashboard
                        </li>
                    </ul>
                </div>
                <div className='card' onClick={() => SetContentData('jse')}>Junior Software Engineer
                    <ul>
                        <li>
                            - Admin. Automation Scripts
                        </li>
                        <li>
                            - E-Mail Reports Generator for Database Metrics
                        </li>
                    </ul>
                </div>
                <div className='card' onClick={() => SetContentData('dai')}>Database Architect Intern
                    <ul>
                        <li>
                            - Database Vendor Scorecards
                        </li>
                        <li>
                            - MongoDB Instance Configuration
                        </li>
                    </ul>
                </div>
                <div className='card' onClick={() => SetContentData('oi')}>Operations Intern
                    <ul>
                        <li>
                            - Field Support Operations
                        </li>
                        <li>
                            - Hands-On Equipment Repair/Setup
                        </li>
                    </ul>
                </div>
            </div >
            <div className={'modal '}>
                <div  onClick={() => SetModalContentOff()} className={'overlay ' + (modalContent === null ? 'closed' : 'opened')}></div>
                <div className={'modal-content ' + (modalOn === false ? 'closed' : 'opened')}>
                    {
                        modalContent
                    }
                </div>
            </div>
        </>
    )
}
