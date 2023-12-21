import { Menu } from 'primereact/menu'

function Contact() {
    return (
        <footer id='contact' className='pt-24 pb-48 px-2'>
            <div className='container'>
                <header className='section-header'>
                    <h2>Contact</h2>
                </header>
                <Menu className='w-fit' model={[
                    { label: 'audrey.serene@gmail.com', url: 'mailto:audrey.serene@gmail.com', icon: 'pi pi-envelope' },
                    { label: 'LinkedIn', url: 'https://linkedin.com/in/audreyserene', icon: 'pi pi-linkedin' },
                    { label: 'Github', url: 'https://github.com/audse', icon: 'pi pi-github' }
                ]} />
            </div>
        </footer>
    )
}

export default Contact