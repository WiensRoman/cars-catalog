import {useMutation, useQueryClient} from "@tanstack/react-query";
import {CarService} from "../../../../services/car.service.js";

export const UseCreateCar = (reset) => {
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

    return {createCar}
};

export default UseCreateCar;