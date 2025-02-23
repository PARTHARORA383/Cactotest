import Metrics from "../Components/Metrics";
import Charts from "../Components/Charts";
import Budget from "../Components/Budget";
import Profile from "../Components/Profile";
const Dashboard = () => {
    return (
        <div className="w-full h-full">
          
            <nav className="w-full bg-white shadow-md p-4 mb-6">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-2xl font-bold text-teal-800 mb-4 sm:mb-0">
                        Hours
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-teal-800 font-medium">Dashboard</a>
                        <a href="#" className="text-gray-600 hover:text-teal-800 font-medium">Projects</a>
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center">
                                <span className="text-white text-sm">JS</span>
                            </div>
                            <span className="text-gray-600">John Smith</span>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="flex flex-col lg:flex-row max-w-screen mx-auto w-full h-auto lg:h-[600px] gap-6 ml-6">
             
            <div className="flex flex-col justify-start items-start h-full w-full lg:w-2/3">
              <div className="w-full px-4 lg:ml-4">
                <Metrics/>
              </div>
              <div className="w-full">
                <Charts/>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <Profile/>
            </div>

            </div>
            <div className="w-full ">
              <Budget/>
            </div>
        </div>
    )
} 

export default Dashboard;
