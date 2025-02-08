import Pryamid from '../assets/Pyramid.svg'
export const HomeBlock = (props: any) => {
    return (
        <div className="flex flex-col box-border justify-between min-h-32 min-w-32 bg-amber-200 p-5 m-2.5">
            <div className="nav flex flex-row justify-between align-middle bg-amber-600">
                <h1 className="text-xl opacity-50">{props.title}</h1>
                <img src={Pryamid} alt="icon" />
            </div>
            <div className="flex flex-col">
                <h1 className='text-5xl'>{props.title}</h1>
                <p className='text-sm line-clamp-2'>{props.description}</p>
            </div>
        </div>
    )
}