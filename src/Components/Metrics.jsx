const Metrics = () => {
    return (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 cursor-pointer h-[150px] transform transition-all duration-300 hover:scale-105 hover:text-white animate-fade-in" >
                
                <p className="text-3xl md:text-4xl font-bold">5</p>
                <p className="text-base md:text-lg font-medium text-center">Total Projects</p>
              </div>

              <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 cursor-pointer h-[150px] transform transition-all duration-300 hover:scale-105 hover:text-white animate-fade-in" >
                
                <p className="text-3xl md:text-4xl font-bold">1</p>
                <p className="text-base md:text-lg font-medium text-center">Completed </p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 cursor-pointer h-[150px] transform transition-all duration-300 hover:scale-105 hover:text-white animate-fade-in" >
                
                <p className="text-3xl md:text-4xl font-bold">3</p>
                <p className="text-base md:text-lg font-medium text-center">Ongoing </p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 cursor-pointer h-[150px] transform transition-all duration-300 hover:scale-105 hover:text-white animate-fade-in" >
                
                <p className="text-3xl md:text-4xl font-bold">1</p>
                <p className="text-base md:text-lg font-medium text-center">Deleted </p>
              </div>
              <div className="bg-white shadow-lg rounded-md p-4 flex flex-col justify-center items-center hover:bg-gradient-to-br hover:from-teal-600 hover:to-teal-800 cursor-pointer h-[150px] transform transition-all duration-300 hover:scale-105 hover:text-white animate-fade-in" >
                
                <p className="text-3xl md:text-4xl font-bold">5</p>
                <p className="text-base md:text-lg font-medium text-center">Employees</p>
              </div>
            
            </div>
        </div>
    )
} 

export default Metrics;
