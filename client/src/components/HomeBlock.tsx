export interface HomeBlockProps {
    title: string;
    subTitle: string;
    fullWidth?: boolean;
}

const HomeBlock = ({ title, subTitle, fullWidth }: HomeBlockProps) => {
    return (
        <div className={`p-6 bg-white rounded-xl shadow-sm ${fullWidth ? 'col-span-2' : 'col-span-1'}
        md:col-span-${fullWidth ? 'full': '1'} lg:col-span-${fullWidth ? 'full': '1'}`}>
            <div className="flex justify-between items-start flex-col">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{subTitle}</p>
            </div>
        </div>
    );
};

export default HomeBlock;