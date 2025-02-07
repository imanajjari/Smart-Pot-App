import React from 'react'
import { Link } from 'react-router-dom'
export function CardItem({link , text}) {
  return (
    <div className='bg-[#EED3B1] p-2 rounded-xl m-4 text-xl text-[#116B53] shadow-xl'>
        <Link to={link}>{text}</Link>
    </div>
  )
}
