import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { profile, logout } from '../../store';
import { useDispatch } from 'react-redux';

export default function EditProfile() {
  const dispatch = useDispatch()
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:4000/profile');
        if (response.data) {
          setProfileData(response.data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(profile({...profileData}))
    if (!profileData.firstName || !profileData.lastName || !profileData.phone) {
      Swal.fire({
        title: "لطفاً تمام اطلاعات را وارد کنید",
        text: "تمام فیلدهای ضروری باید پر شوند",
        icon: "warning",
        showConfirmButton: false,
        customClass:{
            confirmButton :'swal-confirm-button'
        },
        confirmButtonColor: '#116B53',
      });
      return;
    }

    try {
      await axios.put('http://localhost:4000/profile', profileData);
      
      Swal.fire({
        title: "پروفایل با موفقیت به‌روزرسانی شد!",
        icon: "success",
        confirmButtonText: "باشه",
        customClass:{
            confirmButton :'swal-confirm-button'
        },
        confirmButtonColor: '#116B53',
      }).then(() => {
        navigate('/profile');
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      Swal.fire({
        title: "خطا در به‌روزرسانی",
        text: "مشکلی در ذخیره تغییرات پیش آمد",
        icon: "error",
        confirmButtonText: "باشه",
        customClass:{
            confirmButton :'swal-confirm-button'
        },
        confirmButtonColor: '#6B1111FF',
      });
    }
  };

  return (
    <div className='p-4 w-full'> {/* تغییر اصلی اینجا انجام شده */}
      <h2 className='text-right text-2xl my-4 text-[#116B53] font-semibold'>
        ویرایش پروفایل
      </h2>
      
      <form className='space-y-4 w-full' onSubmit={handleSubmit}>
        <div className='w-full'>
          <label className='block text-right text-[#116B53] mb-2'>
            نام
          </label>
          <input 
            type='text'
            name='firstName'
            value={profileData.firstName}
            onChange={handleInputChange}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] focus:ring-2 focus:ring-[#116B53]'
            placeholder='نام خود را وارد کنید'
          />
        </div>

        <div className='w-full'>
          <label className='block text-right text-[#116B53] mb-2'>
            نام خانوادگی
          </label>
          <input 
            type='text'
            name='lastName'
            value={profileData.lastName}
            onChange={handleInputChange}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] focus:ring-2 focus:ring-[#116B53]'
            placeholder='نام خانوادگی خود را وارد کنید'
          />
        </div>

        <div className='w-full'>
          <label className='block text-right text-[#116B53] mb-2'>
            شماره تماس
          </label>
          <input
            type='tel'
            name='phone'
            value={profileData.phone}
            onChange={handleInputChange}
            className='bg-[#EED3B1] p-3 rounded-xl w-full text-right placeholder-[#7fa99f] focus:ring-2 focus:ring-[#116B53]'
            placeholder='شماره تماس خود را وارد کنید'
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