import React from 'react';  

const Sidebar = ({ isSidebarOpen, toggleSidebar, handleCategory, logout, category }) => {
    return (
        <>
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 w-64 bg-gray-800 text-white h-screen p-4 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 transition-transform duration-300 ease-in-out z-20 md:static md:flex-shrink-0`}
            >
                <h2 className="text-xl font-bold">EduTech+ Dashboard</h2>
                <nav className="mt-4">
                    <ul className='flex flex-col justify-start gap-5'>
                        <li><a href="#my-courses" className={`${category === "mycourses" ? "active" : ""} category`} onClick={() => handleCategory("mycourses")}>My Courses</a></li>
                        <li><a href="#analytics" className={`${category === "analytics" ? "active" : ""} category`} onClick={() => handleCategory("analytics")}>Analytics</a></li>
                        <li><a href="#account-settings" className={`${category === "settings" ? "active" : ""} category`} onClick={() => handleCategory("settings")}>Account Settings</a></li>
                        <li>
                            <button onClick={logout} className="block p-2 hover:font-bold duration-150 w-full text-left">Logout</button>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* when sidebar is open on small screens */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
