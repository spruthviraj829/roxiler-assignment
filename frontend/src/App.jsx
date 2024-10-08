import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import BarChart from '../components/BarChart'
import { fetchBarChartData ,fetchMonthData ,fetchPieChartData,fetchMonthStatics } from './api';
import MonthSelector from '../components/MonthSelect';
import ProductTable from '../components/Products';
import PieChart from '../components/PieChart';
import Statistics from '../components/Statictic';

function App() {
const [chartData , setChartData] = useState([]);
const [month , setMonth] = useState(10);
const [monthData, setMonthData] = useState([]);
const [pieData , setPieData] = useState([]);
const [statictics , setStatictics] = useState({}) ;

const getAllData = async()=>{
    const monthData = await fetchMonthData(month);
     const barChartData = await fetchBarChartData(month);
     const pieData = await fetchPieChartData(month);
     const statictics = await fetchMonthStatics(month);
        setMonthData(monthData);
        setChartData(barChartData);
        setPieData(pieData);
        setStatictics(statictics)
        console.log(statictics);
  }
  useEffect(()=>{
       getAllData();
        // fetchBarChartData() ;
  }, [month])
 
 
  return (
    <div className='w-full'>

      <div className='fixed bg-white w-full mb-10 top-0'>
      <MonthSelector setSelectedMonth={setMonth} selectedMonth={month}  />
      </div>
     
       <div className=' flex w-full mt-24'>
           <div className='w-[60%]'>
              <ProductTable products={monthData}/>
           </div>
          
          <div className='w-[50%] mb-24  mt-10 flex flex-col'>

            <div className='flex gap-12 justify-between border-4  mx-2 p-2 mb-2'>
             <Statistics statistics={statictics}/>
            <PieChart  monthData ={pieData}/>
            </div>
             <div className='border-4  mx-2 p-2'>
            <BarChart  chartData= {chartData} /> 
             </div>
          </div>
       </div>
       
    </div>
  )
}

export default App