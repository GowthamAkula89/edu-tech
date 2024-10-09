import React, { useEffect, useState } from 'react';
import { useAuth } from '../Utils/authContext';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [courses, setCourses] = useState([]);


    const fetchCourses = async () => {
        try {
            const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.coursera.org/api/courses.v1'));
            if (!response.ok) throw new Error('Failed to fetch courses');
            
            const data = await response.json();
            const allCourses = JSON.parse(data.contents).elements;
            const courses = allCourses.slice(5, 11).map((course, index) => ({
                id: index + 1,
                title: course.name,
            }));
            
            setCourses(courses);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="flex">
            <aside className="w-64 bg-gray-800 text-white h-screen p-4">
                <h2 className="text-xl font-bold">EduTech+ Dashboard</h2>
                <nav className="mt-4">
                    <ul className='flex flex-col justify-start'>
                        <li><a href="#my-courses" className="block py-2 hover:bg-gray-700">My Courses</a></li>
                        <li><a href="#analytics" className="block py-2 hover:bg-gray-700">Analytics</a></li>
                        <li><a href="#account-settings" className="block py-2 hover:bg-gray-700">Account Settings</a></li>
                        <li>
                            <button onClick={logout} className="block py-2 hover:bg-gray-700 w-full text-left">Logout</button>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Welcome, {user?.displayName}</h1>
                <section className="mt-4" id="my-courses">
                    <h2 className="text-xl font-semibold">My Courses</h2>
                    <div className="bg-gray-100 p-4 rounded-md mt-2">
                        {loading && <p>Loading courses...</p>}
                        {error && <p className="text-red-500">{error}</p>}
                        {courses.length > 0 ? (
                            courses.map(course => (
                                <div key={course.id} className="border-b border-gray-300 py-2 flex justify-between items-center">
                                    <span>{course.title}</span>
                                    <div>
                                        <button className="mr-2 text-blue-600 hover:underline">View</button>
                                        <button className="mr-2 text-yellow-600 hover:underline">Edit</button>
                                        <button className="text-red-600 hover:underline">Delete</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No courses available</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
