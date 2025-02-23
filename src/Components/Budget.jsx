import lantern from "../assets/lantern.jpg";


const Budget = () => {
  
    return (
        <div>
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center space-y-4 md:space-y-0 md:space-x-2 ml-4">
            <p className="text-2xl font-medium">Budget Status</p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-start md:items-center w-full">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                <button className="w-full md:w-auto bg-gradient-to-r from-teal-600 to-teal-800 hover:bg-gradient-to-br hover:scale-105 transition-all text-white px-4 py-2 rounded-lg shadow">
                  Add New Project
                </button>
                
                <button className="w-full md:w-auto bg-gradient-to-r from-teal-600 to-teal-800 hover:bg-gradient-to-br hover:scale-105 transition-all text-white px-4 py-2 rounded-lg shadow">
                  Download Report
                </button>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
                <select className="w-full md:w-auto bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>

                <input 
                  type="date"
                  className="w-full md:w-auto bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {/* Insurance app */}
            <div className="w-full flex flex-col justify-start items-start bg-white hover:bg-teal-600 hover:text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl font-medium">Insurance App</p>
                  <p className="text-sm opacity-75">verti</p>
                </div>
                <div>
                  <p><img src={lantern} alt="budget" className="w-7 h-7 rounded-full" /></p>
                </div>
              </div>

              <div className="w-full flex flex-col justify-start items-start space-y-2 mt-4">
                <div className="w-full flex justify-between items-center">
                  <p>Total Budget -</p>
                  <p>70,000$</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>Profitablity</p>
                  <p className="text-red-500 group-hover:text-red-300">-2,500 $</p>
                </div>
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full mt-4">
                <div className="w-full h-full bg-red-500 rounded-full"></div>
              </div>
              
              <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
                <p className="text-xs opacity-75">Actual Hours</p>
                <p className="text-xs opacity-75">100</p>
                <p className="text-sm text-red-500 group-hover:text-red-300">100 hours above budget</p>
              </div>
            </div>

            {/* AR Website */}
            <div className="w-full flex flex-col justify-start items-start bg-white hover:bg-teal-600 hover:text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl font-medium">AR Website</p>
                  <p className="text-sm opacity-75">Madrid</p>
                </div>
                <div>
                  <p><img src={lantern} alt="budget" className="w-7 h-7 rounded-full" /></p>
                </div>
              </div>

              <div className="w-full flex flex-col justify-start items-start space-y-2 mt-4">
                <div className="w-full flex justify-between items-center">
                  <p>Total Budget -</p>
                  <p>70,000$</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>Profitablity</p>
                  <p className="text-red-500 group-hover:text-red-300">-2,500 $</p>
                </div>
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full mt-4">
                <div className="w-full h-full bg-red-500 rounded-full"></div>
              </div>
              
              <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
                <p className="text-xs opacity-75">Actual Hours</p>
                <p className="text-xs opacity-75">100</p>
                <p className="text-sm text-red-500 group-hover:text-red-300">100 hours above budget</p>
              </div>
            </div>

            {/* Neo Website */}
            <div className="w-full flex flex-col justify-start items-start bg-white hover:bg-teal-600 hover:text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl font-medium">Neo Website</p>
                  <p className="text-sm opacity-75">Bankia</p>
                </div>
                <div>
                  <p><img src={lantern} alt="budget" className="w-7 h-7 rounded-full" /></p>
                </div>
              </div>

              <div className="w-full flex flex-col justify-start items-start space-y-2 mt-4">
                <div className="w-full flex justify-between items-center">
                  <p>Total Budget -</p>
                  <p>70,000$</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>Profitablity</p>
                  <p className="text-red-500 group-hover:text-red-300">4,000 $</p>
                </div>
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full mt-4">
                <div className="w-1/2 h-full bg-yellow-600 rounded-full"></div>
              </div>
              
              <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
                <p className="text-xs opacity-75">Actual Hours</p>
                <p className="text-xs opacity-75">100</p>
                <p className="text-sm text-red-500 group-hover:text-red-300">1000 sold hours</p>
              </div>
            </div>

            {/* VR Website */}
            <div className="w-full flex flex-col justify-start items-start bg-white hover:bg-teal-600 hover:text-white p-4 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col justify-start items-start">
                  <p className="text-xl font-medium">VR Website</p>
                  <p className="text-sm opacity-75">Barca</p>
                </div>
                <div>
                  <p><img src={lantern} alt="budget" className="w-7 h-7 rounded-full" /></p>
                </div>
              </div>

              <div className="w-full flex flex-col justify-start items-start space-y-2 mt-4">
                <div className="w-full flex justify-between items-center">
                  <p>Total Budget -</p>
                  <p>70,000$</p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p>Profitablity</p>
                  <p className="text-red-500 group-hover:text-red-300">4,000 $</p>
                </div>
              </div>

              <div className="w-full h-4 bg-gray-200 rounded-full mt-4">
                <div className="w-full h-full bg-green-700 rounded-full"></div>
              </div>
              
              <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-2 space-y-2 sm:space-y-0 sm:space-x-3">
                <p className="text-xs opacity-75">Actual Hours</p>
                <p className="text-xs opacity-75">100</p>
                <p className="text-sm opacity-75">2000 sold hours</p>
              </div>
            </div>
          </div>

        </div>
    )
} 

export default Budget;  
