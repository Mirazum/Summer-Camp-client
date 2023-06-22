import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Pages/Providers/AuthProviders";

const UseClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes',"enrolled"],
        queryFn: async() => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`);
            console.log("res from axios", res);
            return res.data;
        }
    })

    return [classes, loading, refetch]
}

export default UseClasses;
