import location from '../assets/icons/location.ico';
import money from '../assets/icons/money.ico';

function Header() {

    return (
        <>
            <div className='flex justify-between px-4 py-4 bg-header'>
                <div className="flex items-center gap-2">
                    <img src={money} alt="money" height={20} width={20} />
                    <span className="text-header_text">Refer a Friend</span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={location} alt="location" height={20} width={20} />
                    <span className="text-header_text">Find a store</span>
                </div>
            </div>
        </>
    )
}

export default Header;