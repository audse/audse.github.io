import profileImageUrl from '../assets/images/profile_small.jpg'

function About() {
    return (
        <section id='about' className='container py-24 px-2'>
            <header className='section-header'>
                <h2>About</h2>
            </header>
            <p className='py-4'>My name is Audrey Serene Barnes, and I am a full stack software developer and designer.</p>
            <p className='pb-4'>I first became interested in programming at 10 years old, making choose-your-own-adventure games in Perl.</p>
            <p className='pb-4'>Over time I have branched out into both frontend and backend software development, utilizing my Bachelor's degree in motion graphic design to create beautiful and functional websites and software.</p>
            <p className='pb-4'>Feel free to get in touch about developer or graphic design opportunities.</p>
            <img src={ profileImageUrl } className='h-48 w-48 mx-auto mt-4 object-cover rounded-full object-top' />
        </section>
    )
}

export default About