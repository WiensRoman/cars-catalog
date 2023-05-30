import styles from './Home.module.css'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CarService as carService, CarService} from "../../../services/car.service.js";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useQuery} from "@tanstack/react-query";


function Home() {
    const {data, isLoading} = useQuery(['cars'],() => carService.getAll())

    const {user,setUser} = useContext(AuthContext)

    if(isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Cars catalog</h1>



            <CreateCarForm/>
                <div>
                    {data.length ? data.map(car => (
                    <CarItem key={car.id} car={car}/>
                    ))
                        : <p>Машин нет</p>
                    }
            </div>
        </div>
    )
}
export default Home
