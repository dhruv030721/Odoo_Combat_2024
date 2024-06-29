import { useState } from "react";
import logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import authentication from "../../services/operations/authentication";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        mobile_number: "",
        email: "",
        role: "User",
        age: "",
        password: "",
        gender: "",
        weight: "",
        height: "",
        fitnessgoal: ""
    });

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            await toast.promise(
                authentication.register(formData),
                {
                    loading: "Processing....",
                    success: (response) => {
                        // dispatch(register(response.data.data));
                        navigate('/login');
                        return `${response.data.message}`;
                    },
                    error: (error) => {
                        return `${error.message}`;
                    }
                }
            );
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="min-h-screen font-poppins flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto flex w-full items-center">
                {/* Form Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <img className="mx-auto h-52 w-auto" src={logo} alt="Logo" />
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
                        </div>
                        <form className="mt-8 space-y-6">
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dob" className="sr-only">Date of Birth</label>
                                    <input
                                        id="dob"
                                        name="dob"
                                        type="date"
                                        required
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Date of Birth"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile_number" className="sr-only">Mobile Number</label>
                                    <input
                                        id="mobile_number"
                                        name="mobile_number"
                                        type="text"
                                        required
                                        value={formData.mobile_number}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="age" className="sr-only">Age</label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        required
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Age"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="gender" className="sr-only">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        required
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="weight" className="sr-only">Weight</label>
                                    <input
                                        id="weight"
                                        name="weight"
                                        type="number"
                                        required
                                        value={formData.weight}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Weight (kg)"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="height" className="sr-only">Height</label>
                                    <input
                                        id="height"
                                        name="height"
                                        type="number"
                                        required
                                        value={formData.height}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Height (cm)"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="fitnessgoal" className="sr-only">Fitness Goal</label>
                                    <select
                                        id="fitnessgoal"
                                        name="fitnessgoal"
                                        required
                                        value={formData.fitnessgoal}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    >
                                        <option value="" disabled>Select Fitness Goal</option>
                                        <option value="Muscle Building">Muscle Building</option>
                                        <option value="Weight Loss">Weight Loss</option>
                                        <option value="Yoga">Yoga</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-black hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                        </form>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="mt-2 text-sm text-gray-600">
                                {"Already have an account? "}
                                <a href="#" className="font-medium text-black hover:text-indigo-500">
                                    Login
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={"https://wallpapercave.com/wp/wp12260063.jpg"} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Register;
