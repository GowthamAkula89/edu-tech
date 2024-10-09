import React, { useEffect, useState } from 'react';

const CourseList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [courses, setCourses] = useState([]);
    const [editingCourseId, setEditingCourseId] = useState(null);
    const [editingCourseTitle, setEditingCourseTitle] = useState('');

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

    const handleEditClick = (course) => {
        setEditingCourseId(course.id);
        setEditingCourseTitle(course.title);
    };

    const handleDeleteClick = (courseId) => {
        const updatedCourses = courses.filter(course => course.id !== courseId);
        setCourses(updatedCourses);
    };

    const handleSaveEdit = () => {
        if (editingCourseId) {
            const updatedCourses = courses.map(course =>
                course.id === editingCourseId ? { ...course, title: editingCourseTitle } : course
            );
            setCourses(updatedCourses);
            setEditingCourseId(null);
            setEditingCourseTitle('');
        }
    };

    return (
        <div className="bg-gray-100 p-4 rounded-md mt-2">
            {loading && <p>Loading courses...</p>}
            {courses.length > 0 ? (
                courses.map(course => (
                    <div key={course.id} className="border-b border-gray-300 py-2 flex justify-between items-center">
                        {editingCourseId === course.id ? (
                            <div className="py-2 flex justify-between items-center w-full">
                                <input
                                    type="text"
                                    value={editingCourseTitle}
                                    onChange={(e) => setEditingCourseTitle(e.target.value)}
                                    className="border rounded p-1 w-4/5"
                                />
                                <button onClick={handleSaveEdit} className="ml-2 text-green-600 hover:underline">Save</button>
                            </div>
                        ) : (
                            <div className='flex md:flex-row flex-col w-full'>
                                <span className='w-full '>{course.title}</span>
                                <div className='flex  gap-5'>
                                    <button className="mr-2 text-gray-600 hover:underline">View </button> 
                                    <button onClick={() => handleEditClick(course)} className="mr-2 text-yellow-600 hover:underline"> Edit </button> 
                                    <button onClick={() => handleDeleteClick(course.id)} className="text-red-600 hover:underline"> Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No courses available</p>
            )}
        </div>
    );
};

export default CourseList;
