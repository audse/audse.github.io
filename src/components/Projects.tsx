import { Project, ProjectProps } from '.'
import { Timeline } from 'primereact/timeline'
import { Badge } from 'primereact/badge'


import chromaProject from '../assets/projects/chroma.json'
import primariaProject from '../assets/projects/primaria.json'
import pegboardProject from '../assets/projects/pegboard.json'
import godotRiveProject from '../assets/projects/godot-rive.json'
import cupidProject from '../assets/projects/cupid-lang.json'


function sortByYears<T extends { years: string[] }>(a: T, z: T): number {
    return parseInt(z.years[z.years.length - 1]) - parseInt(a.years[a.years.length - 1])
}

const projects: ProjectProps[] = [
    chromaProject,
    godotRiveProject,
    primariaProject,
    pegboardProject,
    cupidProject,
].sort(sortByYears)

function Projects() {
    return (
        <section id='projects' className='container py-16 px-6 sm:px-2'>
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
    )
}

export default Projects