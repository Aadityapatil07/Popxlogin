const UserData = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9]">
            <div className="w-[375px] h-[812px] bg-white border border-[#E4E4E7] flex flex-col">
                <div className="px-6 pt-8 pb-4 border-b border-[#E4E4E7]">
                    <h2 className="text-lg font-semibold text-[#1D2939]">Account Settings</h2>
                </div>
                <div className="bg-[#F7F8F9] flex flex-col items-center px-6 py-6 border-b border-dashed border-[#E4E4E7]">
                    <div className="flex items-center w-full">
                        <div className="relative">
                            <img
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Profile"
                                className="w-14 h-14 rounded-full object-cover"
                            />
                            <span className="absolute bottom-0 right-0 bg-[#6C25FF] rounded-full p-1">
                                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </span>
                        </div>
                        <div className="ml-4 flex flex-col">
                            <span className="font-semibold text-[#1D2939]">Marry Doe</span>
                            <span className="text-sm text-[#667085]">Marry@Gmail.Com</span>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-[#1D2939] font-semibold text-left w-full">
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};

export default UserData;