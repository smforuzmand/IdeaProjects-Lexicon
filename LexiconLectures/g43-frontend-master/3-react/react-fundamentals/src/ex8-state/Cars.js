import React, { useEffect, useState } from 'react';

const Cars = () => {
    const initCarData = { id: 0, brand: "Test", model: "Test" };

    const [car, setCar] = useState(initCarData);

    useEffect(
        () => {
            // Call Api - fetching car data from Backend API
            setCar({ id: 1, brand: "Volvo", model: "V90", gearBox: "Automatic" });
        }, []
    );

    return (
        <div>
            <b>Car Info: {car.brand} {car.model}</b>
        </div>
    );
};

export default Cars;