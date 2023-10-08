const Navber = () =>{
    return ( 
            <nav className="container">
                <div className="logo"><img src="../public/images/brand_logo.png" alt="logo" /></div>
            
                <ul className="menu-item">
                    <li><a href="#">MENU</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <button>Login</button>
            </nav>
    )
}

export default Navber;