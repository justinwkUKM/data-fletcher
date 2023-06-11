'use client'
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from "next/navigation";

const CarForm = () => {
  const router = useRouter();
  const [ownerId, setOwnerId] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2022);
  const [color, setColor] = useState('');

  const handleSubmit = async (event) => {
    

    event.preventDefault();
    try {
        console.log(typeof(year))
      const response = await axios.post('/api/cars', {
        make,
        model,
        year:parseInt(year),
        color,
      });
      console.log(response.ok);
      router.push("/");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="ownerId" className="block mb-2 font-bold text-gray-700">
          Owner ID
        </label>
        <input
          type="text"
          id="ownerId"
          name="ownerId"
          value={ownerId}
          onChange={(event) => setOwnerId(event.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="make" className="block mb-2 font-bold text-gray-700">
          Make
        </label>
        <input
          type="text"
          id="make"
          name="make"
          value={make}
          onChange={(event) => setMake(event.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="model" className="block mb-2 font-bold text-gray-700">
          Model
        </label>
        <input
          type="text"
          id="model"
          name="model"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block mb-2 font-bold text-gray-700">
          Year
        </label>
        <input
          type="number"
          id="year"
          name="year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="color" className="block mb-2 font-bold text-gray-700">
          Color
        </label>
        <input
          type="text"
          id="color"
          name="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CarForm;