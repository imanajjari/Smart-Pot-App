import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function EditPlant() {
  const navigate = useNavigate();

  const [flowerData, setFlowerData] = useState({});

  // Fetch flower data from the server
  useEffect(() => {
    const fetchFlower = async () => {
      try {
        // Correct URL format using the flower ID
        const response = await axios.get(`http://localhost:4000/flower`);
        if (response.data) {     
          setFlowerData( response.data );
        }
      } catch (error) {
        console.error('Error fetching flower data:', error);
        Swal.fire({
          title: "خطا",
          text: "مشکلی در دریافت اطلاعات گیاه پیش آمد",
          icon: "error",
          confirmButtonText: "باشه",
          confirmButtonColor: '#116B53',
        });
      }
    };
    fetchFlower();
    
  }, []); // Dependency on ID to fetch data when it changes

  const handleInputChange = (e) => {
    setFlowerData({
      ...flowerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!flowerData.name || !flowerData.Temperature || !flowerData.Humidity) {
      Swal.fire({
        title: "لطفاً تمام اطلاعات را وارد کنید",
        text: "تمام فیلدهای ضروری باید پر شوند",
        icon: "warning",
        confirmButtonText: "باشه",
        confirmButtonColor: '#116B53',
      });
      return;
    }

    try {
      // Correct PUT URL format using flower ID
      await axios.put(`http://localhost:4000/flower`, {
        ...flowerData
      });
      await axios.put(`http://localhost:4000/flowerList/${flowerData.id}`, {
        ...flowerData
      });

      Swal.fire({
        title: "گیاه با موفقیت به‌روزرسانی شد!",
        icon: "success",
        confirmButtonText: "باشه",
        confirmButtonColor: '#116B53',
      }).then(() => {
        navigate('/profile'); // Redirect to profile page after success
      });
    } catch (error) {
      console.error('Error updating flower:', error);
      Swal.fire({
        title: "خطا در به‌روزرسانی",
        text: "مشکلی در ذخیره تغییرات پیش آمد",
        icon: "error",
        confirmButtonText: "باشه",
        confirmButtonColor: '#116B53',
      });
    }
  };

  return (
    <div className='p-4 w-full'>
      <h2 className='text-right text-2xl my-4 text-[#116B53] font-semibold'>
        ویرایش گیاه
      </h2>
      
      <form className='space-y-4 w-full' onSubmit={handleSubmit}>
        <div className='w-full'>
          <label className='block text-right text-[#116B53] mb-2'>
            نام گیاه
          </label>
          <input 
            type='text'
            name='name'
            value={flowerData.name}
            onChange={handleInputChange}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f]'
            placeholder='نام گیاه را وارد کنید'
          />
        </div>

        <div className='w-full'>
          <label className='block text-right text-[#116B53] mb-2'>
            دمای مطلوب (°C)
          </label>
          <input
            type='number'
            name='Temperature'
            value={flowerData.Temperature}
            onChange={handleInputChange}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] '
            placeholder='دمای مطلوب را وارد کنید'
          />
        </div>

        <div className='w-full'>
          <label className='block text-right text-[#116B53] mb-2'>
            رطوبت خاک (%)
          </label>
          <input
            type='number'
            name='Humidity'
            value={flowerData.Humidity}
            onChange={handleInputChange}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] '
            placeholder='رطوبت خاک را وارد کنید'
          />
        </div>

        <button 
          type='submit'
          className='bg-[#116B53] text-[#EED3B1] w-full rounded-xl py-3 text-xl font-medium hover:bg-[#0d5945] transition-colors mt-8'
        >
          ذخیره تغییرات
        </button>
      </form>
    </div>
  );
}