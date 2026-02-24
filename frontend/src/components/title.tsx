interface TitleProps{
    children: React.ReactNode;
}

const Title = ({children}: TitleProps) => {
    return(
        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 montserrat">
            {children}
        </h1>
    )
}

export default Title