import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2';
import axios from 'axios';

export default function CreatePlant() {
  const [plantName, setPlantName] = useState('');
  const [temperature, setTemperature] = useState('');
  const [soilHumidity, setSoilHumidity] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  // Generate random 4-digit ID
  const generateRandomId = () => {
    return Math.floor(1000 + Math.random() * 9000); // Number between 1000-9999
  };

  // Check if ID is unique in the database
  const isIdUnique = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/flowerList?id=${id}`);
      return response.data.length === 0; // Returns true if ID is unique
    } catch (error) {
      console.error('Error checking unique ID:', error);
      return false;
    }
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!plantName || !temperature || !soilHumidity) {
      Swal.fire({
        title: "لطفاً تمام اطلاعات را وارد کنید",
        text: "برای ثبت اطلاعات به تمامی شاخص ها نیازمندیم",
        icon: "warning",
        showConfirmButton: false,
      });
      return;
    }

    let uniqueId;
    let isUnique = false;

    // Generate unique ID with retry logic
    while (!isUnique) {
      uniqueId = generateRandomId();
      isUnique = await isIdUnique(uniqueId);
    }

    // Prepare plant data object
    const plantData = {
      id: uniqueId, // Unique identifier
      name: plantName,
      image: "/images/pngtree-indoor-plant-flowerpot-png-image_11669796.png", // Default image path
      Temperature: temperature,
      Humidity: soilHumidity,
    };

    try {
      // Submit data to JSON server
      const response = await axios.post('http://localhost:4000/flowerList', plantData);
      console.log('Response:', response.data);

      // Show success notification
      Swal.fire({
        title: "ثبت موفق",
        text: "گیاه با موفقیت ثبت شد!",
        icon: "success",
        confirmButtonText: "باشه",
      }).then(() => {
        // Redirect to profile page
        navigate('/profile');
      });
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "خطا",
        text: "خطایی در ثبت گیاه رخ داد!",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };

  return (
    <div className='p-4 max-w-2xl mx-auto'>
      <h2 className='text-right text-2xl my-4 text-[#116B53] font-semibold'>
        ایجاد یک گیاه جدید
      </h2>
      
      <div className='space-y-4'>
        <div>
          <label className='block text-right text-[#116B53] mb-2'>
            نام گیاه
          </label>
          <input 
            type='text'
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] focus:ring-2 focus:ring-[#116B53]'
            placeholder='نام را وارد کنید'
          />
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-right text-[#116B53] mb-2'>
              دمای مطلوب (°C)
            </label>
            <input
              type='number'
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] focus:ring-2 focus:ring-[#116B53]'
              placeholder='دمای را وراد کنید'
            />
          </div>

          <div>
            <label className='block text-right text-[#116B53] mb-2'>
              رطوبت خاک (%)
            </label>
            <input
              type='number'
              value={soilHumidity}
              onChange={(e) => setSoilHumidity(e.target.value)}
              className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] focus:ring-2 focus:ring-[#116B53]'
              placeholder='رطوبت را وارد کیند'
            />
          </div>
        </div>

        <button 
          onClick={handleSubmit}
          className='bg-[#116B53] text-[#EED3B1] w-full rounded-xl py-3 text-xl font-medium hover:bg-[#0d5945] transition-colors mt-8'
        >
          ثبت
        </button>
      </div>
    </div>
  );
}