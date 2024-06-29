import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { name } = useSelector((state) => state.auth.userData);

    const username = name.split(' ')[0];

    return (
        <header className="text-black py-4 px-16 font-poppins">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-black text-xl font-semibold">
                        <img src={logo} alt="" className="h-28 backdrop-invert-0" />
                    </div>
                    <nav className="ml-4">
                        <ul className="flex space-x-4 text-orange-800 font-semibold">
                            <li>
                                <a href="#" className="inline-block">Home</a>
                                <span className="text-gray-500 px-2">|</span>
                            </li>
                            <li>
                                <a href="#" className="inline-block">Fitness Category</a>
                                <span className="text-gray-500 px-2">|</span>
                            </li>
                            <li>
                                <a href="#" className="inline-block">Nutrition & Diet Plan</a>
                                <span className="text-gray-500 px-2">|</span>
                            </li>
                            <li>
                                <a href="#" className="inline-block">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex  justify-center items-center">
                    <FaUserCircle size={30}/>
                    <span className="text-black font-semibold  text-lg ml-2">{username}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
