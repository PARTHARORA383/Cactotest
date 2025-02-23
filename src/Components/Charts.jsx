import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend } from 'recharts';

const lineData = [
  { date: '19 June', revenue: 500 },
  { date: '20 June', revenue: 2000 },
  { date: '21 June', revenue: 3000 },
  { date: '22 June', revenue: 4000 },
  { date: '23 June', revenue: 5000 },
  { date: '24 June', revenue: 6000 },
  { date: '25 June', revenue: 6500 },
];

const pieData = [
  { name: 'Over Budget', value: 10, color: '#FF4C4C' },
  { name: 'On Budget', value: 33, color: '#4A90E2' },
  { name: 'Under Budget', value: 44, color: '#4CAF50' },
];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 pt-10  pr-2  ml-4 gap-5">
   
      <div className="col-span-1 md:col-span-3 w-[570px] bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Total Revenue</h2>
        <LineChart width={510} height={250} data={lineData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#4A90E2" strokeWidth={2} />
        </LineChart>
      </div>

      <div className=" col-span-1 md:col-span-2 bg-white p-4 rounded-lg shadow-lg w-[370px] flex justify-center items-center">
        <h2 className="text-lg font-semibold mb-4">Budget</h2>
        <PieChart width={250} height={250}>
          <Pie data={pieData} dataKey="value" outerRadius={80} fill="#8884d8" label>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Charts;
