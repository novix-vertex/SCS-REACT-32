import { Link } from "react-router-dom"

const Navbar = () => {
    return (

        <nav className="h-16 w-full text-[#F5EDE2] bg-[#FCB505] flex justify-between items-center px-10">
            <h2 className="font-extrabold text-3xl">DesignerGallery</h2>
            <menu className="font-semibold text-2xl flex justify-center items-center gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
                <Link to="/contacts">Contact Us</Link>
            </menu>
        </nav>

    )
}

export default Navbar