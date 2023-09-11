
function HerSection() {
    const imgURL = 'https://casper.com/dw/image/v2/BFHV_PRD/on/demandware.static/-/Library-Sites-casper-shared-us/default/dwce595458/images/Trial-Hero-Poster-Small-EU-Desktop%20(13).jpg?sw=2048&sm=cut'
    return (
        <div className="text-center text-header_text flex justify-center items-center">
            <img src={imgURL} alt="hero" />
            <div className="absolute">
                <h1 className="text-2xl md:text-5xl lg:text-7xl font-medium">Sleep on it with a risk-free trial</h1>
            </div>
        </div>
    )
}

export default HerSection;