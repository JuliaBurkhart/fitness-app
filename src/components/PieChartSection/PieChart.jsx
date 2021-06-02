import React from "react";
import styled from 'styled-components';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';


const PieContainer = styled.div`
width: 500px;
height: 200px;
`

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#D2DDD0', '#BBC8B9', '#939C91', '#7A8778'];

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };




/* eslint-disable react/prop-types */

function MyPieChart() {

    return (
  <PieContainer>
 <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend 
          width='40%'
          verticalAlign="middle" 
          align="right" 
          layout="vertical" 
          iconType="circle"
          iconSize={14}
           />
        </PieChart>
      
      </ResponsiveContainer>  
   
       </PieContainer>
    )
}

export default MyPieChart;