import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
    const { setUser } = useAppContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        // Simulated login
        setUser({ name: "John Doe", email });
        navigate("/user-data");
    };

    return (
        <div className="h-screen bg-gray-100 flex items-center justify-center overflow-hidden">
            <div className="w-[375px] h-full bg-white border border-gray-300 px-6 py-10 flex flex-col text-left">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                    Signin to your <br /> PopX account
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipiscing elit,
                </p>

                <div className="mb-4">
                    <label className="text-sm text-violet-600 font-medium mb-1 block">
                        Email Address
                    </label>
                    <input
                        type="email"
                        autoComplete="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white text-black"
                    />
                </div>

                <div className="mb-6">
                    <label className="text-sm text-violet-600 font-medium mb-1 block">
                        Password
                    </label>
                    <input
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white text-black"
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full py-3 rounded-md text-white bg-[#CFCFCF] font-semibold text-base hover:bg-[#bfbfbf] hover:cursor-pointer transition"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;