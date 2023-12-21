
import { Job, JobProps } from '.'
import { Timeline } from 'primereact/timeline'
import { Badge } from 'primereact/badge'
import { Button } from 'primereact/button'

import utilityApiJob from '../assets/jobs/utilityapi.json'
import freelanceAnimationJob from '../assets/jobs/freelance-animation.json'
import webTutorJob from '../assets/jobs/web-tutor.json'

import { MONTHS, RESUME_FILENAME, RESUME_URL } from '../constants'

function sortByDates<T extends { dates: string[] }>(a: T, z: T): number {
    return new Date(z.dates[z.dates.length - 1]).getTime() - new Date(a.dates[a.dates.length - 1]).getTime()
}

function fmtJobDate(date: string): string {
    const d = new Date(date)
    if (date.length > 4) { // includes month
        return `${ MONTHS[d.getMonth()] } ${ d.getFullYear() }`
    }
    return `${ d.getFullYear() }`
}

const jobs: JobProps[] = [
    utilityApiJob,
    freelanceAnimationJob,
    webTutorJob
].sort(sortByDates)

function ResumeLink() {
    return (
        <a href={ RESUME_URL } download={ RESUME_FILENAME }>
            <Button outlined label='Resume' icon='pi pi-download' size='small' iconPos='right' />
        </a>
    )
}

function Work() {
    return (
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

    )
}

export default Work