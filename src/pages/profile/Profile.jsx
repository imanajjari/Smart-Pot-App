import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import { CardItem } from '../../components';

export default function Profile() {
    const [profile, setProfile]=useState({});
  useEffect(()=>{
    axios.get(`https://goldan-server.liara.run/profile`)
    .then(function (res) {   
        setProfile(res.data)
    })
  },[])
  return (
    <div className=' relative scrollbar-hide overflow-hidden h-[80vh]'>
        <div className='flex justify-center py-2'>
            <div className='text-right px-2 text-[#116B53] text-lg font-medium'><h1 className='text-3xl font-bold'>{profile.firstName} {profile.lastName}</h1>
            {
                profile.phone?<p>{profile.phone}</p>:
                <p>هنوز شماره تلفن خود را ثبت نکرده اید ؟</p>
            }</div>
            <div className='flex justify-center items-center'>
            {
                profile.image?
                <div className='bg-[#EED3B1] rounded-full p-1 border-2 border-[#f4ca99]'>
                    <img src={process.env.PUBLIC_URL+profile.image} alt="profile image" className='w-full rounded-full'/>
                </div>
                :
                <div className='bg-[#EED3B1] rounded-full p-1 border-2 border-[#f4ca99]'>
                <CgProfile style={{ color: "#116B53", fontSize: "3rem" }} />
                </div>
            }
            </div>
        </div>
        <div>
            <CardItem link='/' text={'تغییر پروفایل'}/>
            <CardItem link='/' text={'تغییر پروفایل'}/>
            <CardItem link='/' text={'تغییر پروفایل'}/>
            <CardItem link='/' text={'تغییر پروفایل'}/>
        </div>
        <div className='overflow-hidden'>
            <img src={process.env.PUBLIC_URL+"/images/гілочка 2.png"} alt="" className='w-[75%] absolute inset-[-15%] inset-y-[50%]'/>
        </div>
    </div>
  )
}
