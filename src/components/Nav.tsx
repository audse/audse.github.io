import { Menubar } from 'primereact/menubar'
import { ScrollTop } from 'primereact/scrolltop'

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
            start={ <span className='block ps-4 pe-12 text-muted'>Audrey Serene</span> }
            end={
                <>
                    <a href='https://linkedin.com/in/audreyserene' className='p-button p-component p-button-icon-only p-button-text me-2' target='_blank'>
                        <span className='p-button-icon p-c pi pi-linkedin' />
                    </a>
                    <a href='https://github.com/audse' className='p-button p-component p-button-icon-only p-button-text' target='_blank'>
                        <span className='p-button-icon p-c pi pi-github' />
                    </a>
                </>
            } />
        <ScrollTop />
    </>
}

export default Nav