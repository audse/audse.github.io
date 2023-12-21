type JobProps = {
    company?: string,
    title: string,
    dates: string[]
    description: string[],
}

function Job (props: JobProps) {
    return (
        <>
            { props.company && <p className='font-sans font-bold text-base text-pink-600 mb-1 company'>{ props.company }</p> }
            <h3>
                { props.title }
            </h3>
            <ul className='list-disc px-4 pb-12'>
                { props.description.map(desc => <li className='font-sans max-w-prose my-3 whitespace-pre-wrap'>{ desc }</li>) }
            </ul>
        </>
    )
}

export default Job
export type { JobProps }