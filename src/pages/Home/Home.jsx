import React , {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaTemperatureHigh} from 'react-icons/fa';
import { MdBatteryCharging90 , MdOutlineAreaChart  } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import {DonutChart, BoxDonutChart} from './../../components'
import axios from 'axios';
import './home.css'
ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
    const [flowerStatu, setFlowerStatu] = useState([]);
    
      useEffect(() => {
            axios
            .get("http://localhost:4000/flowerStatu")
            .then((res) => {
                setFlowerStatu(res.data);
            })
            .catch((err) => {
              console.error("Error fetching flower list:", err.response?.data || err.message);
            });
      }, []);
  return (
    <div>
        <img src={process.env.PUBLIC_URL+"/mzfKPz6nZRIHs4shuKKwpDvOHBXqDfV_vk3y6evWiWE=-min.png"} alt="plan" className='animate-bounce'/>
        <div className='grid grid-cols-2 gap-4 p-4'>
            <BoxDonutChart>
                <DonutChart temperature={flowerStatu.Temperature} icon={<FaTemperatureHigh style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'°C'}></DonutChart>
            </BoxDonutChart>
            <BoxDonutChart>
                <DonutChart temperature={flowerStatu.Battery} icon={<MdBatteryCharging90 style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'%'}></DonutChart>
            </BoxDonutChart>
            <BoxDonutChart>
                <DonutChart temperature={flowerStatu.water} icon={<IoIosWater style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'°Cc'}></DonutChart>
            </BoxDonutChart>
            <BoxDonutChart>
                <DonutChart temperature={flowerStatu.Humidity} icon={<MdOutlineAreaChart style={{ color: "#EED3B1", fontSize: "2.4rem" }}/>} unitOfMeasurement={'?'}></DonutChart>
            </BoxDonutChart>
        
        </div>
    </div>
  );
};

export default Home;

