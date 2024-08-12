import '../App.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header(){
    return (
        <>
        <nav className="header-box">
            <h1 className="title">Hanami</h1>
            <div className="nav-right">
                <div className="search-container">
                    <input id="search-form" className="search-bar" placeholder="Search" />
                    <img src="/assets/search_icon.png" alt="Search Icon" className="search-icon" />
                </div>
                <div className="cart-icon">
                    <img src="/assets/cart_icon.png" alt="Cart Icon" />
                </div>
                <button className="login-button">LogIn</button>
            </div>
        </nav>
        </>
    )
}