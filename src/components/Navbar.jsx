import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-red-700 py-2 px-2 text-white flex justify-center items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contacts">Contact Us</Link>
        </nav>
        
    )
}

export default Navbar