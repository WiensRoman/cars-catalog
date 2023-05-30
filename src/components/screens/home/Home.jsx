import styles from './Home.module.css'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {CarService as carService, CarService} from "../../../services/car.service.js";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../providers/AuthProvider.jsx";
import {useQuery} from "@tanstack/react-query";
import Header from "../../ui/Header.jsx";
import Catalog from "../../ui/Catalog.jsx";


function Home() {
    const {data, isLoading} = useQuery(['cars'],() => carService.getAll())


    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Cars catalog</h1>

            <Header />

            <CreateCarForm/>
            <Catalog data={data}/>
        </div>
    )
}
export default Home
