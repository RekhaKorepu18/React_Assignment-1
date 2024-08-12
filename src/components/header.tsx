import '../App.css';


export default function Header({count, searchItem, setSearchItem}: {count: number, searchItem: string, setSearchItem: (name: string) => void }){
    return (
        <>
        <nav className="header-box">
            <h1 className="title">Hanami</h1>
            <div className="nav-right">
                <div className="search-container">
                    <input id="search-form" className="search-bar" placeholder="Search"
                    value = {searchItem}
                    onChange= {(product)=> setSearchItem(product.target.value)} />
                    <img src="/assets/search_icon.png" alt="Search Icon" className="search-icon" />
                </div>
                <div className="cart-icon">
                    <img src="/assets/cart_icon.png" alt="Cart Icon" />
                    {count > 0 && <div className="cart-count">{count}</div>}
                </div>
                <button className="login-button">LogIn</button>
            </div>
        </nav>
        </>
    )
}