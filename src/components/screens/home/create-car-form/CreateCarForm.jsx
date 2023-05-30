import styles from './CreateCarForm.module.css';
import {useState} from "react";
import carItem from "../car-item/CarItem.jsx";
import CarItem from "../car-item/CarItem.jsx";
import {useForm} from "react-hook-form";
import {CarService} from "../../../../services/car.service.js";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const CreateCarForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        mode: 'onChange',
    })

    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'],
            data => CarService.create(data),
        {
        onSuccess: () => {
            queryClient.invalidateQueries('cars')
            reset()
        }
    }
    )

    const createCar = data => {
        mutate(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', {required: "Name is required!"})}
                placeholder='Name'
            />

            {errors?.name?.message && (
                <p
                    style={{
                    color: 'red',
            }}
                >
                    Name is required
                </p>
            )}
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