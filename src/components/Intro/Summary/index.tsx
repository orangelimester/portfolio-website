import { useContext, useEffect, useRef } from 'react';
import './index.css'
import { HashLink } from "react-router-hash-link";
import { AppComponentContext } from '../../../context/context';

export const Summary = () => {
    const { navBarOn, setnavBarOn } = useContext(AppComponentContext)
    const eleRef = useRef<any>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (eleRef.current === null) return;
            const rect = eleRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0)
                setnavBarOn(false)
            else if (navBarOn === false)
                setnavBarOn(true)
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="SummaryFlex text-center">
            <section className='text-center'>
                <h1 >Hi, my name's Mahendran Vattekat</h1>
                <h4 >Full-Stack Developer with a passion and skillset for web-app development & intuitive user experiences. </h4>
            </section>
            <div ref={eleRef} className='links'>
                <HashLink to='#about' smooth><button className='linkBtn'>About Me</button></HashLink>
                <HashLink to='#experience' smooth><button className='linkBtn'>Experience</button></HashLink>
                <HashLink to='#interest' smooth><button className='linkBtn'>Interests</button></HashLink>
                <HashLink to='#contact' smooth><button className='linkBtn'>Contact</button></HashLink>
            </div>
        </div>
    )
}
