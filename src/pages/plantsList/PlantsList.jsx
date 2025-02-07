import React, { useState, useEffect } from 'react';
import { PlantsCard } from '../../components';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function PlantsList() {
  const [flowerList, setFlowerList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFlower, setSelectedFlower] = useState(null);


  useEffect(() => {
    axios
      .get("https://goldan-server.liara.run/flowerList")
      .then((res) => {
        setFlowerList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching flower list:", err.response?.data || err.message);
      });
      axios
      .get("https://goldan-server.liara.run/flower")
      .then((res) => {
        setSelectedFlower(res.data.id);
      })
      .catch((err) => {
        console.error("Error fetching flower list:", err.response?.data || err.message);
      });
  }, []);

  const submitHandler = async (e, id) => {
    e.preventDefault();
    const selectedFlower = flowerList.find((flower) => flower.id === id);
    if (!selectedFlower) {
      console.error("Flower not found!");
      return;
    }
    try {
      setSelectedFlower(id);
      await axios.put("https://goldan-server.liara.run/flower", selectedFlower);
    } catch (err) {
      console.error("Error updating flower:", err.response?.data || err.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`https://goldan-server.liara.run/flowerList/${id}`);
      setFlowerList((prevList) => prevList.filter((flower) => flower.id !== id));
      
    } catch (err) {
      setFlowerList((prevList) => prevList.filter((flower) => flower.id !== id));
      console.error("Error deleting flower:", err.response?.data || err.message);
    }
  };

  const filteredFlowers = flowerList.filter((flower) =>
    flower.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <div>
        <input
          type="text"
          className="bg-[#116B53] shadow-2xl w-[75%] text-xl text-[#EED3B1] rounded-xl p-2 my-2 text-right focus:outline-none focus:ring-0 focus:animate-pulseGlow"
          placeholder="جست و جو ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 py-2 px-4">
        <AnimatePresence>
          {filteredFlowers.map((flower) => (
            <PlantsCard
              key={flower.id}
              id={flower.id}
              name={flower.name}
              image={flower.image}
              isSelected={selectedFlower === flower.id}
              submitHandler={(e) => submitHandler(e, flower.id)}
              deleteHandler={flower.id >= 6 ? () => deleteHandler(flower.id) : undefined}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}