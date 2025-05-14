import { useContext } from 'react';
import './index.css'
import { AppComponentContext } from '../context/context';
import { HashLink } from 'react-router-hash-link';
export const NavBar = () => {
    const { navBarOn } = useContext(AppComponentContext)
    return (
        <nav className={navBarOn ? "opened" : "closed"}>
            <div className="navbar">
                <HashLink to='#intro' smooth><div className='navItem'>Intro</div></HashLink>
                <HashLink to='#about' smooth><div className='navItem'>Skills</div></HashLink>
                <HashLink to='#experience' smooth><div className='navItem'>Experience</div></HashLink>
                <HashLink to='#interest' smooth><div className='navItem'>Projects</div></HashLink>
                <HashLink to='#contact' smooth><div className='navItem'>Contact</div></HashLink>
            </div>
        </nav>
    )
}
