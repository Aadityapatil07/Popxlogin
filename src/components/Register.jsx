import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Register = () => {
    const { setUser } = useAppContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        isAgency: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.isAgency) {
            alert("Please fill all required fields.");
            return;
        }
        setUser({ name: formData.fullName, email: formData.email });
        navigate("/user-data");
    };

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
                {/* Heading */}
                <h2 className="text-2xl font-bold text-[#1D2939] mb-1">Create your</h2>
                <h3 className="text-2xl font-bold text-[#1D2939] mb-6">PopX account</h3>

                {/* Full Name */}
                <div className="mb-3">
                    <label className="text-black block text-sm font-medium mb-1" htmlFor="fullName">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />

                </div>

                {/* Phone Number */}
                <div className="text-black mb-3">
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                        Phone number<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />
                </div>

                {/* Email Address */}
                <div className="text-black mb-3">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]" />
                </div>

                {/* Password */}
                <div className="text-black mb-3">
                    <label className="block text-sm font-medium mb-1" htmlFor="password">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />
                </div>

                {/* Company Name */}
                <div className="text-black mb-3">
                    <label className="block text-sm font-medium mb-1" htmlFor="company">
                        Company name
                    </label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white text-black border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#8000ff]"
                    />
                </div>

                {/* Are you an Agency? */}
                <div className="text-black mb-5">
                    <span className="block text-sm font-medium mb-1">
                        Are you an Agency?<span className="text-red-500">*</span>
                    </span>
                    <div className="flex gap-4 mt-1">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={formData.isAgency === "yes"}
                                onChange={handleChange}
                                className="accent-[#8000ff] hover:cursor-pointer"
                                required
                            />
                            <span className="ml-2 text-sm text-black">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="isAgency"
                                value="no"
                                checked={formData.isAgency === "no"}
                                onChange={handleChange}
                                className="accent-[#8000ff] hover:cursor-pointer"
                                required
                            />
                            <span className="ml-2 text-sm text-black">No</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#8000ff] hover:bg-[#7000e0] hover:cursor-pointer text-white font-semibold py-2 rounded-md transition"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default Register;