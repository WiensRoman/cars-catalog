import styles from './Home.module.css'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {CarService} from "../../../services/car.service.js";
import {useNavigate} from "react-router-dom";


function Home() {
    const [cars, setCars] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const data = await CarService.getAll();

            setCars(data)
        }

        fetchData()
    },[])

    "use strict";


    return (
        <div>
                <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars}/>
                <div>
                    {cars.length ? cars.map(car => (
                    <CarItem key={car.id} car={car}/>
                    ))
                        : <p>Машин нет</p>
                    }
            </div>
        </div>
    )
}
export default Home
