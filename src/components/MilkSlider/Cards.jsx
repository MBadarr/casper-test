// import React from 'react'
import LeftChevron from '../../assets/icons/LeftChevron.png';
import RightChevron from '../../assets/icons/RightChevron.png';
import CardsData from "./CardsData";
import CardsContent from "./CardsContent";
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Cards() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLeftChevron, setShowLeftChevron] = useState(false);
    const [showRightChevron, setShowRightChevron] = useState(true);

    const scrollContainerRef = React.createRef();

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        setScrollPosition(container.scrollLeft);

        setShowLeftChevron(container.scrollLeft > 0);

        setShowRightChevron(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    const scrollStep = 100;

    const scrollLeft = () => {
        const newScrollPosition = scrollPosition - scrollStep;
        if (newScrollPosition >= 0) {
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        } else {
            scrollContainerRef.current.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        const newScrollPosition = scrollPosition + 200;
        if (newScrollPosition <= scrollContainerRef.current.scrollWidth) {
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    });


    return (
        <>
            <header className="mt-7 text-center">
                <h2 className="uppercase font-bold text-4xl">SHOP OUR BESTSELLERS</h2>
                <p className="text-base leading-10">Iconic layer cakes with unfrosted sides, gooey pie, and fudgy Cake Truffles.</p>
            </header>
            <div className="custom-scrollbar px-6 py-6 overflow-x-scroll" onScroll={handleScroll} ref={scrollContainerRef}>
                <div className="group">
                    {/* Left Chevron */}
                    {showLeftChevron && (
                        <div className="fixed top-80 left-0 z-50 flex items-center justify-center bg-chevron_bg h-14 w-14 md:h-20 md:w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer" onClick={scrollLeft}>
                            <img src={LeftChevron} alt="left chevron" className="h-6 w-6" />
                        </div>
                    )}

                    {/* Right Chevron */}
                    {showRightChevron && (
                        <div className="fixed top-80 right-0 z-50 flex items-center justify-center bg-chevron_bg h-14 w-14 md:h-20 md:w-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer" onClick={scrollRight}>
                            <img src={RightChevron} alt="right chevron" className="h-6 w-6" />
                        </div>
                    )}

                    <div className="flex flex-nowrap gap-4 min-w-max">
                        {CardsContent.map(item => (
                            <CardsData
                                key={item.id}
                                imgURL={item.imgSrc}
                                imgHover={item.imgHover}
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