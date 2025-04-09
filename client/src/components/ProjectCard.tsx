export interface ProjectProp {
    name: string,
    description: string
    githubLink: string
    liveLink?: string
}

const ProjectCard = ({ name, description, githubLink, liveLink }: ProjectProp) => {

    return (
        <div className="flex flex-col justify-between relative p-6 border-green-900 rounded-xl shadow-sm col-span-1 row-span-1">
            <div className="box-border flex flex-row w-full">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <a className="absolute bottom-4 left-4" href={githubLink}>GitHub</a>
            {liveLink && <a className="absolute bottom-4 right-4" href={liveLink}>Live</a>}
        </div>
    );
}

export default ProjectCard