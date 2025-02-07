import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaTemperatureHigh} from 'react-icons/fa';
import { MdBatteryCharging90 , MdOutlineAreaChart  } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import {DonutChart, BoxDonutChart} from './../../components'
import './home.css'
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {

  return (
    <div>
        <img src={process.env.PUBLIC_URL+"/mzfKPz6nZRIHs4shuKKwpDvOHBXqDfV_vk3y6evWiWE=-min.png"} alt="image of plan" className='animate-bounce'/>
        <div className='grid grid-cols-2 gap-4 p-4'>
            <BoxDonutChart>
                <DonutChart temperature={10} icon={<FaTemperatureHigh style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'°C'}></DonutChart>
            </BoxDonutChart>
            <BoxDonutChart>
                <DonutChart temperature={80} icon={<MdBatteryCharging90 style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'%'}></DonutChart>
            </BoxDonutChart>
            <BoxDonutChart>
                <DonutChart temperature={40} icon={<IoIosWater style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'°Cc'}></DonutChart>
            </BoxDonutChart>
            <BoxDonutChart>
                <DonutChart temperature={30} icon={<MdOutlineAreaChart style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'?'}></DonutChart>
            </BoxDonutChart>
        
        </div>
    </div>
  );
};

export default Home;

