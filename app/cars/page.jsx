'use client'
import React, { useEffect, useState } from 'react';

import { useRouter } from "next/navigation";

const CarForm = () => {
    const router = useRouter();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('/api/cars')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error(error));
    }, []);



    return (
        <div className="container p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cars.map(car => (
                    <div key={car.id} className="bg-gray-100 rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-medium text-gray-700">{car.make} - {car.model}</h2>
                        <p className="text-gray-500">{car.year} - {car.color}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarForm;