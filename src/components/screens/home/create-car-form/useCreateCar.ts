import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CarService} from "../../../../services/car.service.ts";
import {SubmitHandler, UseFormReset} from "react-hook-form";
import {ICarData} from "../../../../types/car.interface";

export const UseCreateCar = (reset:UseFormReset<ICarData>) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'],
        (data: ICarData) => CarService.create(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['cars'])
                reset()
            }
        }
    )

    const createCar: SubmitHandler<ICarData> = data => {
        mutate(data)
    }

    return {createCar}
};

export default UseCreateCar;