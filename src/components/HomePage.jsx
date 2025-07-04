import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-[375px] mx-auto min-h-screen flex flex-col justify-end px-6 py-10 bg-white  shadow-md">
                <div>
                    <h1 className="text-2xl font-bold text-[#1D2939] mb-2">
                        Welcome to PopX
                    </h1>
                    <p className="text-sm text-[#667085] mb-6">
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit,
                    </p>

                    <button
                        className="w-full bg-[#6C25FF] text-white text-sm font-semibold py-3 hover:cursor-pointer rounded-md mb-3"
                        onClick={() => navigate('/Register')}
                    >
                        Create Account
                    </button>

                    <button
                        className="w-full bg-[#ECE6F6] text-black text-sm hover:cursor-pointer font-semibold py-3 rounded-md"
                        onClick={() => navigate('/login')}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>




    );
}