import React from 'react';
import CarItem from "../screens/home/car-item/CarItem.jsx";

const Catalog = ({data}) => {
    return (
        <div>
            {data.length ? data.map(car => (
                    <CarItem key={car.id} car={car}/>
                ))
                : <p>Машин нет</p>
            }
        </div>
    );
};

export default Catalog;