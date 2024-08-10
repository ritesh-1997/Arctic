"use client"
import { Doughnut } from 'react-chartjs-2';
import  {Chart as ChartJS, ArcElement,Tooltip, Legend, plugins } from "chart.js";
import { plugin } from 'postcss';

ChartJS.register(ArcElement,Tooltip,Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {label:'Banks',data:[1250,2500,3750], backgroundColor:['#0747B612','#2265d8','#2f91fa']}
            ],
        labels:['Banks 1','Banks 2','Banks 3']
    }
  return <Doughnut data={data}
  options={{
    cutout:'60%',
    plugins:{
        legend: { display:false }
            }       
        }}/>;

  
}

export default DoughnutChart;
