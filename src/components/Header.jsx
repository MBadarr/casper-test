
function Header() {


    const imgURL = 'https://www.denofgeek.com/wp-content/uploads/2022/05/Leged-of-Zelda-Link.jpg';

    return (
        <>
            <div className='flex justify-between px-4 py-4 bg-header'>
                <div className="flex items-center gap-4">
                    <img src={imgURL} alt="" height={20} width={20} />
                    <span className="text-header_text">Refer a Friend</span>
                </div>
                <div className="flex items-center gap-4">
                    <img src={imgURL} alt="" height={20} width={20} />
                    <span className="text-header_text">Find a store</span>
                </div>
            </div>
        </>
    )
}

export default Header;