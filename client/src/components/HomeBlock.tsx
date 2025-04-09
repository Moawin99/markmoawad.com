import pyramid from '../assets/Pyramid.svg'

export interface HomeBlockProps {
    title: string;
    description: string;
    fullWidth?: boolean;
    subTitle: string;
    link: string;
}

const HomeBlock = ({ title, description, fullWidth, subTitle, link }: HomeBlockProps) => {
    
    return (
        <a className={`flex flex-col justify-between p-6 bg-white rounded-xl shadow-sm col-span-1 row-span-1
            ${fullWidth ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'}`} href={link}>
                <div className="box-border flex flex-row justify-between w-full pr-3">
                    <h3>{subTitle}</h3>
                    <img src={pyramid} alt="pyramid" />
                </div>
                <div className="flex justify-between items-start flex-col">
                    <h1 className="text-4xl font-semibold mb-2">{title}</h1>
                    <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
                </div>
            {/* </div> */}
        </a>
    );
};

export default HomeBlock;