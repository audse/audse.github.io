import { PrimeReactProvider } from 'primereact/api'
import { Menubar } from 'primereact/menubar'
import { ScrollTop } from 'primereact/scrolltop'
import { Button } from 'primereact/button'
import { Timeline } from 'primereact/timeline'
import { Badge } from 'primereact/badge'
import Project, { ProjectProps } from './components/Project'

import '../dist/App.css'
import 'primereact/resources/themes/lara-light-pink/theme.css'
import 'primeicons/primeicons.css'
import './styles/overrides.css'

import chromaProject from './assets/projects/chroma.json'
import primariaProject from './assets/projects/primaria.json'
import pegboardProject from './assets/projects/pegboard.json'

const projects: ProjectProps[] = [
    chromaProject,
    primariaProject,
    pegboardProject,
].sort((a, z) => {
    return parseInt(z.years[z.years.length - 1]) - parseInt(a.years[a.years.length - 1])
})

function App() {
    return (
        <PrimeReactProvider value={ {
            ripple: true
        } }>
            <Menubar
                model={[
                    { label: 'Audrey Serene', className: 'pe-8' },
                    { label: 'Work' },
                    { label: 'About' },
                    { label: 'Contact' },
                ]}
                end={
                    <>
                    <Button icon='pi pi-linkedin' text />
                    <Button icon='pi pi-github' text />
                    </>
                } />
            <ScrollTop />
            <header className='container py-24 px-2'>
                <h1 className='text-6xl'>
                    Audrey Serene
                    <small className='text-4xl text-muted'>Full Stack Software Engineer</small>
                </h1>
            </header>
            <section id='projects' className='bg-gray-100 py-6 px-2'>
                <div className='container'>
                    <h2 className='my-4'>Projects</h2>
                    <Timeline 
                        className='w-full'
                        align='left'
                        value={ projects } 
                        opposite={ project => <p className='text-2xl text-muted'>{ project.years.join('-') }</p> }
                        content={ project => <Project { ...project} /> }
                        marker={ <Badge className='box-content border-2 border-pink-300 bg-white' /> } />
                </div>
            </section>
        </PrimeReactProvider>
    )
}

export default App
