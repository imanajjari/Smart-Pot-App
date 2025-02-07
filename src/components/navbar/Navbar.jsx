import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Menu } from './Menu';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* نوبار اصلی */}
      <div className='h-20 flex justify-center items-center p-1 relative'>
        <div className='bg-[#116B53] w-1 h-1/2 rounded-xl'></div>
        <div className='flex justify-between items-center w-full p-2 mx-1 bg-[#116B53] rounded-xl'>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:opacity-80 transition-opacity"
          >
            {isMenuOpen ? (
              <IoClose style={{ color: "#EED3B1", fontSize: "3rem" }} />
            ) : (
              <IoMenu style={{ color: "#EED3B1", fontSize: "3rem" }} />
            )}
          </button>
          <div className='text-[#EED3B1] text-4xl font-bold font-jaro'>
            <Link to="/">
              makran
            </Link>
          </div>
          <div className='bg-[#EED3B1] rounded-full p-1'>
          <Link to="/profile">
            <CgProfile style={{ color: "#116B53", fontSize: "2rem" }} />
            </Link>
          </div>
        </div>
        <div className='bg-[#116B53] w-1 h-1/2 rounded-xl'></div>

        {/* منوی تمام صفحه */}
        <Menu isMenuOpen={isMenuOpen} setIsMenuOpenHandler={setIsMenuOpen}/>
      </div>

      {/* backdrop */}
      {isMenuOpen && (
        <div 
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
        />
      )}
    </>
  );
}