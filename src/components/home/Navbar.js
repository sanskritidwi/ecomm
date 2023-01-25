import React from 'react'
import Logo from './Logo'
import Search from './Search'

function Navbar() {

    const renderNavIcon=(iconClass, iconName)=>{
        return(
            <div className='navIcons'>
                <div className='notif'>1</div>
            <div className={iconClass}></div>{iconName}
            </div>
        )
    }
  return (
    <div className='NavbarWrapper'>
        <Logo/>
        <button className='btnPrimary'>
            <div className='iconLeft place_black'></div>  All Categories
            <div className='iconRight expandmore_black'></div>
        </button>
        <div className='mainIcons'>
        {renderNavIcon("shopping_cart_black iconLeft", "Cart")}
        {renderNavIcon("heart_black iconLeft", "Wishlist")}
        {renderNavIcon("person_black iconLeft", "Account")}</div>


    </div>
  )
}

export default Navbar