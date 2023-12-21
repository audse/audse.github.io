import { Button } from 'primereact/button'
import { Menubar } from 'primereact/menubar'
import { ScrollTop } from 'primereact/scrolltop'

function goToId(id: string) {
    document?.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Nav() {
    return <>
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
    </>
}

export default Nav