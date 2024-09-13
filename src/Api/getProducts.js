import { useQuery } from "@tanstack/react-query"
import axiosClient from "./axiosClient"

const getProducts = async() => {
    const response  = await axiosClient.get('')
    return response
}

export const getData = function() {
    return useQuery({
        queryKey: ['data'],
        queryFn: getProducts
    })
}