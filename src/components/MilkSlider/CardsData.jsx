
function CardsData(peops) {

    const { imgURL, title, description } = peops;

    return (
        <>
            <div className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg">
                <img className="w-full" src={imgURL} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{title}</div>
                    <p className="text-lg leading-6 text-center">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardsData