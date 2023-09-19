// import React from 'react'
import LeftChevron from '../../assets/icons/LeftChevron.png';
import RightChevron from '../../assets/icons/RightChevron.png';
import CardsData from "./CardsData";
import CardsContent from "./CardsContent";

function Cards() {


    return (
        <>
            <header className="mt-7 text-center">
                <h2 className="uppercase font-bold text-4xl">SHOP OUR BESTSELLERS</h2>
                <p className="text-base leading-10">Iconic layer cakes with unfrosted sides, gooey pie, and fudgy Cake Truffles.</p>
            </header>
            <div className="custom-scrollbar px-6 py-6 overflow-x-scroll">
                <div className="group">
                    {/* Left Chevron */}
                    <div className="fixed top-80 left-0 z-50 flex items-center justify-center bg-chevron_bg h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <img src={LeftChevron} alt="left chevron" className="h-6 w-6" />
                    </div>

                    {/* Right Chevron */}
                    <div className="fixed top-80 right-0 z-50 flex items-center justify-center bg-chevron_bg h-20 w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <img src={RightChevron} alt="right chevron" className="h-6 w-6" />
                    </div>

                    <div className="flex flex-nowrap gap-4 min-w-max">
                        {CardsContent.map(item => (
                            <CardsData
                                key={item.id}
                                imgURL={item.imgSrc}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards