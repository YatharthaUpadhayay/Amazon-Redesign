
export default function NavBar() {
    return (
        <nav>
            {/* Primary NavBar */}
            <ul className="upperNavBar">
                <li>
                    <img style={{width:'90px'}} src="logo.png" alt="logo" />
                </li>
                <li
                    style={{
                        display:'flex',
                        alignItems:'end',
                        gap:'4px'
                }}>
                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--primary-text-color-negative)', paddingBottom:'4px' }}></i>
                    <div>
                        <div>Deliver to Yatharth</div>
                        <div style={{ fontFamily: 'var(--std-font-bold)', fontWeight:'bolder' }}>Dewas 455001</div>
                    </div>
                </li>
                <li
                    style={{
                        display:'flex',
                        alignItems:'center',
                        height:'40px'
                    }}
                >
                    
                    <div className="searchBarBtn">All</div>
                    <input type="text" style={{minWidth:'540px', height:'40px'}} />
                    <button className="searchBarBtn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </li>
                <li>
                    <img src="" alt="" /> {/* indian flag */}
                    <span>EN</span>
                </li>
                <li>
                    <div>Hello, Yathartha</div>
                    <div style={{ fontFamily: 'var(--std-font-bold)' }}>Accounts & Lists</div>
                </li>
                <li>
                    <div>Return</div>
                    <div style={{ fontFamily: 'var(--std-font-bold)' }}>& Orders</div>
                </li>
                <li>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>Cart</span>
                </li>
            </ul>

            {/* Secondary NavBar */}
            <ul className="lowerNavBar">
                <li style={{display:'flex', gap:'6px'}}>
                    <i className="fa-solid fa-bars"></i>
                    <span>All</span>
                </li>
                <li>MX Player</li>
                <li>Sell</li>
                <li>Amazon Pay</li>
                <li>Gift Cards</li>
                <li>Buy Again</li>
                <li>AmazonBasics</li>
                <li>Gift Ideas</li>
                <li>Today's Deals</li>
                <li>Customer Service</li>
            </ul>
        </nav>
    )
}