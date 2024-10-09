import Footer from "../Components/footer";
import Header from "../Components/header";
import FeaturesSection from "../Components/featureSection";
const LandingPage = () => {
    return(
        <div>
            <Header/>
            <div className="h-full bg-gray-100 flex flex-col justify-around py-6">
              <div className="flex  flex-col items-center justify-center">
                  <h1 className="text-5xl font-bold">Welcome to EduTech+</h1>
                  <p className="mt-4 text-lg">Your pathway to knowledge and success.</p>
                  <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">Get Started</button>
              </div>
              <FeaturesSection/>
            </div>
            <Footer/>
        </div>
    )
}
export default LandingPage;