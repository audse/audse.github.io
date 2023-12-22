import { Menubar } from 'primereact/menubar'
import { ScrollTop } from 'primereact/scrolltop'
import { GITHUB_URL, LINKEDIN_URL } from '../constants'

function Nav() {
    return <>
        <Menubar
            className='m-2'
            model={[
                { label: 'Work', url: '#work' },
                { label: 'Projects', url: '#projects' },
                { label: 'About', url: '#about' },
                { label: 'Contact', url: '#contact' },
            ]}
            start={ <span className='block ps-4 md:pe-12 text-muted hidden md:inline'>Audrey Serene</span> }
            end={
                <>
                    <a href={ LINKEDIN_URL } className='p-button p-component p-button-icon-only p-button-text me-2' target='_blank'>
                        <span className='p-button-icon p-c pi pi-linkedin' />
                    </a>
                    <a href={ GITHUB_URL } className='p-button p-component p-button-icon-only p-button-text' target='_blank'>
                        <span className='p-button-icon p-c pi pi-github' />
                    </a>
                </>
            } />
        <ScrollTop />
    </>
}

export default Nav