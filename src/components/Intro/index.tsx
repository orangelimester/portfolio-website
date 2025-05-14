import { NavBar } from '../../Navigation/NavBar'
import { Contact } from '../../pages/Contact'
import { Experience } from '../../pages/Experience'
import { Projects } from '../../pages/Projects'
import { Skill } from '../../pages/Skill'
import { Summary } from './Summary'
import './index.css'
export const IntroPage = () => {
    return (
        <main>
            <div className='mainBG'></div>
            <div className='mainContent' >
                <NavBar />
                <div id='intro'></div>
                <div className='IntroFlex'>
                    <Summary />
                </div>
                <section className='AboutFlex' id='about'>
                    <Skill />
                </section>
                <section className='ExpFlex' id='experience'>
                    <Experience />
                </section>
                <section className='ProjFlex' id='interest'>
                    <Projects />
                </section>
                <section className='ContactFlex' id='contact'>
                    <Contact />
                </section>
            </div>
        </main>

    )
}
