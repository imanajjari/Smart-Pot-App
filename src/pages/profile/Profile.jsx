import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import { CardItem } from '../../components';
import { useSelector } from 'react-redux';

export default function Profile() {
    const selector = useSelector((state)=> state.user)
    const [profile, setProfile]=useState({});
    const [plant, setPlant]=useState({});
    
  useEffect(()=>{
    if(selector.firstName & selector.firstNam & selector.firstNam){
        setProfile(...selector)
    }else{
        axios.get(`http://localhost:4000/profile`)
        .then(function (res) {   
            setProfile(res.data)
        })
    }
    axios.get(`http://localhost:4000/flower`)
    .then(function (res) {   
        setPlant(res.data)
    })
  },[])
  return (
    <div className=' relative scrollbar-hide overflow-hidden h-[80vh] lg:h-[90vh] text-right'>
        <div className='flex justify-end py-2 px-4'>
            <div className='text-right px-2 text-[#116B53] text-lg font-medium'><h1 className='text-3xl font-bold'>{profile.firstName} {profile.lastName}</h1>
            {
                profile.phone?<p>{profile.phone}</p>:
                <p>هنوز شماره تلفن خود را ثبت نکرده اید ؟</p>
            }</div>
            <div className='flex justify-center items-center'>
            {
                profile.image?
                <div className='bg-[#EED3B1] rounded-full p-1 border-2 border-[#f4ca99]'>
                    <img src={process.env.PUBLIC_URL+profile.image} alt="profile" className='w-full rounded-full '/>
                </div>
                :
                <div className='bg-[#EED3B1] rounded-full p-1 border-2 border-[#f4ca99]'>
                <CgProfile style={{ color: "#116B53", fontSize: "3rem" }} />
                </div>
            }
            </div>
        </div>
        <div>
            <CardItem link='/edit-profile' text={'تغییر پروفایل'}/>
            <CardItem link='/createP-plant' text={'ساخت گیاه'}/>
            {plant.id > 6 && (<CardItem link='/edit-plant' text={'تغییر تنظیمات گیاه'}/>)}
            
            {/* <CardItem link='/' text={'تغییر پروفایل'}/> */}
        </div>
        <div className='overflow-hidden'>
            <img src={process.env.PUBLIC_URL+"/images/гілочка 2.png"} alt="" className='w-[75%] absolute inset-[-15%] inset-y-[50%] '/>
        </div>
    </div>
  )
}
