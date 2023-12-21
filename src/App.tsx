import { PrimeReactProvider } from 'primereact/api'
import { Contact, Divider, About, Projects, Work, Nav } from './components'

import '../dist/App.css'
import 'primereact/resources/themes/lara-light-pink/theme.css'
import 'primeicons/primeicons.css'
import './styles/overrides.css'

function App() {
    return (
        <PrimeReactProvider value={ { ripple: true } }>
            <Nav />
            <header className='container py-32 px-2'>
                <h1 className='text-6xl'>
                    Audrey Serene
                    <small className='text-4xl text-muted'>Full Stack Software Engineer</small>
                </h1>
            </header>
            
            <Divider />
            <Work />
            <Divider />
            <Projects />
            <Divider />
            <About />
            <Divider />
            <Contact />
        </PrimeReactProvider>
    )
}

export default App
