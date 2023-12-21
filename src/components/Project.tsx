import { Button } from 'primereact/button'
import { Galleria } from 'primereact/galleria'
import { Image } from 'primereact/image'

type ProjectProps = {
    name: string,
    subtitle: string,
    years: string[]
    description?: string[],
    screenshots?: string[],
    technologies?: string[],
    github?: string,
    website?: string,
}

function ProjectScreenshots(props: Required<Pick<ProjectProps, 'screenshots'>>) {
    return <Galleria 
            value={ props.screenshots } 
            className='rounded-lg max-w-full w-72'
            showThumbnails={ false } 
            showIndicators={ props.screenshots.length > 1 }
            item={ url => <Image src={ url } imageClassName='rounded-lg max-w-full w-72 h-48 object-cover' preview /> } />
}

function Project (props: ProjectProps) {
    return (
        <>
            { props.screenshots && <ProjectScreenshots screenshots={ props.screenshots } /> }
            { props.technologies && <p className='font-sans font-bold text-base text-pink-600 mb-1 technologies'>{ props.technologies.join(', ') }</p> }
            <h3>
                { props.name }
                <small className='text-xl text-muted'>{ props.subtitle }</small>
            </h3>
            { props.description && props.description.map(desc => <p className='font-sans max-w-prose my-3 whitespace-pre-wrap'>{ desc }</p>) }
            { (props.github || props.website) && <aside className='block mt-6 mb-20'>
                { props.github && <Button 
                    icon='pi pi-github' 
                    label='See it on Github' 
                    iconPos='right' 
                    className='font-sans'
                    size='small'
                    severity='secondary'
                    outlined
                    onClick={ () => window.open(props.github, 'blank') } /> }
                { props.website && <Button 
                    icon='pi pi-external-link' 
                    label='Go to website' 
                    iconPos='right'
                    className='font-sans'
                    size='small'
                    onClick={ () => window.open(props.website, 'blank') } /> }
            </aside> }
        </>
    )
}

export default Project
export type { ProjectProps }