# EduTech+ Web Application

## Overview
**EduTech+** is a responsive and dynamic educational platform built with React, Tailwind CSS, and OAuth authentication. It features a landing page for general users and a personalized dashboard for authenticated users. The dashboard integrates dynamic data from a public API and offers a course management interface.

## Features

### 1. **Landing Page**:
- **Navigation Bar**: Links to Home, About, Courses, and Contact sections.
- **Hero Section**: Engaging headline with a call-to-action (CTA) button.
- **Features Section**: Highlights three key features of EduTech+.
- **Footer**: Placeholder links for social media, terms of service, and privacy policy.

### 2. **Dashboard** (Authenticated Users Only):
- **OAuth Authentication**: Sign in using Google OAuth for secure access.
- **Personalized Greeting**: Users are greeted by name after authentication.
- **Sidebar Navigation**: Links to My Courses, Analytics, Account Settings, etc.
- **Dynamic API Integration**: Fetches public API data and displays it on the dashboard.
- **Course Management**: UI elements to view, edit, and delete courses.
- **Analytics Section**: Displays mock charts and data visualizations.

## Technology Stack
- **Frontend**: React (JavaScript, JSX)
- **Styling**: Tailwind CSS for modern, responsive UI
- **OAuth**: Google OAuth for secure user authentication
- **API Integration**: Public API to fetch dynamic data for the dashboard
- **Charts**: Mock data visualizations using libraries like Chart.js or Recharts

## Getting Started

### Prerequisites
To run this project locally, you will need:
- **Node.js** (version 14 or higher)
- **npm** for managing dependencies

### Installation

1. **Clone the repository**:
   git clone https://github.com/your-repo/edutech-plus.git
2. **Navigate**:
    cd edutech-plus
3. **Install dependencies**:
    npm install
4. **Run Application**:
    npm start
