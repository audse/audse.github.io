import { Button } from 'primereact/button'

function Contact() {
    return (
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
    )
}

export default Contact