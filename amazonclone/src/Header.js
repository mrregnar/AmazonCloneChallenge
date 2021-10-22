import React from 'react'
import './Header.css'
import Amazon_Logo from './images/shamazon_grime_white.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket"
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider"
import { auth } from './firebase'
import { signOut } from "firebase/auth";


function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            signOut(auth).then(() => {
                // Sign-out successful.
              }).catch((error) => {
                // An error happened.
              });
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img
                className="header__logo" 
                src={Amazon_Logo}
                alt="Iconimg"
                />
            </Link>

            <div 
                className="header__search">
                <input
                className="header__searchInput"
                type="text"/>
                <SearchIcon
                className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                
            <Link to={!user && "/login"}>
                
                <div 
                    
                    onClick={handleAuthenticaton} 
                    className="header__option">
                    
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                                        
                    <span className="header__optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'} 
                    </span>
                    
                </div>
            
            </Link>    
                
                <div className="header__option">
                    
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                    </span>

                </div>
                    
                <div className="header__option">
                    
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime 
                    </span>

                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo
                        header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            
            </div>   

        </div>
    )
}

export default Header