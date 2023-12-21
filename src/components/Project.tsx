import { Button } from "primereact/button"

type ProjectProps = {
    name: string,
    subtitle: string,
    years: string[]
    description?: string[],
    screenshot?: string,
    technologies?: string[],
    github?: string,
    website?: string,
}

function Project (props: ProjectProps) {
    return (
        <>
            { props.technologies && <p className='font-sans font-bold text-base text-pink-600 mb-1 technologies'>{ props.technologies.join(', ') }</p> }
            <h3>
                { props.name }
                <small className='text-2xl text-muted'>{ props.subtitle }</small>
            </h3>
            { props.description && props.description.map(desc => <p className='font-sans max-w-prose my-3 whitespace-pre-wrap'>{ desc }</p>) }
            { (props.github || props.website) && <aside className='block mt-6 mb-16'>
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