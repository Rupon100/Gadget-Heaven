import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const data = [
        {
          name: 'Headphones',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Smart TV',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Gaming Mouse',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Smartwatch',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Laptop Backpack',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Water Bottle',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Portable Charger',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Desk Lamp',
          uv: 490,
          pv: 4000,
          amt: 1300,
        },
        {
          name: 'Office Chair',
          uv: 690,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Light Bulb',
          uv: 1490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
        <div>
            <div className="bg-purple-600 text-white p-10 text-center space-y-4">
                <h2 className="text-4xl font-semibold">Statistics</h2>
                <p className="text-gray-200 w-4/5 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="max-w-5xl mx-auto p-6 space-y-4">
               <h2 className="text-2xl font-semibold">Statistics</h2>
              
               <div style={{ width: '100%' }} className='p-6'>
                        <ResponsiveContainer width="100%" height={400}>
                          <AreaChart
                            width={500}
                            height={300}
                            data={data}
                            syncId="anyId"
                            margin={{
                              top: 10,
                              right: 30,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                          </AreaChart>
                        </ResponsiveContainer>
                       
                    </div>
               </div>
               <p className='text-center font-semibold text-lg p-2 border bg-purple-600 text-white'>uv - sell</p>
        </div>
    );
};

export default Statistics;