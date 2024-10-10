import React, { useState } from 'react';
import { useAuth } from '../Utils/authContext';
import CourseList from '../Components/courseList';
import Sidebar from '../Components/sideBar';
import { FiMenu, FiX } from 'react-icons/fi';
import Analytics from '../Components/analytics';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [category, setCategory] = useState("mycourses");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCategory = (val) => {
        setCategory(val);
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                handleCategory={handleCategory}
                logout={logout}
                category={category}
            />

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Menu icon for smaller screens */}
                <div className="md:hidden">
                    <button onClick={toggleSidebar} className="p-2 text-gray-700">
                        {isSidebarOpen ? (
                            <FiX className="w-6 h-6 text-gray-800" />
                        ) : (
                            <FiMenu className="w-6 h-6 text-gray-800" />
                        )}
                    </button>
                </div>

                <h1 className="text-2xl font-bold">Welcome, {user?.displayName}</h1>
                {category === "mycourses" && 
                <section className="mt-4" id="my-courses">
                    <h2 className="text-xl font-semibold">My Courses</h2>
                    <CourseList />
                </section>}
                {category === "analytics" && <Analytics />}
            </main>
        </div>
    );
};

export default Dashboard;
