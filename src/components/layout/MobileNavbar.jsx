import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <nav className="text-white flex justify-between p-4">
                <button>
                    {open ? "X" : "☰"}
                </button>
            </nav>

            <div 
            className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white transform ${
                open ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-2`}
            >
                <div className="flex flex-col p-6">
                    <Link to="/home" onClick={() => setOpen(false)} className="mb-2">
                    Home
                    </Link>
                    <Link to="/products" onClick={() => setOpen(false)} className="mb-2">
                    Products
                    </Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="mb-2">
                    About
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;