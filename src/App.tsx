import { PrimeReactProvider } from 'primereact/api'
import { Menubar } from 'primereact/menubar'
import { ScrollTop } from 'primereact/scrolltop'
import { Button } from 'primereact/button'
import { Timeline } from 'primereact/timeline'
import { Badge } from 'primereact/badge'
import Project, { ProjectProps } from './components/Project'
import Job, { JobProps } from './components/Job'

import '../dist/App.css'
import 'primereact/resources/themes/lara-light-pink/theme.css'
import 'primeicons/primeicons.css'
import './styles/overrides.css'

import utilityApiJob from './assets/jobs/utilityapi.json'
import freelanceAnimationJob from './assets/jobs/freelance-animation.json'
import webTutorJob from './assets/jobs/web-tutor.json'

import chromaProject from './assets/projects/chroma.json'
import primariaProject from './assets/projects/primaria.json'
import pegboardProject from './assets/projects/pegboard.json'
import godotRiveProject from './assets/projects/godot-rive.json'
import cupidProject from './assets/projects/cupid-lang.json'

import profileImageUrl from './assets/images/profile_small.jpg'
import resumeUrl from './assets/documents/audreyserene_fullstackdev-resume.pdf'

function sortByDates<T extends { dates: string[] }>(a: T, z: T): number {
    return new Date(z.dates[z.dates.length - 1]).getTime() - new Date(a.dates[a.dates.length - 1]).getTime()
}

function sortByYears<T extends { years: string[] }>(a: T, z: T): number {
    return parseInt(z.years[z.years.length - 1]) - parseInt(a.years[a.years.length - 1])
}

function goToId(id: string) {
    document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function fmtJobDate(date: string): string {
    const d = new Date(date)
    if (date.length > 4) { // includes month
        return `${ months[d.getMonth()] } ${ d.getFullYear() }`
    }
    return `${ d.getFullYear() }`
}

const jobs: JobProps[] = [
    utilityApiJob,
    freelanceAnimationJob,
    webTutorJob
].sort(sortByDates)

const projects: ProjectProps[] = [
    chromaProject,
    godotRiveProject,
    primariaProject,
    pegboardProject,
    cupidProject,
].sort(sortByYears)

function ResumeLink () {
    return (
        <a href={ resumeUrl } download='AudreySerene_FullStackEngineer_Resume.pdf'>
            <Button outlined label='Resume' icon='pi pi-download' size='small' iconPos='right' />
        </a>
    )
}

function App() {
    return (
        <PrimeReactProvider value={ { ripple: true } }>
            <Menubar
                className='m-2'
                model={[
                    { label: 'Work', command: () => goToId('work') },
                    { label: 'Projects', command: () => goToId('projects') },
                    { label: 'About', command: () => goToId('about') },
                    { label: 'Contact', command: () => goToId('contact') },
                ]}
                start={ <span className='block ps-4 pe-12 text-muted'>Audrey Serene</span> }
                end={
                    <>
                    <Button icon='pi pi-linkedin' text onClick={ () => window.open('https://linkedin.com/in/audreyerserene', 'blank') } />
                    <Button icon='pi pi-github' text onClick={ () => window.open('https:/github.com/audse', 'blank') } />
                    </>
                } />
            <ScrollTop />
            <header className='container py-32 px-2'>
                <h1 className='text-6xl'>
                    Audrey Serene
                    <small className='text-4xl text-muted'>Full Stack Software Engineer</small>
                </h1>
            </header>

            <hr className='w-2/3 mx-auto' />

            <section id='work' className='container py-16 px-2'>

                <header className='section-header'>
                    <h2>Work</h2>
                    <ResumeLink />
                </header>

                <Timeline 
                    className='w-full'
                    align='left'
                    value={ jobs } 
                    opposite={ job => <p className='text-xl text-muted'>{ job.dates.map(fmtJobDate).join('-') }</p> }
                    content={ job => <Job { ...job} /> }
                    marker={ <Badge className='box-content border-2 border-pink-300 bg-white' /> } />
                
            </section>

            <hr className='w-2/3 mx-auto' />

            <section id='projects' className='container py-16 px-2'>
                
                <header className='section-header'>
                    <h2>Selected Projects</h2>
                </header>
                
                <Timeline 
                    className='w-full'
                    align='left'
                    value={ projects } 
                    opposite={ project => <p className='text-xl text-muted'>{ project.years.join('-') }</p> }
                    content={ project => <Project { ...project} /> }
                    marker={ <Badge className='box-content border-2 border-pink-300 bg-white' /> } />
            </section>

            <hr className='w-2/3 mx-auto' />

            <section id='about' className='container py-24 px-2'>
                <header className='section-header'>
                    <h2>About</h2>
                </header>
                <p className='py-4'>My name is Audrey Serene Barnes, and I am a full stack software developer and designer.</p>
                <p className='pb-4'>I first became interested in programming at 10 years old, making choose-your-own-adventure games in Perl.</p>
                <p className='pb-4'>Over time I have branched out into both frontend and backend software development, utilizing my Bachelor's degree in motion graphic design to create beautiful and functional websites and software.</p>
                <p className='pb-4'>Feel free to get in touch about developer or graphic design opportunities.</p>
                <img src={ profileImageUrl } className='h-48 w-48 mx-auto mt-4 object-cover rounded-full object-top' />
            </section>

            <hr className='w-2/3 mx-auto' />

            <footer id='contact' className='pt-24 pb-48 px-2'>
                <div className='container'>
                    <header className='section-header'>
                        <h2>Contact</h2>
                        <p className='text-xl font-sans py-4'>audrey.serene@gmail.com</p>
                    </header>
                    <Button icon='pi pi-linkedin' label='LinkedIn' size='small' onClick={ () => window.open('https://linkedin.com/in/audreyerserene', 'blank') } iconPos='right' className='me-4 font-sans' />
                    <Button icon='pi pi-github' label='Github' size='small' onClick={ () => window.open('https:/github.com/audse', 'blank') } iconPos='right' className='font-sans' />
                </div>
            </footer>
        </PrimeReactProvider>
    )
}

export default App
