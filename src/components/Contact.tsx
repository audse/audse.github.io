import { Menu } from 'primereact/menu'
import { LINKEDIN_URL, GITHUB_URL, RESUME_FILENAME, RESUME_URL, EMAIL } from '../constants'

function Contact() {
    return (
        <footer id='contact' className='pt-24 pb-48 px-6 sm:px-2'>
            <div className='container'>
                <header className='section-header'>
                    <h2>Contact</h2>
                </header>
                <Menu className='w-fit' model={[
                    { label: EMAIL, url: `mailto:${ EMAIL }`, icon: 'pi pi-envelope' },
                    { template: (
                        <div className="p-menuitem-content" data-pc-section="content">
                            <a href={ RESUME_URL } 
                                download={ RESUME_FILENAME }
                                className='p-menuitem-link'
                                role='menuitem'
                                tabIndex={ 0 }>
                                    <span className='p-menuitem-icon pi pi-download'></span>
                                    <span className='p-menuitem-text'>Download Resume</span>
                            </a>
                        </div>
                        ) },
                    { label: 'LinkedIn', url: LINKEDIN_URL, icon: 'pi pi-linkedin' },
                    { label: 'Github', url: GITHUB_URL, icon: 'pi pi-github' }
                ]} />
            </div>
        </footer>
    )
}

export default Contact