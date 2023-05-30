import styles from './CreateCarForm.module.css';
import {useState} from "react";
import carItem from "../car-item/CarItem.jsx";
import CarItem from "../car-item/CarItem.jsx";
import {useForm} from "react-hook-form";
import {CarService} from "../../../../services/car.service.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import ErrorMessage from "./ErrorMessage.jsx";
import useCreateCar from "./useCreateCar.js";

const CreateCarForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange',
    })

    const {createCar} = useCreateCar(reset)

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', {required: "Name is required!"})}
                placeholder='Name'
            />

            <ErrorMessage error={errors?.name?.message}/>

            <input
                {...register('price', {required: true})}
                placeholder='Price'
            />
            <input
                {...register('image', {required: true})}
                placeholder='Image'
            />

            <button className= 'btn'>Create</button>
        </form>
    );
};

export default CreateCarForm;