import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
    // Mock data for user engagement
    const data = {
        labels: ['March', 'April', 'May', 'June', 'July', 'Aug'],
        datasets: [
            {
                label: 'User Engagement',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Engagement Over Time',
            },
        },
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
            <h2 className="text-xl font-semibold">User Engagement</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Analytics;
