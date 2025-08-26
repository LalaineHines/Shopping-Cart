import { Link } from 'react-router-dom';
import githubIcon from '../../assets/github.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 rounded-1g m-4">
            <div className="w-full max-w-screen-x1 mx-auto pt-4 pb-2">
                <div className="flex items-center justify-between">
                    <Link
                      to="/home"
                      className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-2x1 font-semibold whitespace-nowrap dark:text-white">
                            QuicKieCart
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/home" className="hover:underline me:4 md:me-6">
                              Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="hover:underline me:4 md:me-6">
                              Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="hover:underline me:4 md:me-6">
                              About
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="items-center justify-center flex-col block text-sm text-gray-500 dark:text-gray-400">
                    <div className=" flex items-center mb-2">
                        <a href="https://github.com/LalaineHines">
                        <img src={githubIcon} className="h-8 inline" alt="Github" />
                        </a>
                        <p className="inline ml-2">Developed by Lalaine Hines</p>
                    </div>

                    <div>CC 2025 Lalaine Hines . All Rights Reserved.</div>
                </span>
            </div>
        </footer>
    );
};

export default Footer;