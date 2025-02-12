import React from 'react'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
export function Menu({isMenuOpen, setIsMenuOpenHandler}) {
  return (
    <div className={`
        fixed top-0 left-0 w-full h-screen bg-[#EED3B1]
        shadow-lg z-50 pt-20
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        overflow-hidden
        ${isMenuOpen ? 
          'opacity-100 translate-y-0' : 
          'opacity-0 -translate-y-full'
        }
      `}>
        <nav className="flex justify-center items-center p-6 relative">
          <img src={process.env.PUBLIC_URL+"/images/гілочка 1.png"} alt="bg nav" className={`
      absolute inset-x-[150px] inset-y-[-50%] lg:inset-x-[30%] lg:inset-y-[-25%]
      transition-all duration-700 ease-out z-0
      ${isMenuOpen ?
        'opacity-100 translate-x-0 delay-0' :
        'opacity-0 -translate-y-[400px] delay-0'
      }
    `}/>
          <img src={process.env.PUBLIC_URL+"/images/гілочка 2.png"} alt="bg nav" className={`
      absolute inset-x-[-30%] inset-y-[80%] lg:inset-x-[45%] lg:inset-y-[100%]
      transition-all duration-700 ease-in z-0
      ${isMenuOpen ?
        'opacity-100 translate-x-0 delay-0' :
        'opacity-0 translate-y-[200px] delay-0'
      }
    `}/>
          <ul className="space-y-5 px-12 mt-12 text-[#0a4a3a] text-3xl 
      border-r-8 border-[#0a4a3a] border-dotted
      max-h-[70vh] overflow-y-auto scrollbar-hide z-10 text-center">
            <li className="block py-2" ><Link to="/" onClick={() => setIsMenuOpenHandler(!isMenuOpen)}>صفحه اصلی</Link></li>
            <li className="block py-2" ><Link to="/plants-list" onClick={() => setIsMenuOpenHandler(!isMenuOpen)}>انتخاب گیاه</Link></li>
            <li className="block py-2" ><Link to="/profile" onClick={() => setIsMenuOpenHandler(!isMenuOpen)}>پروفایل</Link></li>
            <li className="block py-2" ><Link to="tell:09393033001" onClick={() => setIsMenuOpenHandler(!isMenuOpen)}>تماس</Link></li>
            <li className="flex py-2 justify-center text-4xl" onClick={() => setIsMenuOpenHandler(!isMenuOpen)}><IoClose style={{ color: "#0a4a3a", fontSize: "3rem" }}/></li>
          </ul>
        </nav>
      </div>
  )
}
