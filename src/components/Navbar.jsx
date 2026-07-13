import "../styles/navbar.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="logo">UrbanUrgency</h2>

            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button className="nav-btn">What You Can Do</button>
        </nav>
    )
}