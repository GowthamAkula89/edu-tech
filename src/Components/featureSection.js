const FeaturesSection = () => {
    return (
      <div className="py-20 bg-gray-100 px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600">Key Features</h2>
        <p className="text-center text-gray-600 mt-4">
          Discover the top features of EduTech+ that make learning engaging and flexible for everyone.
        </p>
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
          <div className="key-feature bg-blue-500" >Course</div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Expert-Curated Courses</h3>
            <p className="text-gray-600">
              High-quality courses created by industry experts to help you stay ahead in your career or studies.
            </p>
          </div>
  
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="key-feature bg-red-500" >Interactive</div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Interactive Learning</h3>
            <p className="text-gray-600">
              Engage in interactive learning experiences with quizzes, assignments, and real-time feedback.
            </p>
          </div>
  
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="key-feature bg-green-500" >Flexible</div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Flexible Schedules</h3>
            <p className="text-gray-600">
              Learn at your own pace with flexible schedules that fit your lifestyle, anytime and anywhere.
            </p>
          </div>
  
        </div>
      </div>
    );
  };
  export default FeaturesSection;