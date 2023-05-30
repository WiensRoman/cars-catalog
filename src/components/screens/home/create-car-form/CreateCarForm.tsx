import styles from './CreateCarForm.module.css';
import {useState} from "react";
import carItem from "../car-item/CarItem.tsx";
import CarItem from "../car-item/CarItem.tsx";
import {useForm} from "react-hook-form";
import {CarService} from "../../../../services/car.service.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import ErrorMessage from "./ErrorMessage.tsx";
import useCreateCar from "./useCreateCar.ts";
import {ICarData} from "../../../../types/car.interface";

const CreateCarForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<ICarData>({
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