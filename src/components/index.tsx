import About from './About'
import Contact from './Contact'
import Job, { JobProps } from './Job'
import Nav from './Nav'
import Project, { ProjectProps } from './Project'
import Projects from './Projects'
import Work from './Work'

function Divider () {
    return <hr className='w-2/3 mx-auto' />
}

export {
    About,
    Contact,
    Divider,
    Job,
    type JobProps,
    Nav,
    Project,
    type ProjectProps,
    Projects,
    Work,
}