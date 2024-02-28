import './Navigation.css'

function Navigation() {
    return (
        <div className="navbar">
            <div className="nav-logo"><a href=""><img src="" alt="Persperion Logo" /></a></div>
            <div className="nav-buttons">
                <button className="about-button">About</button>
                <button className="signup-button">Sign Up</button>
            </div>
        </div>
    );
}

export default Navigation