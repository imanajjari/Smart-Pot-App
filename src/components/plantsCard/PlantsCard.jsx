import React from 'react';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

export function PlantsCard({ id, name, image, isSelected, submitHandler, deleteHandler }) {
  return (
    <motion.div 
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      className='bg-[#116B53] rounded-lg shadow-2xl relative'
    >
      <div
        className='bg-[#116B53] rounded-lg shadow-2xl p-2 relative overflow-hidden'
        onClick={e => submitHandler(e, id)}
      >
        
        {isSelected && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#EED3B1] pointer-events-none rounded-full"
          />
        )}

        <div className="relative z-10">
          <img src={image} alt="image of plant" className='animate-bounce p-2' />
          <h2 className='font-jar text-[#EED3B1] text-xl font-jaro'>{name}</h2>
        </div>
        
      </div>

      {deleteHandler && (
        <div
          onClick={(e) => deleteHandler(id) }
          className='absolute z-30 top-[-12px] right-[-12px] w-[32px] h-[32px] flex items-center justify-center bg-slate-600 rounded-full shadow-md cursor-pointer'
        >
          <IoClose style={{ color: "#EED3B1", fontSize: "2rem" }} />
        </div>
      )}
    </motion.div>
  );
}
