// import React from 'react'

import CardsData from "./CardsData";

function Cards() {

    const imgURL = 'https://milkbarstore.com/cdn/shop/products/BMBackgroundRemoval_0111_27_aec3891e-ea10-4d97-88f6-1187252ad2d3.png?format=pjpg&v=1680274631&width=600';

    return (
        <>
            <header className="mt-10 text-center">
                <h2 className="uppercase font-bold text-4xl">SHOP OUR BESTSELLERS</h2>
                <p className="text-base leading-10">Iconic layer cakes with unfrosted sides, gooey pie, and fudgy Cake Truffles.</p>
            </header>
            <div className="px-6 py-6 flex justify-normal gap-4">
                <CardsData
                    imgURL={imgURL}
                    title="Sunset in the mountains"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam"
                />
                <CardsData
                    imgURL={imgURL}
                    title="Sunset in the mountains"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam"
                />
                <CardsData
                    imgURL={imgURL}
                    title="Sunset in the mountains"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam"
                />
            </div>
        </>
    )
}

export default Cards